
import { useEffect, useState } from "react";
import organizerApi from "@/api/organizerApi";
import EventList from "@/components/organizer/EventList";

function MyEvents() {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetchEvents();

    }, []);

    const fetchEvents = async () => {

        try {

            setLoading(true);

            const response =
                await organizerApi.getMyEvents();

            setEvents(response.data);

        }

        catch (error) {

            console.error(error);

            setError("Failed to load events.");

        }

        finally {

            setLoading(false);

        }

    };
    
    const handleDelete = async (eventId) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this event?"
        );

        if (!confirmed) {
            return;
        }

        try {

            await organizerApi.deleteEvent(eventId);

            setEvents((prev) =>
                prev.filter((event) => event.id !== eventId)
            );

            alert("Event deleted successfully.");

        }

        catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ??
                "Failed to delete event."
            );

        }

    };

    return (

        <EventList
            events={events}
            loading={loading}
            error={error}
            onDelete={handleDelete}
        />

    );

}

export default MyEvents;