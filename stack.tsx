import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import screen1 from "./src/screens/screen1";
import screen2 from "./src/screens/screen2";
import home from "./src/screens/home";
import ScreenFormUser from "./src/screens/forms/user";
import ScreenFormAdmin from "./src/screens/forms/admin";
import Detailpersonal from "./src/screens/details/personal";
import ListAdmin from "./src/screens/lists/listAdmin";
import ListOwner from "./src/screens/lists/listOwners";
import ListPollster from "./src/screens/lists/listpollster";
import LoginScreen from "./src/screens/login";

export type ExploreStackParams = {
  screen1: undefined;
  screen2: undefined;
  home: undefined;
  formAdmin: undefined;
  formUser: undefined;
  formPollster: undefined;
  listAdmin: undefined;
  listOwner: undefined;
  listPollster: undefined;
  login: undefined;
};

const RootStack = createStackNavigator<ExploreStackParams>();

export type navigationScreenProp = StackNavigationProp<ExploreStackParams>;

function MyStackCustom() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="login">
        <RootStack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
        <RootStack.Screen name="screen1" component={screen1} />
        <RootStack.Screen name="screen2" component={screen2} />
        <RootStack.Screen name="listAdmin" component={ListAdmin} />
        <RootStack.Screen name="listOwner" component={ListOwner} />
        <RootStack.Screen name="listPollster" component={ListPollster} />
        <RootStack.Screen name="formAdmin" component={ScreenFormAdmin} />
        <RootStack.Screen name="formUser" component={ScreenFormUser} />
        <RootStack.Screen name="formPollster" component={ScreenFormAdmin} />

        <RootStack.Screen
          name="home"
          component={home}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default MyStackCustom;
