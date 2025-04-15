import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

const HeaderList = (props) => {
    const { onPressGoBack, NameTopic, iconLeft, iconRight } = props;
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
                <TouchableOpacity onPress={handleGoBack} style={styles.buttonLeft}>
                    {iconLeft ? <SvgXml xml={iconLeft} /> : null}
                </TouchableOpacity>
                <Text style={styles.textNameTopic}>{NameTopic}</Text>
                <TouchableOpacity onPress={handleGoBack} style={styles.buttonRight}>
                    {iconRight ? <SvgXml xml={iconRight} /> : null}
                </TouchableOpacity>
            </View>
            <View style={styles.line} />
        </View>
    )
}

export default memo(HeaderList)

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#fff",
    },
    containerHeaderTopic: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        paddingHorizontal: 16,
        justifyContent: 'center', // Đảm bảo nội dung ở giữa
    },
    buttonLeft: {
        position: 'absolute', // Nút luôn nằm ở mép trái
        left: 16,
    },
    line: {
        width: '100%',
        borderColor: '#E5E5E5',
        borderWidth: 1.5,
    },
    textNameTopic: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#AFAFAF'
    },
    buttonRight: {
        position: 'absolute', // Nút luôn nằm ở mép trái
        right: 16,
    },
})