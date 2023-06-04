import axios from "axios";
export const baseURL =
  "http://127.0.0.1:5001/food-ordering-app-react-9502d/us-central1/app";

export const validateUserJWTToken = async (token) => {
  try {
    const res = await axios.get(`${baseURL}/api/users/jwtVerify`, {
      headers: { Authorization: "Bearer " + token },
    });

    return res.data.data;
  } catch (error) {
    return null;
  }
};
