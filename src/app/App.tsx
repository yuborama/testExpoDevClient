import React from "react";
import MyStackCustom from "../../stack";
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
