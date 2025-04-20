import { StyleSheet, TouchableOpacity, View, Animated } from "react-native";
import React, { memo, useMemo, useRef } from "react";
import { SvgXml } from "react-native-svg";
import { iconStar, iconStarLock } from "../../assets/svg/iconStar";

const ButtonLesson = ({ status = "unlock", onPress, size = 50 }) => {
  const isUnlocked = status === "unlock";
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const stylesButton = useMemo(() => {
    return {
      ...styles.buttonLesson,
      backgroundColor: isUnlocked ? "#57CC02" : "#E5E5E5",
    };
  }, [status]);

  const stylesBackground = useMemo(() => {
    return {
      ...styles.btnBackground,
      backgroundColor: isUnlocked ? "#47A301" : "#B6B6B6",
    };
  }, [isUnlocked]);

  const icon = isUnlocked ? iconStar : iconStarLock;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.6,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        disabled={!isUnlocked}
        activeOpacity={1}
      >
        <View style={stylesButton}>
          <SvgXml xml={icon} width={size} height={size} />
        </View>
        <View style={stylesBackground}></View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(ButtonLesson);

const styles = StyleSheet.create({
  buttonLesson: {
    position: "absolute",
    zIndex: 1,
    width: 85,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "45%",
    position: "relative",
  },
  buttonContent: {
    backgroundColor: "red",
  },
  btnBackground: {
    position: "absolute",
    top: 0,
    width: 85,
    height: 78,
    borderRadius: "45%",
  },
});
