import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { ButtonSubmit } from "../../components/button";
import { SvgXml } from "react-native-svg";
import { icon_remove } from "../../assets/svg/iconTabNavigation/icon_remove";
import { icon_Back } from "../../assets/svg/iconTabNavigation/icon_Back";
const { width } = Dimensions.get("screen");
export default function LessonComplete() {
  const navigation = useNavigation();

  const handleNavigationHomePage2 = () => {
    navigation.navigate("DayStreakScreen");
  };
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  });

  return (
    <View style={styles.container}>

      <View style={styles.container_firewire}>
        <TouchableOpacity onPress={handleGoBack} style={styles.buttonLeft}>
          <SvgXml xml={icon_Back} />
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGtqZ3JoYnVjc29majZybGRncXhzaWsyczk1dGJqbnNkaHgwd2JkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7b4jzIciCr73bP2/giphy.gif",
          }}
          style={styles.gif_firewire}
          cachePolicy="memory"
        />
        <Image
          source={{
            uri: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGtqZ3JoYnVjc29majZybGRncXhzaWsyczk1dGJqbnNkaHgwd2JkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7b4jzIciCr73bP2/giphy.gif",
          }}
          style={styles.gif_firewire}
          cachePolicy="memory"
        />
      </View>
      <Image
        source={{
          uri: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGRvdjZ2Z3p1OXI4ajRzNjF3bDY0aGkxejMzYzVvOXhpc3N0NDMxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QF5J9wUafbuI5g08FV/giphy.gif",
        }}
        style={styles.gif}
        cachePolicy="memory"
      />
      <Text style={styles.text_page2}> Lesson Complete!</Text>
      <View style={styles.card_page2}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.headerText}>TOTAL XP</Text>
          </View>
          <View style={styles.content}>
            <Image
              source={require("../../assets/image/total_xp.png")}
              style={styles.img_total_xp}
            ></Image>
            <Text style={styles.xpText}>15</Text>
          </View>
        </View>
        <View style={styles.card_amazing}>
          <View style={styles.header_amazing}>
            <Text style={styles.headerText_amazing}>AMAZING</Text>
          </View>
          <View style={styles.content_amazing}>
            <Image
              source={require("../../assets/image/amazing.png")}
              style={styles.img_total_xp}
            ></Image>
            <Text style={styles.xpText_amazing}>100%</Text>
          </View>
        </View>
      </View>
      <ButtonSubmit title='CONTINUE' onPress={handleNavigationHomePage2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: "#fff",

  },
  container_firewire: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "100%",
    // marginHorizontal: 10
  },
  gif_firewire: {
    // marginTop: 50,
    width: width * 0.4,
    height: width * 0.4,
    // width: 170,
    // height: 220,
  },
  gif: {
    width: 250,
    height: 250,
  },
  text_page2: {
    fontWeight: "bold",
    color: "#FFC234",
    fontSize: 25,
    // marginTop: 20,
  },
  card_page2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // marginTop: 20,
  },
  card: {
    width: 170,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFD700",
    backgroundColor: "#FFD700",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#FFD700",
    width: "100%",
    paddingVertical: 6, // Khoảng cách trên/dưới
    alignItems: "center",
    borderTopLeftRadius: 10, // Bo góc trên trái
    borderTopRightRadius: 10, // Bo góc trên phải
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",
  },
  img_total_xp: {
    width: 25,
    height: 25,
  },
  xpText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
  },
  card_amazing: {
    width: 170,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#58CC02",
    backgroundColor: "#58CC02",
    alignItems: "center",
  },
  header_amazing: {
    backgroundColor: "#58CC02",
    width: "100%",
    paddingVertical: 6, // Khoảng cách trên/dưới
    alignItems: "center",
    borderTopLeftRadius: 10, // Bo góc trên trái
    borderTopRightRadius: 10, // Bo góc trên phải
  },
  headerText_amazing: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  content_amazing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",
  },
  img_total_xp: {
    width: 30,
    height: 30,
  },
  xpText_amazing: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#58CC02",
  },

  text_button: {
    color: "#fff",
    fontWeight: "bold",
  },
});
