import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";

export default function EnterOTP({ navigation }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (text, index) => {
    if (isNaN(text)) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    setError("");
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent: { key } }, index) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Xử lý paste OTP
  const handlePaste = (text) => {
    if (text.length === 4 && /^\d{4}$/.test(text)) {
      const newOtp = text.split("");
      setOtp(newOtp);
      inputRefs.current[3].focus();
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (otp.some((digit) => !digit)) {
      setError("Please enter complete OTP");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      // Giả lập API call (thay bằng API thật nếu có)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Giả lập kiểm tra OTP (ví dụ: OTP đúng là "1234")
          if (otp.join("") === "1234") {
            resolve();
          } else {
            reject(new Error("Invalid OTP"));
          }
        }, 1000);
      });
      // Hiển thị thông báo thành công
      Alert.alert("Success", "OTP verified successfully!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("resetPassword"),
        },
      ]);
    } catch (err) {
      setError("Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.innerContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.closeIcon}>×</Text>
            </TouchableOpacity>

            <View style={styles.logoContainer}>
              <Image
                source={{
                  uri: "https://media.giphy.com/media/m9RCIWq7YjSkaDvWSc/giphy.gif",
                }}
                style={styles.logo}
              />
            </View>

            <Text style={styles.title}>Verify Account</Text>
            <Text style={styles.description}>
              Please enter the{" "}
              <Text style={styles.codeLabel}>4-digit CODE</Text> sent to your
              phone number
            </Text>

            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  style={[styles.otpInput, error && styles.otpInputError]}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onPaste={(e) => handlePaste(e.nativeEvent.text)} // Xử lý paste
                  editable={!isLoading}
                  textAlign="center"
                  accessibilityLabel={`OTP digit ${index + 1}`}
                />
              ))}
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={[
                styles.verifyButton,
                (isLoading || otp.some((digit) => !digit)) &&
                  styles.buttonDisabled,
              ]}
              onPress={handleSubmit}
              disabled={isLoading || otp.some((digit) => !digit)}
            >
              <Text style={styles.verifyButtonText}>
                {isLoading ? "VERIFYING..." : "VERIFY PHONE"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  innerContainer: {
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-start",
    padding: 8,
    marginBottom: 24,
  },
  closeIcon: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "600",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  title: {
    color: "#58CC02",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    color: "#374151",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
  },
  codeLabel: {
    fontWeight: "600",
    color: "#111827",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: 280,
    marginBottom: 24,
  },
  otpInput: {
    width: 56,
    height: 56,
    backgroundColor: "#f3f4f6",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  otpInputError: {
    borderColor: "#58CC02",
  },
  errorText: {
    color: "#58CC02",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
  },
  verifyButton: {
    backgroundColor: "#58CC02",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    maxWidth: 280,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginTop: 40,
  },
  buttonDisabled: {
    backgroundColor: "#58CC02",
    opacity: 0.7,
  },
  verifyButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
