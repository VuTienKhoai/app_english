import Toast from "react-native-toast-message";

const ShowToastCustom = (props) => {
  const { text1, text2, typeStatus } = props;
  Toast.show({
    type: "ToastCustom",
    props: { text1, text2, typeStatus },
    position: "top",
  });
};

export default ShowToastCustom;
