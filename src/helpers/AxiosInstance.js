import axios from "axios";
import { COINGEKO_API_URL } from "./Constants";

const axiosInstance = axios.create({
	baseURL: COINGEKO_API_URL,
	timeout: 10 * 1000,
});

export default axiosInstance;
