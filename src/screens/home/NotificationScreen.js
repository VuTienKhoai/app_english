import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderList from '../../components/header/HeaderList'
import { icon_Profile } from '../../assets/svg/iconTabNavigation/icon_Profile'
import { SvgXml } from 'react-native-svg'
import { Image } from 'expo-image'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Home from './Home'

const { width } = Dimensions.get("window")
export default function NotificationScreen() {
    const navigation = useNavigation();
    const handleNavigatePageHome = () => {
        navigation.navigate(Home)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <HeaderList NameTopic='Bảng tin' />
                    <View style={styles.notifice}>
                        <View style={styles.headerNotifice}>
                            <Text style={styles.textProfile}>Tạo hồ sơ để xem cập nhật của bạn bè </Text>
                            <SvgXml xml={icon_Profile} />
                        </View>
                        <TouchableOpacity style={styles.button_homepage}>
                            <Text style={styles.text_button}>BẮT ĐẦU</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentNotification}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/courseE1.png')} // Đường dẫn đến hình ảnh
                        />
                        <View style={styles.contentText}>
                            <Text style={styles.textTime}>6 tiếng</Text>
                            <Text style={styles.textcontentNotification}>Chào mừng bạn tới với Bảng tin! Tại đây bạn có thể chúc mừng thành tích của bạn bè và thông tin về sản phẩm, các mẹo học tập và nhiều điều khác!</Text>
                        </View>
                    </View>
                    <View style={styles.contentNotification}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/courseE1.png')} // Đường dẫn đến hình ảnh
                        />
                        <View style={styles.contentText}>
                            <Text style={styles.textTime}>6 tiếng</Text>
                            <Text style={styles.textcontentNotification}>Hoàn thành một bài học mỗi ngày để giữ vững chuỗi streak!</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonStart} onPress={handleNavigatePageHome}>
                            <Text style={styles.text_buttonStart}>BẮT ĐẦU HỌC</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginVertical: 20,
    },
    notifice: {
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: '#1CB0F6',
        padding: 15,
        borderRadius: 20
    },
    headerNotifice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    textProfile: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        width: width * 0.6,
        lineHeight: 20,


    },
    button_homepage: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 24,
        width: width * 0.85,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 12,

        // Đổ bóng đẹp hơn
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 20,

        // Border dưới làm điểm nhấn
        borderBottomWidth: 4,
        borderColor: '#84D7FF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20 ,
    },


    text_button: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        color: '#1CB1F5'
    },
    image: {
        // width: width * 0.8,
        height: width * 0.4, // Giảm chiều cao để nhường chỗ
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        resizeMode: 'cover',
        marginBottom: 12,
    },
    contentNotification: {
        marginHorizontal: 20,
        marginVertical: 20,
        borderWidth: 2,
        // padding: 30,
        borderRadius: 20,
        borderColor: '#E6E5E1'
    },
    textTime: {
        color: '#AFAFAF'
    },
    contentText: {
        gap: 10,
        marginHorizontal: 10,
        marginBottom: 10
        // marginVertical: 10
    },
    textcontentNotification: {
        fontSize: 16,
        lineHeight: 25
    },
    buttonStart: {
        borderWidth: 2,
        width: width * 0.4,
        padding: 9,
        borderColor: '#E2E2E2',
        borderRadius: 15,
        margin: 10,
        borderBottomWidth: 5, // Viền dưới dày hơn

    },
    text_buttonStart: {
        fontSize: 16,
        color: '#1CB1F5',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})