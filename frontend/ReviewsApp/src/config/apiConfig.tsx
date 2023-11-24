import BackendConfig from "./backendConfig"
import { UsersApiFactory } from "../client"

export const UsersApi = UsersApiFactory(undefined, BackendConfig.baseURL, BackendConfig.axiosClient)