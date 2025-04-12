import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { memo, useState } from "react";
import { SvgXml } from "react-native-svg";
import { icon_volume } from "./../../assets/svg/iconTabNavigation/icon_volume";
const { width } = Dimensions.get("window");

const Answer = (props) => {
  const { prototypeAnswer, translateAnswer } = props;
  const [textWidth, setTextWidth] = useState(0); // Lưu chiều rộng của chữ
  return (
    <View style={styles.container}>
      <View style={styles.containerAnswer}>
        <View style={styles.prototypeAnswer}>
          <SvgXml xml={icon_volume} />
          <View style={styles.textAnswerLesson}>
            <Text
              style={styles.text}
              onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
            >
              {prototypeAnswer}
            </Text>
            <View
              style={[
                styles.dashedUnderline,
                { width: textWidth }, // Đặt chiều rộng bằng với chữ
              ]}
            />
          </View>
        </View>
        <Text style={styles.textTranslate}>{translateAnswer}</Text>
      </View>
    </View>
  );
};

export default memo(Answer);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  containerAnswer: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderWidth: 2, // Màu viền
    borderColor: "#E5E5E5", // Màu viền
    paddingHorizontal: 20,
    marginHorizontal: 20,
    backgroundColor: "#F7F7F7",
    gap: 5,
  },
  prototypeAnswer: {
    flexDirection: "row",
    gap: 10,
  },
  textTranslate: {
    color: "#B0B0B1",
    paddingLeft: 40,
  },
  textAnswerLesson: {
    flexDirection: "column", // Xếp chữ và gạch chân theo cột
    alignItems: "flex-start",
  },
  text: {
    fontSize: 16,
  },
  dashedUnderline: {
    height: 1,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderStyle: "dashed", // Kiểu nét đứt
    marginTop: 4, // Khoảng cách giữa chữ và gạch chân
  },
});
