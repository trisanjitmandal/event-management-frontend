import api from "./axios";

const EVENT_BASE_URL = "/events";

const organizerApi = {

  // Create Event
  createEvent(eventData) {
    return api.post(
      EVENT_BASE_URL,
      eventData
    );
  },

   // Get My Events
  getMyEvents() {
    return api.get(
      `${EVENT_BASE_URL}/my-events`
    );
  },

  // Get Event By Id
  getEventById(eventId) {
    return api.get(
      `${EVENT_BASE_URL}/${eventId}`
    );
  },

  // Update Event
  updateEvent(eventId, eventData) {
    return api.put(
      `${EVENT_BASE_URL}/${eventId}`,
      eventData
    );
  },

  // Delete Event
  deleteEvent(eventId) {
    return api.delete(
      `${EVENT_BASE_URL}/${eventId}`
    );
  },

};

export default organizerApi;