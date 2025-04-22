import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Sửa PropTypes import
import { BACKGROUND_WHITE, TEXT_COLORS_BLUE } from "../../constants/Color";
import { Audio } from "expo-av";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated"; // Thêm reanimated cho hiệu ứng

const BtnTarget = (props) => {
  const {
    textleft,
    textright,
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
  const scale = useSharedValue(1); // Thêm scale cho hiệu ứng nhấn

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleLoadSound = useCallback(async () => {
    try {
      await soundRef.current.loadAsync(
        require("./../../assets/audio/click_button1.mp3")
      );
    } catch (error) {
      console.error("Lỗi tải âm thanh:", error);
    }
  }, []);

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

  const handlePressIn = () => {
    scale.value = withSpring(0.95); // Thu nhỏ khi nhấn
  };

  const handlePressOut = () => {
    scale.value = withSpring(1); // Phóng to lại khi thả
  };

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
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
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
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
      </Animated.View>
    </View>
  );
};

BtnTarget.propTypes = {
  textleft: PropTypes.string,
  textright: PropTypes.string,
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
    marginHorizontal: 25, // Cách hai bên màn hình
  },
  button: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 13,
    borderWidth: 2,
    borderBottomWidth: 4, // Viền dưới đậm hơn
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textbtnTime: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textbtnLevel: {
    fontSize: 16,
  },
});
