import Realm from "realm";
import TaskSchema from "../business/models/Task";
import UserSchema from "./models/user";

const getRealm = async () => {
  const app = new Realm.App({ id: "newconnection-lwxfz" });
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