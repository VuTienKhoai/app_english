import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import { SvgXml } from "react-native-svg";

import { styles } from "./style";
import { TEXT_COLORS_DARK, TEXT_COLORS_GRAY } from "../../constants/Color";
import { EyeAuthCloseIcon } from "../../assets/svg/auth/EyeAuthCloseIcon";
import { EyeAuthOpenIcon } from "../../assets/svg/auth/EyeAuthOpenIcon";

const InputFromAuth = (props) => {
  const {
    title,
    name,
    height = 50,
    placeholder,
    control,
    errors,
    rules = {},
    secureTextEntry,
    keyBoardType,
    inputStyle,
    colorIcon,
    strokeColorIcon,
  } = props;

  const [isSecure, setIsSecure] = useState(true);
  const toggleSecureTextEntry = () => {
    setIsSecure(!isSecure);
  };

  const borderStyle = useMemo(() => {
    return !errors
      ? {
          ...styles.InputFormTextView,
          height,
          textAlignVertical: height > 53 ? "top" : "center",
        }
      : {
          ...styles.InputFormTextErrorView,
          height,
          textAlignVertical: height > 53 ? "top" : "center",
        };
  }, [errors]);

  return (
    <View style={styles.InputFormView}>
      {title ? <Text style={styles.InputFormTLabel}>{title}</Text> : null}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.gap2}>
            <View style={styles.FormViewAuth}>
              <TextInput
                style={[borderStyle, styles.AuthInput, inputStyle]}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholderTextColor={TEXT_COLORS_GRAY}
                cursorColor={TEXT_COLORS_DARK}
                keyboardAppearance={"dark"}
                secureTextEntry={secureTextEntry ? isSecure : false}
                keyboardType={keyBoardType || "default"}
              />
              {secureTextEntry && (
                <TouchableOpacity
                  onPress={toggleSecureTextEntry}
                  style={styles.iconEye}
                >
                  <SvgXml
                    xml={
                      isSecure
                        ? EyeAuthCloseIcon(colorIcon, strokeColorIcon)
                        : EyeAuthOpenIcon(colorIcon, strokeColorIcon)
                    }
                  />
                </TouchableOpacity>
              )}
            </View>

            {errors && (
              <Text numberOfLines={1} style={styles.inputError}>
                {errors?.message}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default memo(InputFromAuth);
