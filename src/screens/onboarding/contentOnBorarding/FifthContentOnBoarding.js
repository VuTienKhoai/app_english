import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { memo, useState } from "react";
import { useNavigation } from "@react-navigation/native"; // <-- dùng navigation

const FifthContentOnBoarding = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation(); // <-- hook điều hướng
  // Hàm xử lý khi nhấn vào một tùy chọn
  const handlePressOption = (option) => {
    console.log(`Bạn đã chọn mục: ${option}`);
    if (option === "beginner") {
      navigation.navigate("MainTabNavigation"); // <-- điều hướng đến Homepage
    } else if (option === "intermediate") {
      navigation.navigate("MainTabNavigation"); // <-- điều hướng đến Page2
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.surround}>
            {/* Tùy chọn 1 */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === "beginner" && styles.optionSelected,
              ]}
              onPress={() => handlePressOption("beginner")}
            >
              <View style={styles.suggestedLabel}>
                <Text style={styles.suggestedText}>ĐỀ XUẤT</Text>
              </View>
              <Image
                style={styles.image}
                source={require("../../../assets/images/book_one.png")}
              />
              <View style={styles.options}>
                <Text style={styles.question}>
                  Đây là lần đầu tiên bạn học Tiếng Anh?
                </Text>
                <Text style={styles.text}>Bắt đầu từ bài tập cơ bản nhé!</Text>
              </View>
            </TouchableOpacity>

            {/* Tùy chọn 2 */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === "intermediate" && styles.optionSelected,
              ]}
              onPress={() => handlePressOption("intermediate")}
            >
              <Image
                style={styles.image}
                source={require("../../../assets/images/compass.png")}
              />
              <View style={styles.options}>
                <Text style={styles.question}>
                  Bạn đã biết một chút Tiếng Anh?
                </Text>
                <Text style={styles.text}>
                  Chúng mình cùng tìm điểm khởi đầu phù hợp nhé!
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(FifthContentOnBoarding);

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  btnList: { gap: 20 },
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    marginTop: 50,
  },
  content: {
    flex: 1,
  },
  title: {
    paddingVertical: 10,
    marginBottom: 30,
  },
  option: {
    alignSelf: "center",
    flexDirection: "row",
    padding: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    width: "81%",
  },
  options: {
    width: "70%",
  },
  optionSelected: {
    borderColor: "#58CC02",
    backgroundColor: "#E5F8D9",
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  surround: {
    gap: 20,
  },
  question: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  text: {
    color: "#555",
  },
  suggestedLabel: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "#1CB0F6",
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 3,
    zIndex: 1,
  },
  suggestedText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
