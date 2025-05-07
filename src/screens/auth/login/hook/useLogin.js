import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ShowToastCustom from "../../../../components/notification/ShowToast";
import { loginAccount } from "../../services/auth.api";
import { setToken } from "../../../../redux/slide/app.slice";
import { parseToken } from "../../../../utils/DecodeToken";

export const useLogin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleForgotPassword = useCallback(() => {
    navigation.navigate("ForgotPassword");
  }, []);
  const handleResgister = useCallback(() => {
    navigation.navigate("Register");
  }, []);
  const handleNavigateHome = useCallback(() => {
    navigation.navigate("MainTabNavigation");
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values) => {
    if (!values) {
      ShowToastCustom({
        text1: "Dữ liệu không được để trống",
        typeStatus: "warring",
      });
      return;
    }
    loginAccount(values)
      .then((res) => {
        if (res?.success) {
          ShowToastCustom({ text1: res?.message, typeStatus: "success" });
          dispatch(setToken(res?.data?.token));
          const userData = parseToken(res?.data?.token);
          userData && dispatch(setIdUser(userData?.userId));
          handleNavigateHome();
        } else {
          ShowToastCustom({ text1: res?.message, typeStatus: "warring" });
        }
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API đăng nhập:", error);
      });
  };
  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    handleForgotPassword,
    handleResgister,
  };
};
