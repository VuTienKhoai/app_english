import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import { BACKGROUND_WHITE, TEXT_COLORS_BLUE } from "../../constants/Color";
import { Audio } from "expo-av";
const ButtonList = (props) => {
  const {
    linkImg,
    text,
    colorText,
    colorBackground = BACKGROUND_WHITE,
    colorTextActive = TEXT_COLORS_BLUE,
    colorBackgroundActive = "#DDF3FE",
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
        <Image source={linkImg} style={styles.linkImg} />
        <Text
          style={[
            { color: status ? colorTextActive : colorText },
            styles.textbtn,
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
ButtonList.PropTypes = {
  linkImg: PropTypes.string,
  text: PropTypes.string,
  colorText: PropTypes.string,
  colorBackground: PropTypes.string,
  colorTextActive: PropTypes.string,
  colorBackgroundActive: PropTypes.string,
  borderColor: PropTypes.string,
  borderColorActive: PropTypes.string,
  status: PropTypes.bool,
  onPress: PropTypes.func,
};
export default memo(ButtonList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25, //cach hai ben màn hình
  },
  button: {
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderRadius: 13,
    borderWidth: 2, // Độ dày viền
    borderBottomWidth: 4, // Viền dưới đậm 2px
  },
  textbtn: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
