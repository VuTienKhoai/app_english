import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  View,
} from "react-native";
import InputFromAuth from "../../../components/input/InputFormAuth";
import {
  EMAIL_RULES,
  PASSWORD_RULES,
  PASSWORD_RULES_CONFIRM,
  USERNAME_RULES,
} from "../../../constants/Rules";
import Animated, { BounceIn } from "react-native-reanimated";
import ButtonSound from "../../../components/button/ButtonSound";
const { width, height } = Dimensions.get("screen");
export default function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
  });
  const password = watch("password");
  const handleNavigateLogin = useCallback(() => {
    navigation.navigate("Login");
  }, []);
  const onSubmit = (values) => {
    if (!values) {
      ShowToastCustom({
        text1: "Dữ liệu không được để trống",
        typeStatus: "warring",
      });
      return;
    }
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
      <View style={styles.box_imageLogin}>
        <Image
          source={{
            uri: "https://media.giphy.com/media/TFNbcscr9JUUigDzrZ/giphy.gif",
          }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Tạo tài khoản</Text>
      <Text style={styles.subtitle}>
        Hãy tạo tài khoản để đồng hành cùng tớ
      </Text>
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
      <InputFromAuth
        name="confirmPassword"
        control={control}
        title="Mật khẩu nhập lại"
        placeholder="Nhập mật khẩu lại"
        rules={PASSWORD_RULES_CONFIRM(password)}
        errors={errors.confirmPassword}
        secureTextEntry={true}
        keyBoardType="default"
      />
      <InputFromAuth
        name="username"
        control={control}
        title="Tên người dùng"
        placeholder="Nhập tên người dùng"
        rules={USERNAME_RULES}
        errors={errors.username}
        keyBoardType="default"
      />
      <Animated.View entering={BounceIn} style={styles.btnLogin}>
        <ButtonSound
          title={"Tạo tài khoản của bạn"}
          onPress={handleSubmit(onSubmit)}
          backgroundColor={"#58CC02"}
          shadowColor={"#58A700"}
          borderColor={"#58CC02"}
          textStyle={styles.buttonText1}
        />
      </Animated.View>
      <Text style={styles.signInText}>
        Bạn đã có tài khoản?{" "}
        <Text
          style={styles.signInLink}
          onPress={handleNavigateLogin} // Navigate to Login screen
          accessible={true}
          accessibilityLabel="Sign in here"
        >
          Đăng nhập tại đây
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    flex: 1,
  },
  closeButton: {
    alignSelf: "flex-end",
    // marginBottom: 10,
    marginTop: 10,
  },
  closeText: {
    fontSize: 28,
    color: "#000",
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#58CC02", // Màu xanh Duolingo
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#f9fafb",
    borderColor: "#e5e7eb",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#4b5563",
    marginBottom: 19,
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#58CC02",
    paddingVertical: 14,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    marginTop: 30,
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 1,
  },
  signInText: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 26,
    textAlign: "center",
  },
  signInLink: {
    color: "#58CC02",
    textDecorationLine: "underline",
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
  box_imageLogin: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
