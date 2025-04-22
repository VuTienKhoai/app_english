import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
const rankGifs = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTkwMG5hZWJsbDJ4OGd2czUwY3NrMHQyaW56MjdwOGYzcjlvcHJvMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/87cNrqklwyaNKVA5Fv/giphy.gif", // Hạng 1
  "https://media.giphy.com/media/VnlCwytmrcuc5jT2GB/giphy.gif?cid=ecf05e473fmzsoq35n1ww01r63q9xd7ursu8l7wndacxzyk5&ep=v1_stickers_related&rid=giphy.gif&ct=s", // Hạng 2
  "https://media.giphy.com/media/9CC21n237GiI1cgeeS/giphy.gif?cid=ecf05e473fmzsoq35n1ww01r63q9xd7ursu8l7wndacxzyk5&ep=v1_stickers_related&rid=giphy.gif&ct=s", // Hạng 3
];

export default function Ranking() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG04OWJ5b3Y1ZHplcW8xNGlkNGpyOGJ2aG9icHNrbjVsNDllenZpNCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/N4l5gQnBfdcWSppezE/giphy.gif",
            }}
            style={styles.icon}
          />
        </View>
        <Text style={styles.title}>Giải đấu Bạc</Text>
        <Text style={styles.subtitle}>
          Top 15 sẽ được thăng hạng lên giải đấu cao hơn
        </Text>
        <Text style={styles.timeLeft}>1 ngày</Text>

        {rankingData.slice(0, 10)?.map((user, index) => (
          <View style={styles.userItem} key={index}>
            {index < 3 ? (
              <Image source={{ uri: rankGifs[index] }} style={styles.rankGif} />
            ) : (
              <Text style={styles.rank}>{index + 1}</Text>
            )}

            <Image source={{ uri: user.image }} style={styles.avatar} />
            <Text style={styles.username}>{user.name}</Text>
            <Text style={[styles.score, index === 1]}>{user.score} KN</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const rankingData = [
  {
    name: "selvia",
    image:
      "https://storage.googleapis.com/a1aa/image/062061c4-4e3a-4bdf-a587-db79d5548e2c.jpg",
    score: 3331,
  },
  {
    name: "nguyễn Minh...",
    image:
      "https://storage.googleapis.com/a1aa/image/4136f746-4204-4177-44ba-284435b6b977.jpg",
    score: 3027,
  },
  {
    name: "Anastasia Go",
    image: "https://placehold.co/32x32/7f7f7f/000000.png?text=A",
    score: 2715,
  },
  {
    name: "rachael",
    image:
      "https://storage.googleapis.com/a1aa/image/b554b843-f02e-47bc-48cd-2d625ae82c4c.jpg",
    score: 2495,
  },
  {
    name: "Dy An",
    image:
      "https://storage.googleapis.com/a1aa/image/e2c46cb5-10db-4934-b9e9-72b4f925e2fb.jpg",
    score: 1796,
  },
  { name: "Chris P.", image: "https://placehold.co/32x32?text=C", score: 1623 },
  { name: "Luna", image: "https://placehold.co/32x32?text=L", score: 1511 },
  { name: "John T.", image: "https://placehold.co/32x32?text=J", score: 1400 },
  { name: "Mira", image: "https://placehold.co/32x32?text=M", score: 1322 },
  { name: "Leo", image: "https://placehold.co/32x32?text=L", score: 1211 },
  { name: "Hailey", image: "https://placehold.co/32x32?text=H", score: 1110 },
  { name: "Nina", image: "https://placehold.co/32x32?text=N", score: 1033 },
  { name: "Tommy", image: "https://placehold.co/32x32?text=T", score: 998 },
  { name: "Kane", image: "https://placehold.co/32x32?text=K", score: 912 },
  { name: "Emma", image: "https://placehold.co/32x32?text=E", score: 888 },
];

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  rankGif: {
    width: 30,
    height: 30,
    marginRight: 8,
    marginLeft: 0,
  },

  header: {
    flexDirection: "row",
    marginBottom: 12,
  },
  icon: {
    width: 200, // Hoặc lớn hơn nữa nếu thích
    height: 200,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#374151", // text-gray-700
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280", // text-gray-500
    textAlign: "center",
    marginBottom: 4,
  },
  timeLeft: {
    fontSize: 15,
    color: "#F59E0B", // text-yellow-500
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    width: "100%",
    maxWidth: 320,
  },
  rank: {
    width: 40,
    fontWeight: "bold",
    fontSize: 15,
    color: "#9CA3AF", // default gray
    paddingLeft: 8,
  },
  firstPlace: {
    color: "#FBBF24", // text-yellow-400
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  username: {
    fontWeight: "600",
    color: "#374151",
    flexShrink: 1,
    maxWidth: 90,
  },
  score: {
    marginLeft: "auto",
    fontSize: 12,
    fontWeight: "600",
    color: "#9CA3AF",
  },
  greenText: {
    color: "#16A34A", // text-green-600
  },
});
