import Realm from "realm";
import TaskSchema from "../business/models/Task";

const getRealm = async () => {
  const app = new Realm.App({ id: "task-amxgo" });
  const credentials = Realm.Credentials.anonymous();
  const User = await app.logIn(credentials);
  return await Realm.open({
    path: "todo",
    schema: [TaskSchema],
    sync: { user: User, partitionValue: "testTask"},
  });
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