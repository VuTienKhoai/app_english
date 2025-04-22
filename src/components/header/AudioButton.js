import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import * as Speech from "expo-speech";

const AudioButton = ({ text }) => {
  const speakText = () => {
    Speech.speak(text, {
      language: "en",
      pitch: 1.0,
      rate: 0.9,
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={speakText}>
      <Image
        source={require("../../assets/images/louds.png")}
        style={styles.icon}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    gap: 10,
    paddingHorizontal: 25,
  },
  text: {
    color: "#8E44AD",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  icon: { width: 40, height: 40 },
});

export default AudioButton;
