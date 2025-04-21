import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';
import ProgressBarTask from '../../components/header/ProgressBarTask';

const QuestReward = (props) => {
    const { title, linkImgChest, titleProgress, icon, status, color, colorTitle = '#000000', colorTitleActive = '#111' } = props;

    return (
        <View style={styles.container}>
            {/* Icon chính */}
            {icon && <SvgXml xml={icon} style={styles.textTitleIcon} />}
            <View style={styles.contentText}>
                {/* Tiêu đề chính */}
                <Text style={[styles.textTitle, { color: status ? colorTitleActive : colorTitle }]} >{title}</Text>
                {/* Nội dung ProgressBar và Hình ảnh Chest */}
                <View style={styles.contentChest}>
                    <ProgressBarTask title={titleProgress} color={color} />
                    {linkImgChest && <SvgXml xml={linkImgChest} style={styles.iconChest} />}
                </View>

            </View>
        </View>
    );
};

export default memo(QuestReward);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: '#E5E5E5',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 10,
        // marginTop: 20,
    },
    contentText: {
        flex: 1,
        gap: 20,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    // textTitleIcon: {
    //     color: '#FFC803',
    //     fontWeight: 'bold',
    //     fontSize: 40,
    //     textAlign: 'center',
    // },
    contentChest: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStatus: {
        marginTop: 10,
        fontSize: 16,
        fontStyle: 'italic',
    },
    iconChest: {
        position: 'absolute',
        // top: 0,
        // left: 0,
        right: 0,
        // bottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#fff'
    }
});
