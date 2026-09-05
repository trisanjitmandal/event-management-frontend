import api from "./axios";

const attendeeApi = {

    getAllEvents() {
        return api.get("/events");
    },

    getEventById(eventId) {
        return api.get(`/events/${eventId}`);
    },

    purchaseTicket(data) {
        return api.post("/tickets/purchase", data);
    },

    getMyTickets() {
        return api.get("/tickets/my-tickets");
    },

    getTicketById(ticketId) {
        return api.get(`/tickets/${ticketId}`);
    },

    cancelTicket(ticketId) {
        return api.patch(`/tickets/cancel/${ticketId}`);
    },

};

export default attendeeApi;