import { Dimensions, StyleSheet } from "react-native";
import { TEXT_COLORS_BLACK } from "../../constants/Color";
const { width } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  InputFormTextErrorView: {
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderRadius: 10,
    color: TEXT_COLORS_BLACK,
    fontSize: 20,
    paddingHorizontal: 12,
    height: 53,
  },
  InputFormTextView: {
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderRadius: 10,
    color: TEXT_COLORS_BLACK,
    fontSize: 20,
    paddingHorizontal: 12,
  },
  InputFormView: {
    flexDirection: "column",
    gap: 5,
    marginVertical: 10,
  },
  InputFormTLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  gap2: {
    gap: 2,
    borderRadius: 10,
    // minHeight: 70,
  },
  AuthInput: {
    backgroundColor: "#F9FAFB",
    borderColor: "#E5E7EB",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    lineHeight: 19,
    fontSize: 14,
    color: "#374151",
  },
  inputError: {
    fontSize: 12,
    // marginTop: 5,
    lineHeight: 20,
    fontWeight: "bold",
    color: "red",
    paddingLeft: 5,
    maxWidth: width - 48,
  },
  checkBoxStyle: {
    width: 25,
    height: 25,
  },
  FormViewAuth: {
    flexDirection: "row",
  },
});
