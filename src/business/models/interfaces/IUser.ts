import Realm from "realm";

export type IUser = {
  _id: string;
  _partition: string;
  cc: string;
  email: string;
  name: string;
  password: string;
  role: string;
  tel: string;
};


export type IUserObject = IUser & Realm.Object;