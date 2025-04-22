import React, { useCallback, useRef, useState } from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";
import Tutorial from "../../components/header/Tutorial";
import HeaderLesson from "../../components/header/HeaderLesson";
import Animated, { BounceIn } from "react-native-reanimated";
import ButtonSound from "../../components/button/ButtonSound";
import { TEXT_COLORS_DARK } from "../../constants/Color";
import FifthContentOnBoarding from "./contentOnBorarding/FifthContentOnBoarding";
import FourthContentOnBoarding from "./contentOnBorarding/FourthContentOnBoarding.";
import ThirdContentOnBoarding from "./contentOnBorarding/ThirdContentOnBoarding";
import SecondContentOnBorading from "./contentOnBorarding/SecondContentOnBorading";
import FirstContentOnBorading from "./contentOnBorarding/FirstContentOnBorading";
const steps = [
  {
    id: "1",
    message: "Bạn biết tới Duolingo từ đâu ?",
    content: (onSelect) => <FirstContentOnBorading onSelect={onSelect} />,
  },
  {
    id: "2",
    message: "Trình độ Tiếng Anh của bạn ở mức nào?",
    content: (onSelect) => <SecondContentOnBorading onSelect={onSelect} />,
  },
  {
    id: "3",
    message: "Được rồi, mình cùng học từ cơ bản nhé? ",
    content: () => null,
  },
  {
    id: "4",
    message: "Cùng chinh phục các kì thi bạn nhé? ",
    content: (onSelect) => <ThirdContentOnBoarding onSelect={onSelect} />,
  },
  {
    id: "5",
    message: "Hãy cùng lên kế hoạch học tập nhé!",
    content: () => null,
  },
  {
    id: "6",
    message: "Mục tiêu hàng ngày của bạn là gì?",
    content: (onSelect) => <FourthContentOnBoarding onSelect={onSelect} />,
  },
  {
    id: "7",
    message: "Giờ thì mình cùng tìm điểm xuất phát phù hợp nhé!",
    content: (onSelect) => <FifthContentOnBoarding onSelect={onSelect} />, // Pass onSelect
  },
];

const { width, height } = Dimensions.get("screen");

const FifthScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({}); // Lưu trữ lựa chọn cho từng bước
  const flatListRef = useRef();

  const handleSelect = useCallback((stepId, id) => {
    setSelectedOptions((prev) => ({ ...prev, [stepId]: id })); // Cập nhật lựa chọn cho bước cụ thể
  }, []);

  const handleNextStep = useCallback(() => {
    // Kiểm tra nếu ở bước 1, 2, 4, 6, hoặc 7 mà chưa chọn option, không cho tiếp tục
    if (
      [0, 1, 3, 5, 6].includes(currentStep) &&
      !selectedOptions[steps[currentStep].id]
    ) {
      return;
    }
    if (currentStep + 1 < steps.length) {
      flatListRef.current.scrollToIndex({ index: currentStep + 1 });
      setCurrentStep((prev) => prev + 1);
    } else {
      navigation.navigate("Login"); // Chuyển hướng đến Login khi hoàn thành
    }
  }, [currentStep, selectedOptions]);

  const handlePrevStep = useCallback(() => {
    if (currentStep > 0) {
      flatListRef.current?.scrollToIndex({ index: currentStep - 1 });
      setCurrentStep((prev) => prev - 1);
    } else {
      navigation.goBack();
    }
  }, [currentStep]);

  const renderItem = ({ item }) => (
    <View style={styles.contentRenderItem}>
      {typeof item.content === "function"
        ? item.content((id) => handleSelect(item.id, id))
        : item.content}
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderLesson
        percent={(currentStep + 1) / steps.length || 0}
        onPressGoBack={handlePrevStep}
      />
      <View style={styles.tutorialContainer}>
        <Tutorial
          linkImg={require("../../assets/images/omnom.png")}
          text={steps[currentStep || 0].message}
        />
      </View>
      <FlatList
        ref={flatListRef}
        data={steps}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.bottomScreen}>
        <Animated.View entering={BounceIn} style={styles.btn_bottom}>
          <ButtonSound
            title={"CONTINUE"}
            onPress={handleNextStep}
            backgroundColor={
              [0, 1, 3, 5, 6].includes(currentStep) &&
              !selectedOptions[steps[currentStep].id]
                ? "#ccc"
                : "#58CC02"
            }
            shadowColor={
              [0, 1, 3, 5, 6].includes(currentStep) &&
              !selectedOptions[steps[currentStep].id]
                ? "#aaa"
                : "#58A700"
            }
            borderColor={
              [0, 1, 3, 5, 6].includes(currentStep) &&
              !selectedOptions[steps[currentStep].id]
                ? "#ccc"
                : "#58CC02"
            }
            textStyle={styles.buttonText1}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffff" },
  tutorialContainer: {
    width: width * 0.7,
    alignItems: "center",
    alignSelf: "center",
  },
  contentRenderItem: {
    width: width,
  },
  bottomScreen: {
    height: height * 0.1,
  },
  btn_bottom: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText1: {
    color: TEXT_COLORS_DARK,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FifthScreen;
