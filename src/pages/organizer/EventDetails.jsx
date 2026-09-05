import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import organizerApi from "@/api/organizerApi";

import EventDetailsCard from "@/components/organizer/EventDetailsCard";
import EventScheduleCard from "@/components/organizer/EventScheduleCard";
import TicketTypeTable from "@/components/organizer/TicketTypeTable";
import EventActions from "@/components/organizer/EventActions";

function EventDetails() {

  const navigate = useNavigate();

  const { eventId } = useParams();

  const [event, setEvent] = useState(null);

  const [loading, setLoading] = useState(true);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {

    fetchEvent();

  }, [eventId]);


  const fetchEvent = async () => {

    try {

      setLoading(true);

      const response =
        await organizerApi.getEventById(eventId);

      setEvent(response.data);

    } catch (error) {

      console.error(error);

      setError("Failed to load event.");

    } finally {

      setLoading(false);

    }

  };


  const handleEdit = (id) => {

    navigate(`/organizer/edit-event/${id}`);

  };

  const handleDelete = async (id) => {

    console.log("Delete clicked", id);



    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) {
      return;
    }

    try {

      setDeleteLoading(true);

      await organizerApi.deleteEvent(id);

      alert("Event deleted successfully.");

      navigate("/organizer/my-events");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ??
        "Failed to delete event."
      );

    } finally {

      setDeleteLoading(false);

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
          View complete information about your event.
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

      <EventActions
        eventId={event.id}
        loading={deleteLoading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>

  );


}

export default EventDetails;