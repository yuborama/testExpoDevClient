import { IUser } from "../models/user";

export const GET_ALL_USERS = (realm: Realm) => realm.objects<IUser[]>("User");