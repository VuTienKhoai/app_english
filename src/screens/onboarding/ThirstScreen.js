import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AnimatedIntroBlock from "../../components/screenOnBoarding/ScreenOnBoarding";
import { useNavigation } from "@react-navigation/native";

export default function ThirstScreen() {
  const navigation = useNavigation();
  return (
    <AnimatedIntroBlock
      message={
        " Chỉ 7 câu hỏi nhỏ trước khi chúng ta bắt đầu bài học đầu tiên!"
      }
      gifUrl={"https://media.giphy.com/media/QF5J9wUafbuI5g08FV/giphy.gif"}
      buttonText={"CONTINUE"}
      onPress={() => navigation.navigate("FourthScreen")}
    />
  );
}
