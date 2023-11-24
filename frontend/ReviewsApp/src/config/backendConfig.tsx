import axios, { AxiosInstance } from 'axios';

const BackendConfig = {
    baseURL: "http://127.0.0.1:5000",
    axiosClient: axios.create({
        baseURL: "http://127.0.0.1:5000"
    })
}
export default BackendConfig;