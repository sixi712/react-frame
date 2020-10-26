import request from "@/utils/request";

interface IUserInfo {
  token: string;
}
export function getUserInfo(params: IUserInfo) {
  return request({
    url: "/api/user_info",
    method: "get",
    params
  });
}
