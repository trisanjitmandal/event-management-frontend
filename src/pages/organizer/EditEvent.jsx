import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import organizerApi from "@/api/organizerApi";

import EventForm from "@/components/organizer/EventForm";

function EditEvent() {

    const navigate = useNavigate();

    const { eventId } = useParams();

    const [loading, setLoading] = useState(false);

    const [event, setEvent] = useState(null);

    const [pageLoading, setPageLoading] = useState(true);

    // ==========================================
    // Fetch Event
    // ==========================================

    useEffect(() => {

        fetchEvent();

    }, []);

    const fetchEvent = async () => {

        try {

            const response =
                await organizerApi.getEventById(eventId);

            setEvent(response.data);

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ??
                "Failed to load event"
            );

            navigate("/organizer/my-events");

        } finally {

            setPageLoading(false);

        }

    };

    // ==========================================
    // Update Event
    // ==========================================

    const handleUpdateEvent = async (payload) => {

        try {

            setLoading(true);

            await organizerApi.updateEvent(
                eventId,
                payload
            );

            alert("Event Updated Successfully");

            navigate("/organizer/my-events");

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ??
                "Failed to update event"
            );

        } finally {

            setLoading(false);

        }

    };

    // ==========================================
    // Loading Screen
    // ==========================================

    if (pageLoading) {

        return (

            <div className="text-center py-20">

                Loading Event...

            </div>

        );

    }

    // ==========================================
    // UI
    // ==========================================

    return (

        <EventForm

            title="Edit Event"

            subtitle="Update your event information."

            buttonText="Update Event"

            loading={loading}

            initialData={event}

            onSubmit={handleUpdateEvent}

        />

    );

}

export default EditEvent;