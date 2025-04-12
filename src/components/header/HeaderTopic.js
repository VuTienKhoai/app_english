import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { Image } from "expo-image";

const { width } = Dimensions.get("window");

const HeaderTopic = (props) => {
  const { icon, uriImg, onPressGoBack, ItemNumberTopic, NameTopic, title } =
    props;
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    if (onPressGoBack) {
      onPressGoBack();
    } else {
      navigation.goBack();
    }
  }, [onPressGoBack]);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeaderTopic}>
        <TouchableOpacity onPress={handleGoBack}>
          <SvgXml xml={icon} />
        </TouchableOpacity>

        <View style={styles.imgHeader}>
          <Image
            source={{ uri: uriImg }}
            style={styles.gif}
            cachePolicy="memory"
          />
          <Text style={styles.textTopic}>{ItemNumberTopic}</Text>
          <Text style={styles.textNameTopic}>{NameTopic}</Text>
        </View>
      </View>
      <View style={styles.line} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.textNameTopic}>{NameTopic}</Text>
    </View>
  );
};

export default memo(HeaderTopic);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 15,
  },
  containerHeaderTopic: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  imgHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  gif: {
    width: width * 0.5,
    height: width * 0.5,
  },
  textTopic: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textNameTopic: {
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 20,
  },
  line: {
    width: "100%",
    borderColor: "#E5E5E5",
    borderWidth: 2,
  },
  title: {
    color: "#1CB0F6",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 20,
  },
});
