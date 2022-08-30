import { useAtomValue } from "jotai";
import { useState } from "react";
import { RealmAtom } from "../Realm";
import { filterType } from "../types/realm";

export type GLQType<P> = (R: Realm) => Realm.Results<P>;
export type PLQType<P> = {
  onComplete?: (data: P) => void;
  filter?: filterType[];
  onError?: (error: Error) => void;
};

export type RLQType<P> = [
  eject: ({ filter, onComplete, onError }: PLQType<P>) => Promise<P>,
  data: {
    data?: P;
    loading?: boolean;
  }
];

export const useLazyQueryRealm = <P>(
  LazyQuery: GLQType<P>,
  props = {} as PLQType<P>
): RLQType<P> => {
  const { onComplete, filter, onError } = props;
  const realm = useAtomValue(RealmAtom);
  const [data, setData] = useState<P>();
  const [loading, setLoading] = useState(false);
  const eject = ({
    filter: filterEject,
    onComplete: onCompleteEject,
    onError: onErrorEject,
  }: PLQType<P>) => {
    const promise = new Promise<P>((resolve, reject) => {
      setLoading(true);
      const ejectLazyQuery = async () => {
        const getQuery =
          [...(filter ?? []), ...(filterEject ?? [])].length > 0
            ? LazyQuery(realm).filtered(
                [...(filter ?? []), ...(filterEject ?? [])]?.reduce(
                  (acc, curr, idx, arr) =>
                    `${acc}${curr.key} ${curr.operator} "${curr.value}"${
                      idx === arr.length - 1 ? "" : " && "
                    }`,
                  ""
                )
              )
            : LazyQuery(realm);
        if (!getQuery) throw new Error("No query found");
        const data = getQuery.toJSON() as unknown as P;
        resolve(data);
        setLoading(false);
        onComplete?.(data);
        onCompleteEject?.(data);
        setData(data);
      };
      try {
        if (realm) {
          ejectLazyQuery();
        }
      } catch (error) {
        onError?.(error as Error);
        onErrorEject?.(error as Error);
        reject(error);
      }
    });
    return promise;
  };
  return [eject, { data, loading }];
};
