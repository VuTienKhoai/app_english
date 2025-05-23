import { APP_URL } from "../../../constants/Url";
import { axiosClientNoAuth } from "../../../services/axiosConfig";
export const loginAccount = (body) => {
  const url = `Auth/login`;
  return axiosClientNoAuth.post(url, body);
};

export const registerAccount = (body) => {
  const url = `Auth/Register`;
  return axiosClientNoAuth.post(url, body);
};
