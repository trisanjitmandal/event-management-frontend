import { useEffect, useState } from "react";

import attendeeApi from "@/api/attendeeApi";

import EventGrid from "@/components/attendee/EventGrid";

function BrowseEvents() {

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
                await attendeeApi.getAllEvents();

            setEvents(response.data);

        } catch (error) {

            console.error(error);

            setError("Failed to load events.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <EventGrid
            events={events}
            loading={loading}
            error={error}
        />

    );

}

export default BrowseEvents;