import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import Accumulate from "../../../components/header/Accumulate";
import { icon_streak } from "../../../assets/svg/iconTabNavigation/icon_streak";
import { icon_diamond } from "../../../assets/svg/iconTabNavigation/icon_diamond";
import { icon_heart } from "../../../assets/svg/iconTabNavigation/icon_heart";
import { useNavigation } from "@react-navigation/native";
import { icon_duoHeader } from "../../../assets/svg/iconTabNavigation/icon_duoHeader";

const HeaderHome = () => {
  const navigation = useNavigation();
  const handleNavigateStreakScreen = () => {
    navigation.navigate("StreakScreen");
  };
  return (
    <View style={styles.accumulateContainer}>
      <Accumulate iconAccumulate={icon_duoHeader} style={[styles.accumulate]} />
      <Accumulate
        iconAccumulate={icon_streak}
        quantity="1"
        color="#FB9705"
        style={[styles.accumulate]}
        onPress={handleNavigateStreakScreen}
      />
      <Accumulate
        iconAccumulate={icon_diamond}
        quantity="1"
        color="#1CB0F6"
        style={[styles.accumulate]}
      />
      <Accumulate
        iconAccumulate={icon_heart}
        quantity="1"
        color="#F35051"
        style={[styles.accumulate]}
      />
    </View>
  );
};

export default memo(HeaderHome);

const styles = StyleSheet.create({
  accumulate: {},
  accumulateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 50,

  },
});
