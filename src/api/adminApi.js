import axios from "./axios";

const ADMIN_BASE_URL = "/admin";

const adminApi = {


    searchUsers(keyword){
        return axios.get(
            `${ADMIN_BASE_URL}/users/search`,
            {
                params: { keyword}
            }
        );
    },

    promoteOrganizer(userId){
        return axios.patch(
            `${ADMIN_BASE_URL}/users/${userId}/promote-organizer`
            
        );
    },

    demoteOrganizer(userId){
        return axios.patch(
            `${ADMIN_BASE_URL}/users/${userId}/demote-attendee`
        );
    },
};

export default adminApi;