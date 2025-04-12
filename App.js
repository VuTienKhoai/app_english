import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStackNavigation from "./src/navigation/MainStackNavigation";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
}
