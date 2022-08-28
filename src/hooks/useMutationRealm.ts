import { useAtomValue } from "jotai";
import { useState } from "react";
import { RealmAtom } from "../Realm";

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