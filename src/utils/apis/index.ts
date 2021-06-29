import axios from "axios";

import { LoginReq, LoginRes, UserRes } from "../libs/types";

const BASE_URL = "https://5192089a03c0.ngrok.io";
export const SOCKET_URL = "https://1a386f832ae6.ngrok.io";

const request = axios.create({
  baseURL: BASE_URL,
});

export const postStudentLogin = (req: LoginReq) => {
  return request.post<LoginRes>("/user/auth", {
    ...req,
  });
};

export const postTeacherLogin = (req: LoginReq) => {
  return request.post<LoginRes>("/user/auth", {
    ...req,
  });
};

export const getUser = (token: string) => {
  return request.get<UserRes>("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
