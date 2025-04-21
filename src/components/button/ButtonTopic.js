import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { SvgXml } from "react-native-svg";

const ButtonTopic = (props) => {
  const {
    ItemNumberTopic,
    NameTopic,
    iconLesson,
    onPressTopic,
    onPressLesson,
    iconBook,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ButtonLessonLeft} onPress={onPressTopic}>
        <Text style={styles.textItemNumberTopic}>{ItemNumberTopic}</Text>
        <Text style={styles.textNameTopic}>{NameTopic}</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity
        style={styles.ButtonLessonRight}
        onPress={onPressLesson}
      >
        <SvgXml xml={iconBook} style={styles.iconBook} width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(ButtonTopic);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  ButtonLessonLeft: {
    width: "85%",
    backgroundColor: "#57CC02",
    padding: 15,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  ButtonLessonRight: {
    width: "20%",
    backgroundColor: "#57CC02",
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    width: 3, // Đường kẻ dọc
    backgroundColor: "#45A400", // Màu sắc của đường kẻ
    height: "100%", // Chiều cao của đường kẻ (có thể điều chỉnh)
  },
  iconBook: {
    color: "#CCF2B1",
  },
  textItemNumberTopic: {
    color: "#CAF3AE",
    fontWeight: "bold",
  },
  textNameTopic: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
