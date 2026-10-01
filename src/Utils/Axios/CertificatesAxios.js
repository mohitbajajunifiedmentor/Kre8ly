import axios from "axios";
import { CERTIFICATE_API_BASE_URL } from "@/lib/config";

// Define the base URL based on the current environment
const config = {
  apiBaseUrl: CERTIFICATE_API_BASE_URL,
};

const certificateAxios = axios.create({
  baseURL: config.apiBaseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default certificateAxios;
