import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import Realm from "realm";
import { RealmAtom } from "../context/RealmContext";
import { IUser } from "../models/interfaces/IUser";

export type GQType<P> = (R: Realm) => Realm.Results<P>;
export type PQType<P> = {
  onComplete?: (data: P) => void;
  filter?: {
    key: string;
    operator: "==" | "!=" | ">" | "<" | ">=" | "<=" | "CONTAINS" | "=";
    value: string;
  }[];
  onError?: (error: Error) => void;
};
export const GET_ALL_USERS = (realm: Realm) => realm.objects<IUser[]>("User");

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

export type GMType<P> = (R: Realm, Q: P) => P & Realm.Object;
export type PMType<P> = {
  onComplete?: (data: P) => void;
  onError?: (error: Error) => void;
};

export type RMType<P> = [
  eject: (variables: P) => Promise<P>,
  data: {
    data?: P;
    loading?: boolean;
  }
];

export const CREATE_USER = (realm: Realm, variables: IUser) =>
  realm.create<IUser>("User", variables);

export const useMutationRealm = <P>(
  mutation: GMType<P>,
  props = {} as PMType<P>
): RMType<P> => {
  const { onComplete, onError } = props;
  const realm = useAtomValue(RealmAtom);
  const [data, setData] = useState<P>();
  const [loading, setLoading] = useState(false);
  const eject = (variables: P) => {
    const promise = new Promise<P>((resolve, reject) => {
      setLoading(true);
      const ejectMutation = () => {
        realm?.write(() => {
          const getMutation = mutation(realm, variables);
          const dataMutation = getMutation;
          onComplete?.(dataMutation);
          setData(dataMutation);
          resolve(dataMutation);
          setLoading(false);
        });
      };
      try {
        if (realm) {
          ejectMutation();
        }
      } catch (error) {
        onError?.(error as Error);
        reject(error);
      }
    });
    return promise;
  };
  return [eject, { data, loading }];
};

interface filterType {
  key: string;
  operator: "==" | "!=" | ">" | "<" | ">=" | "<=" | "CONTAINS" | "=";
  value: string;
}

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
        const getQuery = LazyQuery(realm).filtered(
          [...(filter ?? []), ...(filterEject ?? [])]?.reduce(
            (acc, curr, idx, arr) =>
              `${acc}${curr.key} ${curr.operator} "${curr.value}"${
                idx === arr.length - 1 ? "" : " && "
              }`,
            ""
          ) ?? ""
        );
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
