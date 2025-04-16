import { SafeAreaView } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTabNavigation from "./MainTabNavigation";
import Login from "./../screens/auth/login/Login";
import Register from "../screens/auth/register/Register";
import ForgotPassword from "../screens/auth/forgotPassword/ForgotPassword";
import Lesson from "../screens/lesson/Lesson";

import Question from "./../screens/question/Question";
import Topic from "./../screens/topic/Topic";
import ProgressTopic from "../screens/home/progressTopic/ProgressTopic";
import ConversationLesson from "../screens/home/conversationLesson/ConversationLesson";
import MainStackOnBoarding from "./MainStackOnBoarding";
import StreakScreen from "../screens/home/streak/StreakScreen";

export default function MainStackNavigation() {
  const Stack = createStackNavigator();
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <Stack.Navigator>
      <Stack.Screen
        name="MainStackOnBoarding"
        component={MainStackOnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabNavigation"
        component={MainTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Topic"
        component={Topic}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Lesson"
        component={Lesson}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Question"
        component={Question}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProgressTopic"
        component={ProgressTopic}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConversationLesson"
        component={ConversationLesson}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StreakScreen"
        component={StreakScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // </SafeAreaView>
  );
}
