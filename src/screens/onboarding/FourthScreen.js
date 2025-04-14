import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const FourthScreen = ({ navigation }) => {
  // Điều hướng sang FifthScreen sau 5 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("FifthScreen");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInUp.duration(2000)}>
        <Image
          source={{
            uri: "https://media.giphy.com/media/1GOffIxX68NeJTerav/giphy.gif",
          }}
          style={styles.gif}
        />
        <Text style={styles.title}>ĐANG KHỞI TẠO KHÓA HỌC...</Text>
        <Text style={styles.subtitle}>
          Sẵn sàng gia nhập cộng đồng <Text style={styles.highlight}>32</Text>
        </Text>
        <Text style={styles.subtitle}>
          <Text style={styles.highlight}> triệu người</Text> đang học tiếng Anh
        </Text>
        <Text style={styles.subtitle}>
          <Text>trên Duolingo!</Text>
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  gif: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A9A9A9",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 21,
    color: "#4a4e69",
    textAlign: "center",
    lineHeight: 30,
  },
  highlight: {
    fontWeight: "bold",
    color: "#4a4e69",
  },
});

export default FourthScreen;
