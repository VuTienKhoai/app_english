import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleSection = ({  subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop:10, paddingHorizontal: 25, },
 
  subtitle: { fontSize: 20, fontWeight:'bold' },
});

export default TitleSection;
