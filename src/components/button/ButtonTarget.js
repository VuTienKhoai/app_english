import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import {
  BACKGROUND_WHITE,
  TEXT_COLORS_BLUE,
  COLOR_BTN_ACTIVE,
} from "../../constants/Color";
import { Audio } from "expo-av";

const BtnTarget = (props) => {
  const {
    textleft,
    textright,
    colorText,
    colorBackground = BACKGROUND_WHITE,
    colorTextActive = TEXT_COLORS_BLUE,
    colorBackgroundActive = COLOR_BTN_ACTIVE,
    borderColor = "#E5E5E5",
    borderColorActive = "#84D8FF",
    shadowColor = "#E5E5E5",
    shadowColorActive = "#84D8FF",
    status,
    onPress,
  } = props;
 const soundRef = useRef(new Audio.Sound());

  const handleLoadSound = useCallback(async () => {
    try {
      await soundRef.current.loadAsync(
        require("./../../assets/audio/click_button1.mp3")
      );
    } catch (error) {
      console.error("Lỗi tải âm thanh:", error);
    }
  }, [soundRef]);

  useEffect(() => {
    handleLoadSound();
    return () => {
      soundRef.current.unloadAsync().catch((error) => {
        console.error("Lỗi dọn dẹp âm thanh:", error);
      });
    };
  }, []);

  const playSound = async () => {
    try {
      await soundRef.current.replayAsync();
    } catch (error) {
      console.error("Lỗi phát âm thanh:", error);
    }
  };
  const handleOnClick = useCallback(async () => {
    await playSound();
    onPress && onPress();
  }, [onPress]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          {
            backgroundColor: status ? colorBackgroundActive : colorBackground,
            borderColor: status ? borderColorActive : borderColor,
            shadowColor: status ? shadowColorActive : shadowColor,
          },
          styles.button,
        ]}
        onPress={handleOnClick}
      >
        <Text
          style={[
            { color: status ? colorTextActive : colorText },
            styles.textbtnTime,
          ]}
        >
          {textleft}
        </Text>
        <Text
          style={[
            { color: status ? colorTextActive : colorText },
            styles.textbtnLevel,
          ]}
        >
          {textright}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
BtnTarget.PropTypes = {
  text: PropTypes.string,
  colorText: PropTypes.string,
  colorBackground: PropTypes.string,
  colorTextActive: PropTypes.string,
  colorBackgroundActive: PropTypes.string,
  borderColor: PropTypes.string,
  borderColorActive: PropTypes.string,
  shadowColor: PropTypes.string,
  shadowColorActive: PropTypes.string,
  status: PropTypes.bool,
  onPress: PropTypes.func,
};
export default memo(BtnTarget);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25, //cach hai ben màn hình
  },
  button: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 13,
    borderWidth: 2, // Độ dày viền
    shadowOffset: { width: 0, height: 2 }, // Bóng đổ lệch xuống dưới nhiều hơn
    shadowOpacity: 1, // Độ trong suốt của bóng (React Native)
  },
  textbtnTime: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textbtnLevel: {
    fontSize: 16,
  },
});
