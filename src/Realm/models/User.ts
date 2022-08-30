import { ObjectSchema } from "realm";

export type IUser = {
  _id: string;
  _partition: string;
  cc: string;
  email: string;
  name: string;
  password: string;
  role: string;
  tel: string;
  sex: string;
};

const UserSchema: ObjectSchema = {
  name: "User",
  properties: {
    _id: "string",
    _partition: "string",
    cc: "string",
    email: "string",
    name: "string",
    password: "string",
    role: "string",
    sex: "string",
    tel: "string",
  },
  primaryKey: "_id",
};

export default UserSchema;

// {
//   "title": "Task",
//   "primaryKey": "_id",
//   "properties": {
//     "_id": {
//       "bsonType": "string"
//     },
//     "_partition": {
//       "bsonType": "string"
//     },
//     "task": {
//       "bsonType": "string"
//     }
//   },
//   "required": [
//     "_id",
//     "_partition",
//     "task"
//   ]
// }
