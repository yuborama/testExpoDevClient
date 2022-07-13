import React from "react";
import MyStackCustom from "../../stack";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";
import RealmContextProvider from "../business/context/RealmContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <RealmContextProvider>
      <MyStackCustom />
      {/* <Home /> */}
    </RealmContextProvider>
  );
};

export default App;
