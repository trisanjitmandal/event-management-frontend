import axios from "./axios";

const STAFF_BASE_URL = "/staff";

const staffApi = {

    getAllStaff() {

        return  axios.get(STAFF_BASE_URL);
    },

    createStaff(payload){

        return axios.post(
            STAFF_BASE_URL,
            payload
        );
    },

    deleteStaff(id){

        return axios.delete(
        `${STAFF_BASE_URL}/${id}`
        );
    },
};

export default staffApi;