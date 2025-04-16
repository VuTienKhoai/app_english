// StreakScreen.js
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'
import { ScrollView } from 'react-native-gesture-handler'
import { icon_ShareWhite } from '../../../assets/svg/iconTabNavigation/icon_Share'
import { icon_removeWhite } from '../../../assets/svg/iconTabNavigation/icon_remove'
import { icon_streak } from '../../../assets/svg/iconTabNavigation/icon_streak'
import { icon_badgeStreak } from '../../../assets/svg/iconTabNavigation/icon_badge'
import { icon_Lock } from './../../../assets/svg/iconTabNavigation/icon_Lock';
import StreakCalendar from '../../../components/layout/StreakCalendar'


// Fake Data
const currentDate = '2025-02-06'; // Ngày hiện tại
const learnedDays = ['2025-01-06', '2025-01-07', '2025-01-12', '2025-02-02']; // Các ngày đã học

const { width } = Dimensions.get('screen');

export default function StreakScreen() {
    const navigation = useNavigation();

    const handleGoBack = useCallback(() => {
        navigation.goBack();
    }, []);

    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={styles.contentHeader}>
                    <View style={styles.containerHeaderTopic}>
                        <TouchableOpacity onPress={handleGoBack} style={styles.buttonLeft}>
                            <SvgXml xml={icon_removeWhite} />
                        </TouchableOpacity>
                        <Text style={styles.textNameTopic}>Streak</Text>
                        <TouchableOpacity style={styles.buttonRight}>
                            <SvgXml xml={icon_ShareWhite} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.DayStreak}>
                        <View>
                            <Text style={styles.NumberDayStreak}>1 </Text>
                            <Text style={styles.textDayStreak}>ngày Streak!</Text>
                        </View>
                        <SvgXml xml={icon_streak} />
                    </View>
                    <View style={styles.NotiStreak}>
                        <SvgXml xml={icon_badgeStreak} />
                        <Text style={styles.textNotiStreak}>Bạn đang có chuỗi streak dài nhất từ trước tới nay!</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.titleDateStreak}>Lịch Streak</Text>
                    {/* Truyền fake data vào StreakCalendar */}
                    <StreakCalendar currentDate={currentDate} learnedDays={learnedDays} />
                </View>
                <View>
                    <Text style={styles.titleDateStreak}>Hội Streak</Text>
                    <View style={styles.StreakClub}>
                        <SvgXml xml={icon_Lock} />
                        <Text style={styles.textStreakClub}>Đạt 7 ngày streak để gia nhập Hội Streak và nhận những phần thưởng độc quyền.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentHeader: {
        backgroundColor: '#FE9515',
        paddingTop: 20,
    },
    containerHeaderTopic: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    buttonLeft: {
        position: 'absolute',
        left: 16,
    },
    textNameTopic: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    buttonRight: {
        position: 'absolute',
        right: 16,
    },
    NumberDayStreak: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },
    textDayStreak: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    DayStreak: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    NotiStreak: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width * 0.9,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        marginVertical: 20,
    },
    textNotiStreak: {
        width: width * 0.6,
        lineHeight: 20,
    },
    titleDateStreak: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    StreakClub: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#E5E5E5",
        padding: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textStreakClub: {
        color: '#777777',
        fontSize: 16,
        width: width * 0.5,
        lineHeight: 25
    }
});
