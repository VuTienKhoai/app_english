import React, { useCallback, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  FadeInLeft,
  BounceOut,
} from "react-native-reanimated";
import ButtonTarget from "../../../components/button/ButtonTarget";
import { memo } from "react";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

// Dữ liệu mục tiêu
const dataTarget = [
  {
    id: 1,
    textleft: "3 phút / ngày",
    textright: "Dễ",
  },
  {
    id: 2,
    textleft: "10 phút / ngày",
    textright: "Vừa",
  },
  {
    id: 3,
    textleft: "15 phút / ngày",
    textright: "Khó",
  },
  {
    id: 4,
    textleft: "30 phút / ngày",
    textright: "Siêu khó",
  },
];


const FourthContentOnBoarding = () => {
  const [selectedTarget, setSelectedSocial] = useState(null);
  const handleSelected = useCallback((id) => {
    setSelectedSocial(id);
  }, []);
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.btnList}>
        {dataTarget.map((item) => (
          <Animated.View
            entering={FadeInLeft}
            exiting={BounceOut}
            key={item.id}
          >
            <ButtonTarget
              textleft={item.textleft}
              textright={item.textright}
              onPress={() => handleSelected(item.id)}
              status={selectedTarget === item.id}
            />
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
};

export default memo(FourthContentOnBoarding);

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  btnList: { gap: 20 },
});
