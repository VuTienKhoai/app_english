import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { SvgXml } from "react-native-svg";

const Accumulate = (props) => {
  const { iconAccumulate, quantity, color, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SvgXml
        xml={iconAccumulate}
        style={styles.iconAccumulate}
        width={30}
        height={30}
      />
      <Text style={[styles.text, { color: color || "black" }]}>{quantity}</Text>
    </TouchableOpacity>
  );
};

export default memo(Accumulate);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
