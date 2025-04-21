import React, { memo } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';
import { PRIMARY } from '../../constants/Color';
const { width } = Dimensions.get('screen');

const ProgressBarTask = ({ percent = 0.7, color, title, style, widthProgress, status }) => {
    // Xác định màu sắc dựa trên trạng thái
    const getStatusColor = () => {
        return status ? color : "#E5E5E5"; // Xanh lá cho trạng thái true, đỏ cho false
    };

    return (
        <View >
            {/* Thanh tiến trình */}
            <Progress.Bar
                progress={percent}
                height={20}
                width={widthProgress || width * 0.8}
                style={styles.progressBar}
                color={color || getStatusColor()} // Chọn màu dựa trên trạng thái nếu không truyền color
            />
            {/* Chữ hiển thị phần trăm */}
            <Text style={styles.progressText}>{title}</Text>
        </View>
    );
};

ProgressBarTask.propTypes = {
    percent: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.object,
    widthProgress: PropTypes.number,
    status: PropTypes.bool, // Trạng thái được thêm
};



export default ProgressBarTask;

const styles = StyleSheet.create({
    progressBar: {
        borderRadius: 15,
        backgroundColor: '#E5E5E5', // Màu nền thanh tiến trình
        marginBottom: 10,
        marginHorizontal: 10,

    },
    progressText: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white', // Màu chữ
        lineHeight: 20, // Canh giữa chữ trong thanh
    },
});