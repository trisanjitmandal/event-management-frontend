import axios from "./axios";

export const getMyProfile = async () => {

    const response = await axios.get("/users/profile");
    
    return response.data;
};