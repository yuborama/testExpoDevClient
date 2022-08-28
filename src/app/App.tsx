import React from "react";
import MyStackCustom from "../../stack";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";
import Home from "./pages/Home";
import RealmContext from "../Realm";

const App = () => {
  return (
    <RealmContext>
      <MyStackCustom />
      {/* <Home /> */}
    </RealmContext>
  );
};

export default App;
