import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, View, StyleSheet, Dimensions, Text } from "react-native";
import { dataLesson } from "../../../dataFake/DataLesson";
import ListLesson from "./ListLesson";
import ButtonTopic from "../../../components/button/ButtonTopic";
import { useNavigation } from "@react-navigation/native";
import { icon_book } from "../../../assets/svg/iconTabNavigation/icon_book";

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

const ContentHome = () => {
  const navigation = useNavigation();
  const [currentTopic, setCurrentTopic] = useState();

  const handleNavigateHome = () => {
    navigation.navigate("ProgressTopic");
  };

  const handleNavigateConversationLesson = () => {
    navigation.navigate("ConversationLesson");
  };

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
          <ButtonTopic
            ItemNumberTopic="PHẦN 1, CỬA 1"
            NameTopic={currentTopic?.nameTopic || []}
            iconBook={icon_book}
            onPressTopic={handleNavigateHome}
            onPressLesson={handleNavigateConversationLesson}
          />
          <ListLesson listLesson={item?.listLessons || []} />
        </View>
      );
    },
    [currentTopic]
  );

  useEffect(() => {
    if (dataLesson && dataLesson.length > 0) {
      setCurrentTopic(dataLesson[0]);
    }
  }, []);

  return (
    <FlatList
      data={dataLesson}
      keyExtractor={(item) => String(item.idTopic)}
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
    // paddingTop: 30,
    paddingBottom: 100,
  },
  itemWrapper: {
    alignItems: "center",
    marginVertical: 10,
  },
  topicHeader: {
    width: "100%",
    height: 40,
    backgroundColor: "#4EB602",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  topicTitleWrapper: {
    paddingHorizontal: 10,
  },
  topicTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ContentHome;
