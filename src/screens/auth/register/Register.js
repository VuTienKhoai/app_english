import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";

export default function Register({ navigation }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const validateEmail = (email) => {
    // Enforce email ending with @gmail.com
    const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    // Trim inputs to avoid whitespace issues
    const trimmedFullname = fullname.trim();
    const trimmedEmail = email.trim();

    // Kiểm tra các trường bắt buộc
    if (!trimmedFullname || !trimmedEmail || !password || !repeatPassword) {
      Alert.alert("Lỗi xác thực", "Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Kiểm tra định dạng email
    if (!validateEmail(trimmedEmail)) {
      Alert.alert(
        "Lỗi xác thực",
        "Vui lòng nhập địa chỉ Gmail hợp lệ (ví dụ: tennguoidung@gmail.com)."
      );
      return;
    }

    // Kiểm tra khớp mật khẩu
    if (password !== repeatPassword) {
      Alert.alert("Lỗi xác thực", "Mật khẩu nhập lại không khớp.");
      return;
    }

    // Kiểm tra độ dài mật khẩu tối thiểu
    if (password.length < 6) {
      Alert.alert("Lỗi xác thực", "Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }

    // Nếu hợp lệ
    Alert.alert("Thành công", "Tạo tài khoản thành công!");
    // Trong ứng dụng thực tế, có thể gửi dữ liệu tới backend ở đây
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://media.giphy.com/media/TFNbcscr9JUUigDzrZ/giphy.gif",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Open a FOXY account with a few details.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={fullname}
        onChangeText={setFullname}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Gmail address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat password"
        secureTextEntry
        value={repeatPassword}
        onChangeText={setRepeatPassword}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>CREATE YOUR ACCOUNT</Text>
      </TouchableOpacity>

     
      <Text style={styles.signInText}>
        Do you already have a FOXY account?{" "}
        <Text
          style={styles.signInLink}
          onPress={() => navigation.navigate("Login")} // Navigate to Login screen
          accessible={true}
          accessibilityLabel="Sign in here"
        >
          Sign in here
        </Text>
      </Text>

     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 24,
    flexGrow: 1,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-start",
    marginBottom: 18,
    marginTop: 10,
  },
  closeText: {
    fontSize: 28,
    color: "#000",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 24,
    borderRadius: 64,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#58CC02",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 30,
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
  signupText: {
    fontSize: 12,
    textAlign: "center",
    color: "#4B5563",
  },
});
