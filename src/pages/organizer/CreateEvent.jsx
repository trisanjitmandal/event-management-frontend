import { useState } from "react";
import { useNavigate } from "react-router-dom";

import organizerApi from "@/api/organizerApi";

import EventForm from "@/components/organizer/EventForm";

function CreateEvent() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);


    const handleCreateEvent = async (payload) => {

        try {

            setLoading(true);

            await organizerApi.createEvent(payload);

            alert("Event Created Successfully");

            navigate("/organizer/my-events");

        } catch (error) {

            console.error(error);

            alert(

                error.response?.data?.message ??

                "Failed to create event"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <EventForm

            title="Create Event"

            subtitle="Fill in the details to create your event."

            buttonText="Create Event"

            loading={loading}

            initialData={null}

            onSubmit={handleCreateEvent}

        />

    );

}

export default CreateEvent;
