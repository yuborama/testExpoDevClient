import "react-native-get-random-values";
import "expo-dev-client";
import { registerRootComponent } from "expo";
import { AppRegistry } from "react-native";
import App from "./src/app/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
