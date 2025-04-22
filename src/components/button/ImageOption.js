import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const ImageOption = ({ imageSource, label, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      onPress={onPress}
    >
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22,
    borderRadius: 13,
    borderWidth: 3, // Độ dày viền
    color: '#fff',
    borderColor: '#E5E5E5',
    shadowOffset: { width: 0, height: 2 }, // Bóng đổ lệch xuống dưới nhiều hơn
  },
  selected: {
    borderColor: '#84D8FF',
    backgroundColor: '#DDF4FF',

  },
  image: { width: 100, height: 120, marginBottom: 25 },
  label: { fontSize: 14 },
});

export default ImageOption;
