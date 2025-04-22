import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import PropTypes from "prop-types";

const BtnContinue = (props) => {
  const {
    text,
    colorText = "#AFAFAF",
    colorBackground = "#E5E5E5",
    colorTextActive = "#FFFFFF",
    colorBackgroundActive = "#58CC02",
    borderColor = "#E5E5E5",
    borderColorActive = "#58CC02",
    shadowColor = "#FFFFFF",
    shadowColorActive = "#58A700",
    status = false,
    onPress,
  } = props;
  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonWrapper}></View> */}
      
      <TouchableOpacity
        style={[
          styles.containerBtnContinue,
          {
            backgroundColor: status ? colorBackgroundActive : colorBackground,
            borderColor: status ? borderColorActive : borderColor,
            shadowColor: status ? shadowColorActive : shadowColor,
          },
        ]}
        onPress={status ? onPress : null} // Đảm bảo không thực thi onPress khi status === false
        disabled={!status} // Vô hiệu hóa khi status === false
      >
        <Text style={{ color: status ? colorTextActive : colorText }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

BtnContinue.propTypes = {
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
  onPress: PropTypes.any,
};

export default memo(BtnContinue);

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Căn giữa theo chiều ngang
    // marginBottom: 30, // Khoảng cách từ dưới cùng của màn hình
    backgroundColor: "#FFF",
  },
  containerBtnContinue: {
    marginVertical: 40,
    paddingVertical: 15,
    // paddingHorizontal: 30,

    borderRadius: 15,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  // buttonWrapper: {
  //   width: "100%", // Đảm bảo chiều rộng của dòng kẻ đủ lớn
  //   height: 1, // Độ dày của dòng kẻ
  //   backgroundColor: "#E5E5E5", // Màu đen cho dòng kẻ
  // },
});
