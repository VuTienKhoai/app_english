import { jwtDecode } from "jwt-decode";

export const parseToken = (token) => {
  try {
    const decoded = jwtDecode(token);

    const userId =
      decoded[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ];
    const email =
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const role =
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    const exp = decoded.exp;

    return {
      userId,
      email,
      role,
      exp,
      // nếu ông muốn giữ nguyên full payload thì: ...decoded
    };
  } catch (error) {
    console.error("Token không hợp lệ:", error);
    return null;
  }
};
