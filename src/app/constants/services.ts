import { environment } from "../environment";

export const environmentPath = {
  loginPath: environment.restServiceRoot + "/login",
  userInfoPath: environment.restServiceRoot + "/profile/getInfo",
  logoutPath: environment.restServiceRoot + "/logout"
}
