import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useRefreshControl from "../hook/useRefreshControl";
import { dontShowHeader } from "../constants";
import Home from "../screens/home/Home";
import MyTabBar from "../components/tabbar/MyTabBar";
import { tabBarVisible } from "../screens/StackOptions";
import NotificationScreen from "../screens/home/NotificationScreen";

export const RefreshContext = createContext({
  isRefresh: false,
  setIsRefresh: null,
});

export default function MainTabNavigation() {
  const TabNavigator = createBottomTabNavigator();
  const renderTabBar = useCallback((props) => <MyTabBar {...props} />, []);

  // refresh control
  const { refreshValue } = useRefreshControl();
  return (
    <RefreshContext.Provider value={refreshValue}>
      <TabNavigator.Navigator
        key="tabNavigator"
        tabBar={renderTabBar}
        screenOptions={dontShowHeader}
        backBehavior="none"
      >
        <TabNavigator.Screen
          key={"Home"}
          name="Home"
          component={Home}
          options={({ route }) => ({
            tabBarLabel: "Trang chủ",
            tabBarVisible: route.name === "Home",
          })}
        />
        <TabNavigator.Screen
          name="AboutScreen"
          component={Home}
          options={({ route }) => ({
            tabBarLabel: "Tổng quan",
            tabBarVisible: tabBarVisible(route),
          })}
        />
        <TabNavigator.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={({ route }) => ({
            tabBarLabel: "Tổng quan",
            tabBarVisible: tabBarVisible(route),
          })}
        />
        <TabNavigator.Screen
          name="EmulationScreen"
          component={Home}
          options={({ route }) => ({
            tabBarLabel: "Tổng quan",
            tabBarVisible: tabBarVisible(route),
          })}
        />
      </TabNavigator.Navigator>
    </RefreshContext.Provider>
  );
}

const styles = StyleSheet.create({});
