import 'react-native-gesture-handler';
import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";

const DrawerNavigation = createDrawerNavigator({
  Signin: Signin,
  Signup: Signup
});

const Stack = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Signin: Signin,
    Signup: Signup
  },
  {
    headerMode: "none"
  }
);



const AppContainer = createAppContainer(Stack);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "comic-sans-ms-regular": require("./src/assets/fonts/comic-sans-ms-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
