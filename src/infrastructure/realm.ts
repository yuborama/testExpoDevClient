import Realm from "realm";
import TaskSchema from "../business/models/Task";
import UserSchema from "../business/models/User";

const getRealm = async () => {
  const app = new Realm.App({ id: "task-amxgo" });
  const credentials = Realm.Credentials.anonymous();
  const User = await app.logIn(credentials);
  const realm = await Realm.open({
    path: "todo",
    schema: [TaskSchema, UserSchema],
    sync: { user: User, partitionValue: "testTask" },
  });
  return realm;
};

export default getRealm;

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
