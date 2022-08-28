import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import Realm from "realm";
import { RealmAtom } from "../Realm";
import { filterType } from "../types/realm";

export type GQType<P> = (R: Realm) => Realm.Results<P>;
export type PQType<P> = {
  onComplete?: (data: P) => void;
  filter?: filterType[];
  onError?: (error: Error) => void;
};

export const useQueryRealm = <P>(query: GQType<P>, props: PQType<P>) => {
  const { onComplete, filter, onError } = props;
  const realm = useAtomValue(RealmAtom);
  const [data, setData] = useState<P>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllUsers = async () => {
      const getQuery = query(realm).filtered(
        filter?.reduce(
          (acc, curr, idx, arr) =>
            `${acc}${curr.key} ${curr.operator} "${curr.value}"${
              idx === arr.length - 1 ? "" : " && "
            }`,
          ""
        ) ?? ""
      );
      if (!getQuery) throw new Error("No query found");
      const data = getQuery.toJSON() as unknown as P;
      setLoading(false);
      onComplete?.(data);
      setData(data);
    };
    setLoading(true);
    try {
      if (realm) {
        getAllUsers();
      }
    } catch (error) {
      onError?.(error as Error);
    }
  }, [realm]);
  return { data, loading };
};
