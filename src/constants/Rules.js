const USERNAME_RULES = {
  required: "Tên người dùng không được để trống",
  minLength: {
    value: 4,
    message: "Tên người dùng phải có ít nhất 4 ký tự",
  },
  maxLength: {
    value: 20,
    message: "Tên người dùng không được vượt quá 20 ký tự",
  },
  pattern: {
    value: /^[a-zA-Z0-9_]+$/,
    message: "Chỉ cho phép chữ cái, số và dấu gạch dưới",
  },
};

const PHONE_RULES = {
  required: "Số điện thoại không được để trống",
  pattern: {
    value: /^(0[3|5|7|8|9])+([0-9]{8})$/,
    message: "Số điện thoại không hợp lệ (bắt đầu bằng 03, 05, 07, 08, 09)",
  },
};
export { USERNAME_RULES, PHONE_RULES };
