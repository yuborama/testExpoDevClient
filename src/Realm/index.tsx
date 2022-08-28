import { atom, useSetAtom } from "jotai";
import React, { FC, useEffect } from "react";
import Realm from "realm";
import getRealm from "./config";

export const RealmAtom = atom(null as unknown as Realm);

const RealmContext: FC = ({ children }) => {
  const setRealm = useSetAtom(RealmAtom);

  useEffect(() => {
    const setRealmAsync = async () => {
      console.log("setRealmAsync");
      setRealm(await getRealm());
    };
    setRealmAsync();
  }, []);

  return <>{children}</>;
};

export default RealmContext;
