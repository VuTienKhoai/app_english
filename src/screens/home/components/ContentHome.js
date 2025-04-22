import React, { useCallback, useRef, useState } from "react";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import { dataLesson } from "../../../dataFake/DataLesson";
import ListLesson from "./ListLesson";
import ButtonTopic from "../../../components/button/ButtonTopic";
import { useNavigation } from "@react-navigation/native";
import { icon_book } from "../../../assets/svg/iconTabNavigation/icon_book";

const { width } = Dimensions.get("screen");

const ContentHome = () => {
  const navigation = useNavigation();
  const [currentTopic, setCurrentTopic] = useState(dataLesson[0]);

  const handleNavigateHome = () => {
    navigation.navigate("ProgressTopic");
  };

  const handleNavigateConversationLesson = () => {
    navigation.navigate("ConversationLesson");
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      const firstVisibleItem = viewableItems[0];
      if (firstVisibleItem?.isViewable) {
        setCurrentTopic(firstVisibleItem.item);
      }
    }
  }, []);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemWrapper}>
        <ListLesson
          listLesson={item?.listLessons || []}
          navigation={navigation} // truyền navigation vào ListLesson
        />
      </View>
    ),
    [navigation]
  );

  return (
    <View style={styles.container}>
      <ButtonTopic
        ItemNumberTopic="PHẦN 1, CỬA 1"
        NameTopic={currentTopic?.nameTopic || []}
        iconBook={icon_book}
        onPressTopic={handleNavigateHome}
        onPressLesson={handleNavigateConversationLesson}
      />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentHome: {
    flex: 1,
  },
  contentContainerStyles: {
    paddingBottom: 100,
  },
  itemWrapper: {
    alignItems: "center",
    marginVertical: 10,
  },
});

export default ContentHome;
