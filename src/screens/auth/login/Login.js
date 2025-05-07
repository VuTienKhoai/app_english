import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import InputFromAuth from "../../../components/input/InputFormAuth";
import { EMAIL_RULES, PASSWORD_RULES } from "../../../constants/Rules";
import ButtonSound from "../../../components/button/ButtonSound";
import Animated, { BounceIn } from "react-native-reanimated";
import { useLogin } from "./hook/useLogin";
const { width } = Dimensions.get("screen");
export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    handleForgotPassword,
    handleResgister,
  } = useLogin();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Close Login Screen"
        >
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>

        <Image
          source={{
            uri: "https://media.giphy.com/media/MBP7KcK9d3lyqNWRaF/giphy.gif",
          }}
          style={styles.logo}
        />

        <Text style={styles.title}>Đăng nhập tài khoản</Text>

        <InputFromAuth
          name="email"
          control={control}
          title="Địa chỉ email"
          placeholder="Nhập địa chỉ email"
          rules={EMAIL_RULES}
          errors={errors.email}
          keyBoardType="default"
        />

        <InputFromAuth
          name="password"
          control={control}
          title="Mật khẩu"
          placeholder="Nhập mật khẩu"
          rules={PASSWORD_RULES}
          errors={errors.password}
          secureTextEntry={true}
          keyBoardType="default"
        />

        <Text style={styles.forgotPassword}>
          Bạn không nhớ mật khẩu?{" "}
          <Text
            style={styles.link}
            onPress={handleForgotPassword}
            accessible={true}
            accessibilityLabel="Nhấn vào đây để khôi phục mật khẩu"
          >
            nhấn vào đây để khôi phục
          </Text>
        </Text>

        <Animated.View entering={BounceIn} style={styles.btnLogin}>
          <ButtonSound
            title={"Đăng Nhập"}
            onPress={handleSubmit(onSubmit)}
            backgroundColor={"#58CC02"}
            shadowColor={"#58A700"}
            borderColor={"#58CC02"}
            textStyle={styles.buttonText1}
          />
        </Animated.View>

        <Text style={styles.signupText}>
          Bạn chưa có tài khoản?{" "}
          <Text
            style={styles.link}
            onPress={handleResgister} // Điều hướng đến màn hình Đăng ký
            accessible={true}
            accessibilityLabel="Đăng ký tài khoản"
          >
            Đăng ký tại đây
          </Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  closeButton: {
    position: "absolute",
    top: 48,
    right: 24,
  },
  closeText: {
    fontSize: 28,
    color: "#000",
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    alignSelf: "center",
    marginBottom: 24,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#58CC02", // Màu xanh Duolingo
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#4B5563",
    textAlign: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderColor: "#E5E7EB",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: "#374151",
    marginBottom: 16,
  },
  forgotPassword: {
    fontSize: 12,
    color: "#4B5563",
    marginBottom: 44,
  },
  link: {
    color: "#58CC02", // Màu xanh Duolingo
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#58CC02", // Màu xanh Duolingo
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 29,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
  },
  signupText: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    color: "#4B5563",
  },
  buttonText1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnLogin: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
