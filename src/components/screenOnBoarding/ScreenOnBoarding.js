import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInUp, BounceIn } from "react-native-reanimated";
import ButtonSound from "../button/ButtonSound";

export default function AnimatedIntroBlock({
  message,
  gifUrl,
  buttonText,
  onPress,
  textAnimation = FadeInUp.duration(1200),
  gifAnimation = BounceIn,
  buttonAnimation = BounceIn,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animated.View entering={textAnimation} style={styles.messageBox}>
        <View>
          <Text style={styles.text}>{message}</Text>
        </View>
      </Animated.View>

      <Animated.View entering={gifAnimation}>
        <Image source={{ uri: gifUrl }} style={styles.gif} />
      </Animated.View>
      <View style={styles.buttonWrapper} />
      <Animated.View entering={buttonAnimation} style={styles.btn_bottom}>
        <ButtonSound
          title={buttonText}
          onPress={onPress ?? (() => navigation.goBack())}
          backgroundColor={"#58CC02"}
          shadowColor={"#58A700"}
          borderColor={"#58CC02"}
          textStyle={styles.buttonText1}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  messageBox: {
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    marginTop: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  gif: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  button1: {
    backgroundColor: "#58CC02",
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 15,
    width: "85%",
    alignItems: "center",
    shadowColor: "#58A700",
    borderWidth: 2,
    borderColor: "#58CC02",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    marginBottom: 40,
  },
  buttonText1: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonWrapper: {
    width: "100%",
    height: 1,
    backgroundColor: "#E5E5E5",
    marginBottom: 30,
  },
  btn_bottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
});
