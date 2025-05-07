import React, { useCallback, useRef, useState } from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";
import Tutorial from "../../components/header/Tutorial";
import HeaderLesson from "../../components/header/HeaderLesson";

import Animated, { BounceIn } from "react-native-reanimated";
import ButtonSound from "../../components/button/ButtonSound";
import { TEXT_COLORS_DARK } from "../../constants/Color";
import FirstContentOnBorading from "./contentOnBorarding/FirstContentOnBorading";
import SecondContentOnBorading from "./contentOnBorarding/SecondContentOnBorading";
import ThirdContentOnBoarding from "./contentOnBorarding/ThirdContentOnBoarding";
import FourthContentOnBoarding from "./contentOnBorarding/FourthContentOnBoarding.";
import FifthContentOnBoarding from "./contentOnBorarding/FifthContentOnBoarding";

const steps = [
  {
    id: "1",
    message: "Bạn biết tới Duolingo từ đâu ?",
    content: <FirstContentOnBorading />,
  },
  {
    id: "2",
    message: "Trình độ Tiếng Anh của bạn ở mức nào?",
    content: <SecondContentOnBorading />,
  },
  {
    id: "3",
    message: "Được rồi, mình cùng học từ cơ bản nhé? ",
    content: null,
  },
  {
    id: "4",
    message: "Cùng chinh phục các kì thi bạn nhé? ",
    content: <ThirdContentOnBoarding />,
  },
  {
    id: "5",
    message: "Hãy cùng lên kế hoạch học tập nhé!",
    content: null,
  },
  {
    id: "6",
    message: "Mục tiêu hàng ngày của bạn là gì?",
    content: <FourthContentOnBoarding />,
  },
  {
    id: "7",
    message: "Giờ thì mình cùng tìm điểm xuất phát phù hợp nhé!",
    content: <FifthContentOnBoarding />,
  },
];
const { width, height } = Dimensions.get("screen");
const FifthScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const flatListRef = useRef();
  const handleNextStep = useCallback(() => {
    if (currentStep + 1 < steps.length) {
      flatListRef.current.scrollToIndex({ index: currentStep + 1 });
      setCurrentStep((prev) => prev + 1);
    } else {
      navigation.navigate("MainTabNavigation");
    }
  }, [currentStep]);

  const handlePrevStep = useCallback(() => {
    if (currentStep > 0) {
      flatListRef.current?.scrollToIndex({ index: currentStep - 1 });
      setCurrentStep((prev) => prev - 1);
    } else {
      navigation.goBack();
    }
  }, [currentStep]);

  const renderItem = ({ item }) => (
    <View style={styles.contentRenderItem}>{item.content}</View>
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
          {(currentStep + 1) / steps.length != 1 && (
            <ButtonSound
              title={"COUNTINUE"}
              onPress={handleNextStep}
              backgroundColor={"#58CC02"}
              shadowColor={"#58A700"}
              borderColor={"#58CC02"}
              textStyle={styles.buttonText1}
            />
          )}
        </Animated.View>
      </View>
      {/* <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.btnList}>
            {dataSocial?.map((item, index) => (
              <Animated.View
                entering={FadeInLeft}
                exiting={BounceOut}
                key={item.id}
              >
                <ButtonList
                  text={item.social}
                  linkImg={item.Image}
                  onPress={handleSelected.bind(null, item.id)}
                  status={selectedSocial === item.id}
                />
              </Animated.View>
            ))}
          </View>
          <Animated.View entering={BounceIn} style={styles.btn_bottom}>
            <ButtonSound
              title={"COUNTINUE"}
              onPress={handleContinue}
              backgroundColor={selectedSocial ? "#58CC02" : "#ccc"}
              shadowColor={selectedSocial ? "#58A700" : "#aaa"}
              borderColor={selectedSocial ? "#58CC02" : "#ccc"}
              textStyle={styles.buttonText1}
            />
          </Animated.View>
        </ScrollView>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffff" },
  tutorialContainer: {
    width: width * 0.7, // Constrain to screen width
    alignItems: "center", // Center content
    alignSelf: "center",
  },
  scrollContainer: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  btnList: { gap: 20 },
  btn_bottom: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText1: {
    color: TEXT_COLORS_DARK,
    fontSize: 16,
    fontWeight: "bold",
  },
  contentRenderItem: {
    width: width,
  },
  bottomScreen: {
    height: height * 0.1,
  },
});

export default FifthScreen;
