import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { memo, useState } from 'react'
import { SvgXml } from 'react-native-svg'
import { icon_volume } from './../../assets/svg/iconTabNavigation/icon_volume';
const { width } = Dimensions.get("window")

const Question = (props) => {
  const { prototypeQuestion, translateQuestion } = props
  const [textWidth, setTextWidth] = useState(0); // Lưu chiều rộng của chữ
  return (
    <View style={styles.container}>
      <View style={styles.prototypeQuestion}>
        <SvgXml xml={icon_volume} />
        <View style={styles.textQuestionLesson}>
          <Text
            style={styles.text}
            onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
          >
            {prototypeQuestion}
          </Text>
          <View
            style={[
              styles.dashedUnderline,
              { width: textWidth }, // Đặt chiều rộng bằng với chữ
            ]}
          />
        </View>
      </View>
      <Text style={styles.textTranslate}>{translateQuestion}</Text>
    </View>
  )
}

export default memo(Question)

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 15,
    // width: 300,
    // height: width * 0.24,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 2, // Màu viền
    borderColor: '#E5E5E5', // Màu viền
    width: width * 0.5,
    // marginVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    gap: 5
  },
  prototypeQuestion: {
    flexDirection: 'row',
    gap: 10
  },
  textTranslate: {
    color: '#B0B0B1',
    paddingLeft: 40
  }, textQuestionLesson: {
    flexDirection: 'column', // Xếp chữ và gạch chân theo cột
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 16,
  },
  dashedUnderline: {
    height: 1,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'dashed', // Kiểu nét đứt
    marginTop: 4, // Khoảng cách giữa chữ và gạch chân
  },
})