import React, { useState } from "react";
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

export default function ResetPassword({ navigation }) {
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (!newPassword || !repeatPassword) {
      setError("Please fill in all fields");
      return false;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    if (newPassword !== repeatPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    setError("");
    try {
      // Giả lập API call (thay bằng API thật nếu có)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Ví dụ API thật:
      /*
      const response = await fetch("YOUR_API_ENDPOINT/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });
      if (!response.ok) throw new Error("Failed to reset password");
      */
      Alert.alert("Success", "Password changed successfully!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login"),
        },
      ]);
    } catch (err) {
      setError("Failed to reset password. Please try again.");
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
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>

            <View style={styles.logoContainer}>
              <Image
                source={{
                  uri: "https://media.giphy.com/media/m9RCIWq7YjSkaDvWSc/giphy.gif",
                }}
                style={styles.logo}
              />
            </View>

            <Text style={styles.title}>Recover password</Text>
            <Text style={styles.subtitle}>
              Please enter your new password to continue
            </Text>

            <Text style={styles.label}>New password</Text>
            <TextInput
              secureTextEntry
              style={[styles.input, error && styles.inputError]}
              placeholder="Enter new password"
              value={newPassword}
              onChangeText={setNewPassword}
              editable={!isLoading}
              accessibilityLabel="New password"
            />

            <Text style={styles.label}>Repeat password</Text>
            <TextInput
              secureTextEntry
              style={[styles.input, error && styles.inputError]}
              placeholder="Repeat password"
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              editable={!isLoading}
              accessibilityLabel="Repeat password"
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={[
                styles.button,
                (isLoading || !newPassword || !repeatPassword) &&
                  styles.buttonDisabled,
              ]}
              onPress={handleSubmit}
              disabled={isLoading || !newPassword || !repeatPassword}
            >
              <Text style={styles.buttonText}>
                {isLoading ? "CHANGING..." : "CHANGE PASSWORD"}
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
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  closeText: {
    fontSize: 24,
    color: "#000",
  },
  logoContainer: {
    marginBottom: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 96,
    height: 96,
    resizeMode: "contain",
    borderRadius: 12,
  },
  title: {
    color: "#58CC02",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    alignSelf: "flex-start",
    color: "#111827",
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    width: "100%",
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#111827",
    marginBottom: 16,
  },
  inputError: {
    borderColor: "#58CC02",
  },
  errorText: {
    color: "#58CC02",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#58CC02",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    shadowColor: "#58CC02",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: "#58CC02",
    opacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
