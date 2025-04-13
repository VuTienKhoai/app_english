import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Audio } from "expo-av";
import { images } from "./../../assets/images/index";
import { useNavigation } from "@react-navigation/native";
export default function FirstScreen() {
  const soundRef = useRef(new Audio.Sound());
  const navigation = useNavigation();

  useEffect(() => {
    async function loadSound() {
      try {
        await soundRef.current.loadAsync(
          require("./../../assets/audio/click.wav")
        );
      } catch (error) {
        console.error("Lỗi tải âm thanh:", error);
      }
    }
    loadSound();

    return () => {
      soundRef.current.unloadAsync().catch((error) => {
        console.error("Lỗi dọn dẹp âm thanh:", error);
      });
    };
  }, []);

  // Hàm phát âm thanh
  const playSound = async () => {
    try {
      await soundRef.current.replayAsync();
    } catch (error) {
      console.error("Lỗi phát âm thanh:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.row}>
          <Image source={images.forest} style={styles.logo} />
          <Text style={styles.text}>Elearning</Text>
        </View>
        <View style={styles.group_logo_container}>
          <Image
            source={{
              uri: "https://media.giphy.com/media/Yldo4OWANKw970cVU5/giphy.gif",
            }}
            style={styles.group_logo}
          />
          <Text style={styles.groupText}>The free, fun, and</Text>
          <Text style={styles.groupText}>effective way to learn a</Text>
          <Text style={styles.groupText}>language!</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button1}
            onPress={async () => {
              await playSound(); // Phát âm thanh
              navigation.navigate("SecondScreen");
            }}
          >
            <Text style={styles.buttonText1}>GET STARTED</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={async () => {
              await playSound(); // Phát âm thanh
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonText2}>I ALREADY HAVE AN ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  text: {
    color: "#58CC02",
    fontSize: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 35,
  },
  logo: {
    width: 50,
    height: 50,
  },
  group_logo_container: {
    alignItems: "center",
    marginBottom: 45,
  },
  group_logo: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
  groupText: {
    color: "#4B4B4B",
    fontSize: 28,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  buttonsContainer: {
    alignItems: "center",
    gap: 20,
    marginBottom: 35,
  },
  button1: {
    backgroundColor: "#58CC02",
    paddingVertical: 15,
    borderRadius: 15,
    width: "85%",
    alignItems: "center",
    shadowColor: "#58A700",
    borderWidth: 2,
    borderColor: "#58CC02",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
  button2: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 15,
    width: "85%",
    alignItems: "center",
    shadowColor: "#E5E5E5",
    borderWidth: 2,
    borderColor: "#E5E5E5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText1: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#1CB0F6",
    fontSize: 16,
    fontWeight: "bold",
  },
});
