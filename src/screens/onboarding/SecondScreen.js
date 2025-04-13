import React from "react";
import { useNavigation } from "@react-navigation/native";
import AnimatedIntroBlock from "../../components/screenOnBoarding/ScreenOnBoarding";

export default function SecondScreen() {
  const navigation = useNavigation();
  return (
    <AnimatedIntroBlock
      message={"Chào bạn! Tớ là Om Nom!"}
      gifUrl={"https://media.giphy.com/media/yc0iGEK3Az6sH2yIqU/giphy.gif"}
      buttonText={"CONTINUE"}
      onPress={() => navigation.navigate("ThirstScreen")}
    />
  );
}
