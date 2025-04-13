import React, { memo } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types";

const Tutorial = (props) => {
  const { linkImg, text } = props; // Giải cấu trúc từ props

  return (
    <View style={styles.container}>
      {linkImg && <Image source={linkImg} style={styles.linkImg} />}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

Tutorial.propTypes = {
  linkImg: PropTypes.string,
  text: PropTypes.string,
};

export default memo(Tutorial);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 14,
    marginHorizontal: 83,
    marginBottom: 10,
  },
  linkImg: {
    width: 90,
    height: 90,
  },
  text: {
    padding: 17,
    borderRadius: 15, // Viền bo tròn
    borderWidth: 2, // Độ dày của viền
    borderColor: "#E5E5E5", // Màu viền
    marginBottom: 10, // Khoảng cách giữa messageBox và GIF
    fontSize: 16,
    color: "#333",
  },
});
