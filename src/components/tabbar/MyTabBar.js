import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  TEXT_PRIMARY,
  BACKGROUND_WHITE,
  BORDER_BUTTON,
  BACKGROUND_BUTTON,
} from "../../constants/Color";
import TabbarIcon from "./TabBarIcon";

const layout = Dimensions.get("window"); // Lấy kích thước màn hình

function MyTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.containerMytabBar]}>
      {/* Thanh trượt Animated */}
      <View style={styles.indicator} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={1}
            style={styles.btnNavigationTab}
          >
            <View
              style={[
                styles.box_iconMytabBar,
                isFocused && {
                  backgroundColor: BACKGROUND_BUTTON,
                  borderColor: BORDER_BUTTON,
                  padding: 25,
                  borderWidth: layout.width * 0.002, // Viền theo tỉ lệ màn hình
                },
              ]}
            >
              <TabbarIcon focused={isFocused} name={route.name} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;

const styles = StyleSheet.create({
  containerMytabBar: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: layout.height * 0.1, // Chiều cao theo tỉ lệ màn hình
    backgroundColor: BACKGROUND_WHITE,
  },
  btnNavigationTab: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: layout.height * 0.01, // Padding bottom theo tỉ lệ màn hình
    height: "100%",
  },
  indicator: {
    position: "absolute",
    top: 0,
    height: layout.height * 0.005, // Độ dày của thanh trượt theo tỉ lệ màn hình
    backgroundColor: TEXT_PRIMARY,
  },
  box_iconMytabBar: {
    width: layout.width * 0.08, // Kích thước icon theo tỉ lệ màn hình
    height: layout.width * 0.09,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: layout.width * 0.06, // Padding theo tỉ lệ màn hình
    borderRadius: layout.width * 0.04, // Bo tròn theo tỉ lệ màn hình
  },
});
