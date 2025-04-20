import React, { useCallback, useEffect, useRef } from "react";
import { FlatList, View, StyleSheet, Dimensions, Text } from "react-native";
import { dataLesson } from "../../../dataFake/DataLesson";
import ListLesson from "./ListLesson";
const { width } = Dimensions.get("screen");
const dynamicWaveOffsets = [
  -width * 0.2,
  -width * 0.1,
  0,
  width * 0.1,
  width * 0.2,
  width * 0.1,
  0,
  -width * 0.1,
];

const ContentHome = ({ setCurrentTopic }) => {
  const onReachTopicEnd = (item) => {
    setCurrentTopic(item);
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    viewableItems.forEach((viewable) => {
      if (viewable.isViewable) {
        onReachTopicEnd(viewable.item);
      }
    });
  }, []);

  const getTranslateX = useCallback((index, total) => {
    if (index === 0 || index === total - 1) return 0;
    const waveIndex = (index - 1) % dynamicWaveOffsets.length;
    return dynamicWaveOffsets[waveIndex];
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <View key={item.idTopic} style={styles.itemWrapper}>
          <View style={styles.topicHeader}>
            <View style={styles.topicTitleWrapper}>
              <Text style={styles.topicTitle}>{item.nameTopic}</Text>
            </View>
          </View>
          <ListLesson listLesson={item?.listLessons || []} />
        </View>
      );
    },
    [getTranslateX]
  );

  useEffect(() => {
    if (dataLesson) {
      setCurrentTopic(dataLesson[0]);
    }
  }, []);

  return (
    <FlatList
      data={dataLesson}
      keyExtractor={(item) => String(item.idTopic)} // Đảm bảo trả về giá trị duy nhất và dạng chuỗi
      style={styles.contentHome}
      contentContainerStyle={styles.contentContainerStyles}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig.current}
      scrollEnabled={true}
    />
  );
};

const styles = StyleSheet.create({
  contentHome: {
    flex: 1,
  },
  contentContainerStyles: {
    paddingTop: 30,
    paddingBottom: 100,
  },
  itemWrapper: {
    alignItems: "center",
    marginVertical: 10,
  },
  lessonBox: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  topicHeader: {
    width: "100%",
    height: 40,
    backgroundColor: "#4EB602",
    borderRadius: 10,
    marginBottom: "10",
    justifyContent: "center",
    alignItems: "center",
  },
  topicTitleWrapper: {
    paddingHorizontal: 10,
  },
  topicTitle: {
    fontSize: 18,
    color: "#FFFFFF", // Màu chữ
    fontWeight: "bold",
  },
});

export default ContentHome;
