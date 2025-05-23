import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback } from "react";
import ButtonLesson from "../../../components/button/ButtonLesson";
const { width, height } = Dimensions.get("screen");
const dynamicWaveOffsets = [
  0, // index = 0
  width * 0.08, // index = 1
  width * 0.16, // index = 2
  width * 0.08, // index = 3
  0, // index = 4
  -width * 0.08, // index = 5
  -width * 0.16, // index = 6
];

const ListLesson = ({ listLesson }) => {
  const getTranslateX = useCallback((index, total) => {
    if (index === 0 || index === total - 1) return 0;
    const waveIndex = index % dynamicWaveOffsets.length;
    return dynamicWaveOffsets[waveIndex];
  }, []);

  return (
    <View style={[styles.containerListLesson]}>
      {listLesson?.map((item, index) => {
        const translateX = getTranslateX(index, listLesson.length);

        return (
          <View
            key={item.idLesson}
            style={[styles.itemWrapper, { transform: [{ translateX }] }]}
          >
            <ButtonLesson status={item?.status} />
          </View>
        );
      })}
    </View>
  );
};

export default memo(ListLesson);

const styles = StyleSheet.create({
  containerListLesson: {
    width: width,
    alignItems: "center",
    gap: 50,
    paddingBottom: 20,
  },
});
