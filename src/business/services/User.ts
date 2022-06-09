import getRealm from "../../infrastructure/realm";
import { IUser, IUserObject } from "../models/interfaces/IUser";

let createdUser: IUserObject;
export const writeNewUser = async (data: IUser) => {
  const realm = await getRealm();
  realm.write(() => {
    createdUser = realm.create<IUser>("User", data);
  });

  return createdUser;
};
