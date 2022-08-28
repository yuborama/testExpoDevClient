import { useEffect, useState } from "react";
import getRealm from "../../infrastructure/realm";
import { IUser } from "../models/interfaces/IUser";
import { RealmAtom } from "../context/RealmContext";
import { useAtomValue } from "jotai";

export type requestType<D = undefined, F = string | undefined> = {
  onComplete?: (data: D) => void;
  variables: F;
};

export type mutationType<D = undefined, V = undefined> = [
  (variables: V) => void,
  { data: D | undefined; loading: boolean }
];

export const useCreateUser = (
  props = {} as requestType<IUser>
): mutationType<IUser, IUser> => {
  const { onComplete } = props;
  const realm = useAtomValue(RealmAtom);
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loading, setloading] = useState(false);
  const eject = (variables: IUser) => {
    setloading(true);
    realm?.write(() => {
      const user = realm.create<IUser>("User", {
        ...variables,
      });
      onComplete?.(user);
      setUser(user);
      setloading(false);
    });
  };
  return [eject, { data: user, loading }];
};

export const useGetUserById = async (
  props = {} as requestType<IUser, string>
) => {
  const { onComplete, variables = "" } = props;
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const getAllUsers = async () => {
      const realm = await getRealm();
      const user = realm.objectForPrimaryKey<IUser>("User", variables);
      const data = user?.toJSON() as IUser;
      setloading(false);
      onComplete?.(data);
      setUser(data);
    };
    setloading(true);
    getAllUsers();
  }, []);
  return { data: user, loading };
};

export const useGetAllUsers = (props = {} as requestType<IUser[]>) => {
  const { onComplete } = props ?? {};
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const getAllUsers = async () => {
      const realm = await getRealm();
      const users = realm.objects<IUser>("User");
      const data = users.toJSON() as IUser[];
      setloading(false);
      onComplete?.(data);
      setUsers(data);
    };
    setloading(true);
    getAllUsers();
  }, []);
  return { data: users, loading };
};

export const useGetFilterUsers = (props = {} as requestType<IUser[]>) => {
  const { onComplete, variables } = props ?? {};
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const getAllUsers = async () => {
      const realm = await getRealm();
      const users = realm.objects<IUser>("User").filtered(`${variables}`);
      const data = users.toJSON() as IUser[];
      setloading(false);
      onComplete?.(data);
      setUsers(data);
    };
    setloading(true);
    getAllUsers();
  }, []);
  return { data: users, loading };
};

type variablesLoginRequestType = {
  email: string;
  password: string;
};

export type requestTypeLogin<D = undefined, F = undefined> = {
  onComplete?: (data: D) => void;
  variables: F;
};

export const Login = async (
  props = {} as requestTypeLogin<IUser, variablesLoginRequestType>
) => {
  const { onComplete, variables } = props;
  const { email, password } = variables;
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  useEffect(() => {
    const getAllUsers = async () => {
      const realm = await getRealm();
      const users = realm.objects<IUser>("User").filtered(`email = "${email}"`);
      const userData = users.find((data) => data.email === email);

      const user = realm.objectForPrimaryKey<IUser>("User", variables);
      const data = user?.toJSON() as IUser;
      setloading(false);
      onComplete?.(data);
      setUser(data);
    };
    setloading(true);
    getAllUsers();
  }, []);
  return { data: user, loading };
};

export type GLQType<P> = (R: Realm) => Realm.Results<P>;
export type PLQType<P> = {
  onComplete?: (data: P) => void;
  filter?: {
    key: string;
    operator: "==" | "!=" | ">" | "<" | ">=" | "<=" | "CONTAINS" | "=";
    value: string;
  }[];
  onError?: (error: Error) => void;
};

export type RMType<P> = [
  eject: (variables: P) => Promise<P>,
  data: {
    data?: P;
    loading?: boolean;
  }
];

export const useLazyQueryRealm = <P>(
  LazyQuery: GLQType<P>,
  props = {} as PLQType<P>
): RMType<P> => {
  const { onComplete, filter, onError } = props;
  const realm = useAtomValue(RealmAtom);
  const [data, setData] = useState<P>();
  const [loading, setLoading] = useState(false);
  const eject = (variables: P) => {
    const promise = new Promise<P>((resolve, reject) => {
      setLoading(true);
      const ejectLazyQuery = async () => {
        const getQuery = LazyQuery(realm).filtered(
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
      try {
        if (realm) {
          ejectLazyQuery();
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
