// StreakCalendar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Cấu hình tiếng Việt
LocaleConfig.locales['vi'] = {
    monthNames: [
        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
    ],
    monthNamesShort: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    dayNames: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
    dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    today: 'Hôm nay'
};
LocaleConfig.defaultLocale = 'vi';

const StreakCalendar = ({ currentDate = new Date().toISOString().split('T')[0], learnedDays = [] }) => {
    const generateMarkedDates = (currentDate, learnedDays) => {
        const current = new Date(currentDate);
        const year = current.getFullYear();

        let markedDates = {};

        for (let month = 0; month < 12; month++) {
            const firstDayOfMonth = new Date(year, month, 1);
            const lastDayOfMonth = new Date(year, month + 1, 0);
            const daysInMonth = lastDayOfMonth.getDate();

            for (let day = 1; day <= daysInMonth; day++) {
                const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

                if (Array.isArray(learnedDays) && learnedDays.includes(date)) {
                    markedDates[date] = {
                        customStyles: {
                            container: {
                                backgroundColor: '#FFA07A',
                            },
                            text: {
                                color: '#fff',
                                fontWeight: 'bold',
                            },
                        },
                    };
                } else if (new Date(date) <= current) {
                    markedDates[date] = {
                        customStyles: {
                            container: {
                                backgroundColor: '#87CEEB',
                            },
                            text: {
                                color: '#fff',
                                fontWeight: 'bold',
                            },
                        },
                    };
                }
            }
        }

        return markedDates;
    };

    const markedDates = generateMarkedDates(currentDate, learnedDays);

    return (
        <View style={styles.container}>
            <Calendar
                current={currentDate}
                markingType={'custom'}
                markedDates={markedDates}
                theme={{
                    calendarBackground: '#fff',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    todayTextColor: '#ff6347',
                    dayTextColor: '#2d4150',
                    arrowColor: '#f39c12',
                    monthTextColor: '#000',
                    textDayFontWeight: 'bold',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: 'bold',
                }}
                monthFormat={'MM/yyyy'}
                enableSwipeMonths={true}
                style={{ width: '100%', height: 400 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default StreakCalendar;
