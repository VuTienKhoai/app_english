import React, { useCallback, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Tutorial from "../../components/header/Tutorial";
import ButtonList from "../../components/button/ButtonList";
import HeaderLesson from "../../components/header/HeaderLesson";
import { dataSocial } from "../../dataFake/DataSocial";
import Animated, { BounceIn, BounceOut } from "react-native-reanimated";
import ButtonSound from "../../components/button/ButtonSound";
import { TEXT_COLORS_DARK } from "../../constants/Color";

const FourthScreen = ({ navigation, route }) => {
  const { progress } = route.params || { progress: 1 / 8 };
  const [selectedSocial, setSelectedSocial] = useState(null);

  const handleSelected = (id) => {
    setSelectedSocial(id);
  };

  const handleContinue = useCallback(() => {
    const newProgress = Math.min(progress + 1 / 8, 1);
    navigation.navigate("Home_page5", { progress: newProgress });
  }, []);

  return (
    <View style={styles.container}>
      <HeaderLesson
        percent={progress}
        onPressGoBack={() => navigation.goBack()}
      />
      <Tutorial
        linkImg={require("../../assets/images/omnom.png")}
        text="Bạn biết tới Duolingo từ đâu?"
      />
      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.btnList}>
            {dataSocial.map((item) => (
              <Animated.View
                entering={BounceIn}
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
              backgroundColor={"#58CC02"}
              shadowColor={"#58A700"}
              borderColor={"#58CC02"}
              textStyle={styles.buttonText1}
            />
          </Animated.View>
        </ScrollView>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffff" },
  scrollContainer: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  btnList: { gap: 20 },
  btn_bottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  buttonText1: {
    color: TEXT_COLORS_DARK,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FourthScreen;
