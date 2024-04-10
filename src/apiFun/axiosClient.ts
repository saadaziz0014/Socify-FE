import axios from "axios";
import { config } from "../config";
const axiosClient = axios.create({
    baseURL: config.backend,
})

export default axiosClient