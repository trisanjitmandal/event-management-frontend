import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import attendeeApi from "@/api/attendeeApi";

import EventDetailsCard from "@/components/attendee/EventDetailsCard";
import EventScheduleCard from "@/components/attendee/EventScheduleCard";
import TicketTypeTable from "@/components/attendee/TicketTypeTable";
import PurchaseTicketCard from "@/components/attendee/PurchaseTicketCard";

function EventDetails() {

    const { eventId } = useParams();

    const [event, setEvent] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchEvent();

    }, [eventId]);


    const fetchEvent = async () => {

        try {

            setLoading(true);

            const response =
                await attendeeApi.getEventById(eventId);

            setEvent(response.data);

        }

        catch (error) {

            console.error(error);

            setError("Failed to load event.");

        }

        finally {

            setLoading(false);

        }

    };


    if (loading) {

        return (

            <div className="text-center py-20">
                Loading Event...
            </div>

        );

    }

    if (error) {

        return (

            <div className="text-center py-20 text-red-500">
                {error}
            </div>

        );

    }


    if (!event) {

        return (

            <div className="text-center py-20">
                Event not found.
            </div>

        );

    }


    return (

        <div className="max-w-6xl mx-auto space-y-6">

            <div>

                <h1 className="text-3xl font-bold">
                    Event Details
                </h1>

                <p className="text-muted-foreground">
                    Browse event information and purchase tickets.
                </p>

            </div>

            <EventDetailsCard
                event={event}
            />

            <EventScheduleCard
                event={event}
            />

            <TicketTypeTable
                ticketTypes={event.ticketTypes}
            />

            <PurchaseTicketCard
                event={event}
            />

        </div>

    );

}

export default EventDetails;