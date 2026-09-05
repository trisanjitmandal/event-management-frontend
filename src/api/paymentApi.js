import axios from "./axios";

const PAYMENT_BASE_URL = "/payments";

const paymentApi = {

    createOrder(payload) {
        return axios.post(
            `${PAYMENT_BASE_URL}/create-order`,
            payload

        );

    },

    verifyPayment(payload) {
        return axios.post(
            `${PAYMENT_BASE_URL}/verify`,
            payload

        );

    },

    getMyPayments() {

        return axios.get(

            PAYMENT_BASE_URL

        );

    },

    getPaymentById(paymentId) {

        return axios.get(

            `${PAYMENT_BASE_URL}/${paymentId}`

        );

    },

};

export default paymentApi;