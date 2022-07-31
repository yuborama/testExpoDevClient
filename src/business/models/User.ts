import { ObjectSchema } from "realm";

const UserSchema: ObjectSchema = {
  name: "User",
  properties: {
    _id: "string",
    _partition: "string",
    name: "string",
    cc: "string",
    email: "string",
    tel: "string",
    password: "string",
    role: "string",
    sex: "string",
  },
  primaryKey: "_id",
};

export default UserSchema;
// const obejetc = {
//     "title": "User",
//     "primaryKey": "_id",
//     "properties": {
//       "_id": {
//         "bsonType": "string"
//       },
//       "_partition": {
//         "bsonType": "string"
//       },
//         "name": {
//             "bsonType": "string"
//         },
//         "cc": {
//             "bsonType": "string"
//         },
//         "email": {
//             "bsonType": "string"
//         },
//         "tel": {
//             "bsonType": "string"
//         },
//         "password": {
//             "bsonType": "string"
//         },
//         "role": {
//             "bsonType": "string"
//         }
//     },
//     "required": [
//       "_id",
//       "_partition",
//         "name",
//         "cc",
//         "email",
//         "tel",
//         "password",
//         "role"
//     ]
//   }