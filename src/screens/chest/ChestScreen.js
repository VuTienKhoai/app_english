import React, { useState } from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SvgXml } from "react-native-svg";
import { icon_duoAboutScreen } from "../../assets/svg/iconTabNavigation/iconduoAboutScreen";
import { iconClock } from "../../assets/svg/iconTabNavigation/iconClock";
import { icon_chest } from "../../assets/svg/iconTabNavigation/icon_chest";
import { ScrollView } from "react-native-gesture-handler";
import { icon_ChestGrey } from "../../assets/svg/iconTabNavigation/icon_ChestGrey";
import QuestReward from './QuestReward';
import { icon_badge } from '../../assets/svg/iconTabNavigation/icon_badge';
const { width } = Dimensions.get('screen')
export default function ChestScreen() {
    const layout = useWindowDimensions(); // ✔️ Sử dụng hook này để lấy width

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'Mission', title: 'NHIỆM VỤ' },
        { key: 'Badge', title: 'HUY CHƯƠNG' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'Mission':
                return (
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.textHeader}>
                                <View style={styles.headerContent}>
                                    <Text style={styles.title}>Chào mừng !</Text>
                                    <Text style={styles.text}>
                                        Hãy hoàn thành nhiệm vụ để nhận thưởng nhé! Mỗi ngày sẽ có các
                                        nhiệm vụ mới
                                    </Text>
                                </View>
                                <SvgXml xml={icon_duoAboutScreen} />
                            </View>

                            <View style={styles.headerTask}>
                                <Text style={styles.taskText}>Nhiệm vụ hàng ngày</Text>
                                <View style={styles.timeTask}>
                                    <SvgXml xml={iconClock} />
                                    <Text style={styles.textTime}>6 tiếng</Text>
                                </View>
                            </View>

                            <QuestReward
                                titleIcon="⚡"
                                title="Kiếm 30 KN"
                                titleProgress="25/30"
                                linkImgChest={icon_chest}
                                color="#FFC803"
                                status={true}
                            />

                            <View style={styles.contentAbout}>
                                <Text style={styles.taskText}>Sắp tới</Text>
                            </View>

                            <View>
                                <QuestReward
                                    titleIcon="⚡"
                                    title="Bật mí sau 2 ngày"
                                    linkImgChest={icon_ChestGrey}
                                />
                                <QuestReward
                                    titleIcon="⚡"
                                    title="Bật mí sau 4 ngày"
                                    linkImgChest={icon_ChestGrey}
                                />
                            </View>
                        </View>
                    </ScrollView>
                );

            case 'Badge':
                return (
                    <View style={styles.content}>
                        <SvgXml xml={icon_badge} style={styles.icon_badge} />
                        <Text style={styles.titleBadge}>Chinh phục huy hiệu đầu tiên</Text>
                        <Text style={styles.textBadge}>Hoàn thành các thử thách hàng tháng để giành được huy hiệu độc đáo</Text>
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }} // ✔️ width lấy từ hook
            renderTabBar={props => (
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: 'white' }}
                    style={{ backgroundColor: '#8F69CC', paddingTop: 30 }} // ✔️ sửa lỗi `3  0`
                    labelStyle={{ color: 'white' }}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({

    scene: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    text: {
        fontSize: 16,
        color: "white",
        marginTop: 8,
        width: width * 0.5,
    },
    textHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#8F69CC",
        paddingVertical: 30,
        paddingHorizontal: 15,
    },
    timeTask: {
        flexDirection: "row",
        paddingTop: 12,
        gap: 5,
    },
    textTime: {
        fontSize: 16,
        color: "#FA9609",
        fontWeight: "bold",
        alignItems: "center",
    },
    taskText: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
    },
    headerTask: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    contentAbout: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        gap: 10
    },
    titleBadge: {
        fontWeight: 'bold',
        fontSize: 25
    },
    textBadge: {
        textAlign: 'center',
        width: width * 0.87,
        color: '#777777'
    }
});
