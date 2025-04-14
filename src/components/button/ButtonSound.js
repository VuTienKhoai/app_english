import { StyleSheet, Text } from "react-native";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

const ButtonSound = (props) => {
  const {
    title,
    onPress,
    backgroundColor = "#fff",
    width = "85%",
    shadowColor = "#E5E5E5",
    borderColor = "#E5E5E5",
    textStyle,
  } = props;
  const soundRef = useRef(new Audio.Sound());

  const handleLoadSound = useCallback(async () => {
    try {
      await soundRef.current.loadAsync(
        require("./../../assets/audio/click.wav")
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
    <TouchableOpacity
      style={[
        styles.button2,
        {
          backgroundColor: backgroundColor,
          width: width,
          shadowColor: shadowColor,
          borderColor: borderColor,
        },
      ]}
      onPress={handleOnClick}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonSound);

const styles = StyleSheet.create({
  button2: {
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 2,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
});
