import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useState } from "react";
import { dataSocial } from "./../../../dataFake/DataSocial";
import Animated, { BounceOut, FadeInLeft } from "react-native-reanimated";
import ButtonList from "../../../components/button/ButtonList";

const FirstContentOnBorading = () => {
  const [selectedSocial, setSelectedSocial] = useState(null);
  const handleSelected = useCallback((id) => {
    setSelectedSocial(id);
  }, []);
  return (
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
    </ScrollView>
  );
};

export default memo(FirstContentOnBorading);

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  btnList: { gap: 20 },
});
