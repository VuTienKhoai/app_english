import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useState } from "react";
import BtnContinue from "../home/components/BtnContinue";
import Toast from "react-native-toast-message";
import TitleSection from "../../components/header/TitleSection";
import AudioButton from "../../components/header/AudioButton";
import HeaderLesson from "../../components/header/HeaderLesson";
import ImageOption from "../../components/button/ImageOption";
import { useNavigation } from "@react-navigation/native";

const questions = [
    {
        word: "coffee",
        correctAnswer: "coffee",
        options: [
            { id: 1, imageSource: require("../../assets/images/coffee.png"), label: "cà phê", value: "coffee" },
            { id: 2, imageSource: require("../../assets/images/tea.png"), label: "trà", value: "tea" },
            { id: 3, imageSource: require("../../assets/images/milk.png"), label: "sữa", value: "milk" },
            { id: 4, imageSource: require("../../assets/images/water.png"), label: "nước", value: "water" },
        ],
    },
    {
        word: "milk",
        correctAnswer: "milk",
        options: [
            { id: 1, imageSource: require("../../assets/images/water.png"), label: "nước", value: "water" },
            { id: 2, imageSource: require("../../assets/images/tea.png"), label: "trà", value: "tea" },
            { id: 3, imageSource: require("../../assets/images/milk.png"), label: "sữa", value: "milk" },
            { id: 4, imageSource: require("../../assets/images/coffee.png"), label: "cà phê", value: "coffee" },
        ],
    },
    {
        word: "milk",
        correctAnswer: "milk",
        options: [
            { id: 1, imageSource: require("../../assets/images/water.png"), label: "nước", value: "water" },
            { id: 2, imageSource: require("../../assets/images/tea.png"), label: "trà", value: "tea" },
            { id: 3, imageSource: require("../../assets/images/milk.png"), label: "sữa", value: "milk" },
            { id: 4, imageSource: require("../../assets/images/coffee.png"), label: "cà phê", value: "coffee" },
        ],
    },
];

const Question_choice = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0); // ✅ Thêm biến đếm câu đúng
    const navigation = useNavigation();
    const currentQuestion = questions[currentIndex];
    const [hasCheckedCorrect, setHasCheckedCorrect] = useState(false);

    const handleSelectOption = useCallback((value) => {
        setSelectedOption(value);
    }, []);

    const handleCheckAnswer = () => {
        if (selectedOption === currentQuestion.correctAnswer) {
            // Toast.show({
            //     type: "success",
            //     text1: "🎉 Giỏi quá!",
            //     text2: "Bạn đã chọn đúng đáp án.",
            // });

            // Tăng correctAnswers chỉ khi chưa tính điểm cho câu này
            if (!hasCheckedCorrect) {
                setCorrectAnswers((prev) => prev + 1);
                setHasCheckedCorrect(true);
            }
        } else {
            // Toast.show({
            //     type: "error",
            //     text1: "❌ Sai rồi!",
            //     text2: "Hãy thử lại nhé.",
            // });
        }

        setIsChecked(true);
    };

    const handleContinue = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentIndex(nextIndex);
            setSelectedOption(null);
            setIsChecked(false);
            setHasCheckedCorrect(false); // ✅ Reset để có thể tính điểm cho câu mới
        } else {
            // Toast.show({
            //     type: "info",
            //     text1: "✅ Hoàn thành!",
            //     text2: "Bạn đã làm xong tất cả các câu.",
            // });
            navigation.navigate("Home");
        }
    };

    // ✅ Progress tăng theo câu đúng
    const progress = (correctAnswers / questions.length);

    return (
        <View style={styles.container}>
            <HeaderLesson percent={progress} />

            <View style={styles.newWordsContainer}>
                <Image source={require("../../assets/images/blink.png")} />
                <Text style={styles.title}>TỪ VỰNG MỚI</Text>
            </View>

            <TitleSection subtitle="Chọn hình ảnh đúng" />
            <AudioButton text={currentQuestion.word} />

            <View style={styles.optionsContainer}>
                {currentQuestion.options.map((option) => (
                    <ImageOption
                        key={option.id}
                        imageSource={option.imageSource}
                        label={option.label}
                        isSelected={selectedOption === option.value}
                        onPress={() => handleSelectOption(option.value)}
                    />
                ))}
            </View>

            <BtnContinue
                text={isChecked ? "TIẾP TỤC" : "KIỂM TRA"}
                status={selectedOption !== null}
                onPress={isChecked ? handleContinue : handleCheckAnswer}
            />

            <Toast />
        </View>
    );
};

export default memo(Question_choice);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", marginTop: 10 },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#8E44AD",
    },
    newWordsContainer: {
        paddingHorizontal: 25,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginTop: 10,
    },
    optionsContainer: {
        flex: 1,
        gap: 25,
        marginHorizontal: 25,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});
