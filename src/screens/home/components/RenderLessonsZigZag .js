import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { StylesHome as styles } from "../styles/StylesHome";
const RenderLessonsZigZag = (lessons) => {
  const rows = [];

  for (let i = 0; i < lessons?.length; i += 3) {
    const group = lessons?.slice(i, i + 3);

    // Center
    if (group[0]) {
      rows.push(
        <View key={`center-${group[0].id}`} style={styles.centerRow}>
          {renderNode(group[0], "center")}
        </View>
      );
    }

    // Left & Right
    if (group[1] || group[2]) {
      rows.push(
        <View
          key={`sides-${group[1]?.id || ""}-${group[2]?.id || ""}`}
          style={styles.sideRow}
        >
          {group[1] ? (
            renderNode(group[1], "left")
          ) : (
            <View style={{ flex: 1 }} />
          )}
          {group[2] ? (
            renderNode(group[2], "right")
          ) : (
            <View style={{ flex: 1 }} />
          )}
        </View>
      );
    }
  }

  return rows;
};

export default memo(RenderLessonsZigZag);

const styles = StyleSheet.create({});
