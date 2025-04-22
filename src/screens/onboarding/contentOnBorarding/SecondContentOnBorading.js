import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useState } from "react";
import { level } from "./../../../dataFake/DataSocial";
import Animated, { BounceOut, FadeInLeft } from "react-native-reanimated";
import ButtonList from "../../../components/button/ButtonList";

const SecondContentOnBorading = ({ onSelect }) => {
  const [selectedSocial, setSelectedSocial] = useState(null);
  const handleSelected = useCallback(
    (id) => {
      setSelectedSocial(id);
      onSelect(id);
    },
    [onSelect]
  );
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.btnList}>
        {level?.map((item) => (
          <Animated.View
            entering={FadeInLeft}
            exiting={BounceOut}
            key={item.id}
          >
            <ButtonList
              text={item.level}
              linkImg={item.Image}
              onPress={handleSelected.bind(null, item.id)}
              status={selectedSocial === item.id}
            />
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
};

export default memo(SecondContentOnBorading);

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  btnList: { gap: 20 },
});
