import axios from "axios";
import { API_BASE_URL } from "@/lib/config";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications

// Use environment variables for the API base URL
const config = {
  // Default is unchanged from the Vite build; override with NEXT_PUBLIC_API_URL.
  apiBaseUrl: API_BASE_URL,
};

const ApiRequest = axios.create({
  baseURL: config.apiBaseUrl,
  withCredentials: true, // Ensures cookies are sent with requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for handling errors globally
// ApiRequest.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle response errors globally
//     if (error.response) {
//       // The request was made and the server responded with a status code outside of the range of 2xx
//       const status = error.response.status;
//       const message = error.response.data?.message || "Something went wrong!";

//       switch (status) {
//         case 400:
//           toast.error("Email already exists!");
//           break;
//         case 401:
//           toast.error("Unauthorized Access: Please log in to continue.");
//           break;
//         case 403:
//           toast.error(
//             "Access Denied: You do not have permission to access this resource."
//           );
//           break;
//         case 500:
//           toast.error(
//             "Unexpected Error: Something went wrong on our end. Please try again later."
//           );
//           break;

//         default:
//           toast.error(message);
//       }
//     } else if (error.request) {
//       // The request was made but no response was received
//       toast.error("No response received from the server.");
//     } else {
//       // Something happened in setting up the request that triggered an error
//       toast.error(`Request Error: ${error.message}`);
//     }

//     return Promise.reject(error);
//   }
// );

export default ApiRequest;
