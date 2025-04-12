import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Route = {
  Home: ["Home"],
  AboutScreen: ["AboutScreen"],
  Home_page1: ["Home_page1"],
  Vocab_img: ["Vocab_img"],
  LessonComplete: ["LessonComplete"],
  DayStreak: ["DayStreak"],
};

export function tabBarVisible(route) {
  const routeName = getFocusedRouteNameFromRoute(route) || ""; // Cung cấp giá trị mặc định là ''

  if (Route[route?.name]) {
    return Route[route?.name].includes(routeName) || !routeName;
  }
  return false;
}
