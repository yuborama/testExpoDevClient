import { useEffect, useState } from "react";
import getRealm from "../../infrastructure/realm";
import { IUser } from "../models/interfaces/IUser";
import { useMainContext } from "../context/RealmContext";

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
  const realm = useMainContext();
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
