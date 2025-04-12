import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  FifthScreen,
  FirstScreen,
  FourthScreen,
  SecondScreen,
  ThirstScreen,
} from "../screens/onboarding";

export default function MainStackOnBoarding() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ThirstScreen"
        component={ThirstScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FourthScreen"
        component={FourthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FifthScreen"
        component={FifthScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
