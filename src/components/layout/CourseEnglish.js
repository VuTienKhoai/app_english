import React, { memo } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import ProgressBarWithText from '../header/ProgressBar';

const { width } = Dimensions.get('screen');

const CourseEnglish = ({ title, progress, imageSource, completed = false }) => {
    return (
        <View style={[styles.cardContainer, completed && styles.completedCard]}>
            {/* Hình ảnh minh họa */}
            <Image source={imageSource} style={styles.image} />

            {/* Tên bài học */}
            <Text style={styles.title}>{title}</Text>
            <View style={styles.typedes}>

                {/* Thanh tiến trình */}
                {completed ? (
                    <ProgressBarWithText
                        percent={0.7}
                        title="0/7"
                        widthProgress={width * 0.8}
                    />
                ) : (
                    <Text style={styles.text}>Học vượt</Text>
                )}
            </View>
        </View>
    );
};

export default memo(CourseEnglish);

const styles = StyleSheet.create({
    cardContainer: {
        // marginTop: 50,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 20,
        height: width * 0.8,
        marginVertical: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        justifyContent: 'space-between', // Không ảnh hưởng margin bên trong
    },
    typedes: {
        // marginVertical: 20,
        marginHorizontal: 10
    },
    image: {
        width: '100%',
        height: '70%', // Giảm chiều cao để nhường chỗ
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        resizeMode: 'cover',
        marginBottom: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingLeft: 10
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        // paddingLeft: 10,
        color: '#1CB0F6'
    }
});
