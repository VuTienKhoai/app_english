import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { icon_book } from "../../assets/svg/iconTabNavigation/icon_book";
import { useNavigation } from "@react-navigation/native";
import ButtonTopic from "../../components/button/ButtonTopic";
import HeaderHome from "./components/HeaderHome";
import ContentHome from "./components/ContentHome";

export default function Home() {
  const navigation = useNavigation();
  const [currentTopic, setCurrentTopic] = useState();
  const handleNavigateHome = () => {
    navigation.navigate("ProgressTopic");
  };

  const handleNavigateConversationLesson = () => {
    navigation.navigate("ConversationLesson");
  };

  return (
    <View style={styles.container}>
      <HeaderHome />
      {/* <ButtonTopic
        ItemNumberTopic="PHẦN 1, CỬA 1"
        NameTopic={currentTopic?.nameTopic || []}
        iconBook={icon_book}
        onPressTopic={handleNavigateHome}
        onPressLesson={handleNavigateConversationLesson}
      /> */}
      <ContentHome setCurrentTopic={setCurrentTopic} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 30,
    // gap: 20,

  },
  accumulateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginTop: 50,
  },
  accumulate: {},
});
