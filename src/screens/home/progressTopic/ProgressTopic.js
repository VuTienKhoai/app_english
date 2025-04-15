import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderList from '../../../components/header/HeaderList';
import CourseEnglish from '../../../components/layout/CourseEnglish';
import { icon_remove } from '../../../assets/svg/iconTabNavigation/icon_remove';
export default function ProgressTopic() {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderTopicLessom}>
        <HeaderList NameTopic='Khóa học Tiếng Anh' iconLeft={icon_remove} />
        <View>

          <CourseEnglish title="Phần 1"
            progress={0.0}
            imageSource={require('../../../assets/images/courseE1.png')} // Thay bằng link hình ảnh phù hợp
            completed={true} />
          <CourseEnglish title="Phần 1"
            progress={0.0}
            imageSource={require('../../../assets/images/img_answer1.png')} // Thay bằng link hình ảnh phù hợp
            completed={false} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',

  },
  HeaderTopicLessom: {
    gap: 50
  }
})
