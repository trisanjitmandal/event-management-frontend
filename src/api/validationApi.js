import axios from "./axios";

const VALIDATION_BASE_URL = "/validation";

const validationApi = {

    validateTicket(payload) {

        return axios.post(

            `${VALIDATION_BASE_URL}/scan`,
            payload

        );
    },

     getValidationHistory() {

        return axios.get(

            `${VALIDATION_BASE_URL}/history`

        );

    },


};

export default validationApi;