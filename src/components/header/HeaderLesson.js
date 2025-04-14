import React, { memo, useCallback, useEffect, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { SvgXml } from "react-native-svg";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { PRIMARY } from "../../constants/Color";
import { icon_Back } from "./../../assets/svg/iconTabNavigation/icon_Back";

const { width } = Dimensions.get("screen");
const AnimatedProgressBar = Animated.createAnimatedComponent(Progress.Bar); // ✅

const HeaderLesson = ({
  icon = icon_Back,
  percent = 0.5,
  onPressGoBack,
  colorProgressBar = PRIMARY,
}) => {
  const navigation = useNavigation();
  const animatedProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: percent,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [percent]);

  const handleGoBack = useCallback(() => {
    if (onPressGoBack) {
      onPressGoBack();
    }
  }, [navigation, onPressGoBack]);

  return (
    <View style={styles.containerHeaderLesson}>
      <TouchableOpacity onPress={handleGoBack}>
        <SvgXml xml={icon} width={20} height={20} />
      </TouchableOpacity>
      <AnimatedProgressBar
        progress={animatedProgress}
        height={20}
        width={width - 80}
        style={styles.ProgressBar}
        color={colorProgressBar}
        borderWidth={0}
      />
    </View>
  );
};

HeaderLesson.propTypes = {
  icon: PropTypes.string,
  percent: PropTypes.number,
  onPressGoBack: PropTypes.func,
  colorProgressBar: PropTypes.string,
};

export default memo(HeaderLesson);

const styles = StyleSheet.create({
  containerHeaderLesson: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    height: 50,
    marginTop: 20,
    marginBottom: 10,
    gap: 10,
  },
  ProgressBar: {
    borderRadius: 15,
  },
});
