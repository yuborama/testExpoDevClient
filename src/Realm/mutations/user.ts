import Realm from "realm";
import { IUser } from "../models/user";

export const CREATE_USER = (realm: Realm, variables: IUser) =>
  realm.create<IUser>("User", variables);
