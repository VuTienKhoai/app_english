// import { Image, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import BtnContinue from '../home/components/BtnContinue';
// import Toast from "react-native-toast-message";
// import TitleSection from '../../components/header/TitleSection';
// import AudioButton from '../../components/header/AudioButton';
// import HeaderLesson from '../../components/header/HeaderLesson';
// import ImageOption from '../../components/button/ImageOption';
// export default function Question_choice({ navigation }) {
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [isChecked, setIsChecked] = useState(false);

//     const correctAnswer = "coffee";
//     const options = [
//         {
//             id: 1,
//             imageSource: require("../../assets/images/coffee.png"),
//             label: "cà phê",
//             value: "coffee",
//         },
//         {
//             id: 2,
//             imageSource: require("../../assets/images/tea.png"),
//             label: "trà",
//             value: "tea",
//         },
//         {
//             id: 3,
//             imageSource: require("../../assets/images/tea.png"),
//             label: "sữa",
//             value: "milk",
//         },
//         {
//             id: 4,
//             imageSource: require("../../assets/images/tea.png"),
//             label: "nước",
//             value: "water",
//         },
//     ];
//     const handleSelectOption = (option) => {
//         setSelectedOption(option);
//     };

//     const handleCheckAnswer = () => {
//         if (selectedOption === correctAnswer) {
//             Toast.show({
//                 type: "success",
//                 text1: "🎉 Giỏi quá!",
//                 text2: "Bạn đã chọn đúng đáp án.",
//             });
//         } else {
//             Toast.show({
//                 type: "error",
//                 text1: "❌ Sai rồi!",
//                 text2: "Hãy thử lại nhé.",
//             });
//         }
//         setIsChecked(true);
//     };

//     return (
//         <View style={styles.container}>
//             <HeaderLesson progress={50} />

//             {/* Từ vựng mới */}
//             <View style={styles.newWordsContainer}>
//                 <Image source={require("../../assets/images/blink.png")} />
//                 <Text style={styles.title}>TỪ VỰNG MỚI</Text>
//             </View>

//             {/* Phần câu hỏi */}
//             <TitleSection subtitle="Chọn hình ảnh đúng" />
//             <AudioButton text="coffee" />

//             {/* Render các lựa chọn từ mảng options */}
//             <View style={styles.optionsContainer}>
//                 {options.map((option) => (
//                     <ImageOption
//                         key={option.id}
//                         imageSource={option.imageSource}
//                         label={option.label}
//                         isSelected={selectedOption === option.value}
//                         onPress={() => handleSelectOption(option.value)}
//                     />
//                 ))}
//             </View>

//             {/* Nút chuyển đổi giữa KIỂM TRA & TIẾP TỤC */}
//             <BtnContinue
//                 text={isChecked ? "TIẾP TỤC" : "KIỂM TRA"}
//                 status={selectedOption !== null}
//                 onPress={isChecked ? handleContinue : handleCheckAnswer}
//             />

//             {/* Hiển thị Toast */}
//             <Toast />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "#fff" },
//     title: {
//         fontSize: 16,
//         fontWeight: "bold",
//         color: "#8E44AD",
//     },
//     newWordsContainer: {
//         paddingHorizontal: 25,
//         flexDirection: "row",
//         gap: 10,
//         alignItems: "center",
//     },
//     optionsContainer: {
//         flex: 1,
//         gap: 25,
//         marginHorizontal: 25,
//         flexDirection: "row",
//         flexWrap: "wrap",
//         justifyContent: "space-between",
//     },
// });
