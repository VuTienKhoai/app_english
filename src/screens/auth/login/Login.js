import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import InputFromAuth from "../../../components/input/InputFormAuth";
import { useForm } from "react-hook-form";
import { PHONE_RULES, USERNAME_RULES } from "../../../constants/Rules";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("123@gmail.com");
  const [password, setPassword] = useState("*********");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const handleLogin = () => {
    // Handle login logic here (e.g., API call, validation)
    console.log("Logging in with:", email, password);
  };
  const onSubmit = (values) => {
    console.log("🚀 ~ onSubmit ~ values:", values);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()} // Close the screen or navigate back
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

      <Text style={styles.title}>Sign into your Account</Text>
      <Text style={styles.subtitle}>Log into your FOXY account</Text>

      <InputFromAuth
        name="userName"
        control={control}
        title="Tên người dùng"
        placeholder="Nhập tên người dùng"
        rules={USERNAME_RULES}
        errors={errors.userName}
        keyBoardType="default"
      />

      <InputFromAuth
        name="userName"
        control={control}
        title="Mật khẩu"
        placeholder="Nhập mật khẩu"
        rules={PHONE_RULES}
        errors={errors.password}
        secureTextEntry={true}
        keyBoardType="default"
      />

      <Text style={styles.forgotPassword}>
        Do not remember your password?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("ForgotPassword")}
          accessible={true}
          accessibilityLabel="Click here to recover password"
        >
          click here to recover it
        </Text>
      </Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit(onSubmit)}
        accessible={true}
        accessibilityLabel="Log in"
      >
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Do you not have a FOXY account?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")} // Navigate to Register screen
          accessible={true}
          accessibilityLabel="Sign up for an account"
        >
          Sign up here
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "center",
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
    width: 150,
    height: 150,
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
    fontSize: 12,
    textAlign: "center",
    color: "#4B5563",
  },
});
