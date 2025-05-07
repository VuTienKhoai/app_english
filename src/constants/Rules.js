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
const EMAIL_RULES = {
  required: "Email không được để trống",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Email không hợp lệ",
  },
};

const PASSWORD_RULES = {
  required: "Mật khẩu không được để trống",
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái, số và có thể chứa ký tự đặc biệt @$!%*?&",
  },
};

const PASSWORD_RULES_CONFIRM = (password) => ({
  required: "Xác nhận mật khẩu không được để trống",
  validate: (value) => value === password || "Mật khẩu xác nhận không khớp",
});

export {
  USERNAME_RULES,
  PHONE_RULES,
  EMAIL_RULES,
  PASSWORD_RULES,
  PASSWORD_RULES_CONFIRM,
};
