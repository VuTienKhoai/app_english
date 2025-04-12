import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Accumulate from "../../components/header/Accumulate";
import { icon_streak } from "./../../assets/svg/iconTabNavigation/icon_streak";
import { icon_diamond } from "../../assets/svg/iconTabNavigation/icon_diamond";
import { icon_heart } from "./../../assets/svg/iconTabNavigation/icon_heart";
import { icon_book } from "../../assets/svg/iconTabNavigation/icon_book";
import { icon_duoHeader } from "../../assets/svg/iconTabNavigation/icon_duoHeader";
import { useNavigation } from "@react-navigation/native";
import ButtonTopic from "../../components/button/ButtonTopic";

export default function Home() {
  const navigation = useNavigation();
  const handleNavigateHome = () => {
    navigation.navigate("ProgressTopic");
  };

  const handleNavigateConversationLesson = () => {
    navigation.navigate("ConversationLesson");
  };

  const handleNavigateStreakScreen = () => {
    navigation.navigate("StreakScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.accumulateContainer}>
        <Accumulate
          iconAccumulate={icon_duoHeader}
          style={[styles.accumulate]}
        />
        <Accumulate
          iconAccumulate={icon_streak}
          quantity="1"
          color="#FB9705"
          style={[styles.accumulate]}
          onPress={handleNavigateStreakScreen}
        />
        <Accumulate
          iconAccumulate={icon_diamond}
          quantity="1"
          color="#1CB0F6"
          style={[styles.accumulate]}
        />
        <Accumulate
          iconAccumulate={icon_heart}
          quantity="1"
          color="#F35051"
          style={[styles.accumulate]}
        />
      </View>
      <ButtonTopic
        ItemNumberTopic="PHẦN 1, CỬA 1"
        NameTopic="Gọi đồ uống"
        iconBook={icon_book}
        onPressTopic={handleNavigateHome}
        onPressLesson={handleNavigateConversationLesson}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    gap: 20,
  },
  accumulateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginTop: 50,
  },
  accumulate: {},
});
