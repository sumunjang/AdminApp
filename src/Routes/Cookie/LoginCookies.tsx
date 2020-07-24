import Cookies from "universal-cookie";

interface LoginData {
  username: string;
  token: string;
}

const setLoginCookies = (data: any): void => {
  const cookies: Cookies = new Cookies();
  cookies.set("sumunjang_userapp_logintoken", data, { path: "/" });
};

const getLoginCookies = (): LoginData => {
  const cookies: Cookies = new Cookies();
  return cookies.get("sumunjang_userapp_logintoken");
};

export default{
  setLoginCookies,
  getLoginCookies,
};