import EventCard from "./EventCard";
import EmptyEvent from "./EmptyEvent";

function EventList({
  events,
  onDelete,
  loading,
  error,
}) {

  if (loading) {

    return (

      <div className="flex justify-center py-20">

        <p className="text-lg font-medium">
          Loading events...
        </p>

      </div>

    );

  }

  if (error) {

    return (

      <div className="flex justify-center py-20">

        <p className="text-red-500 font-medium">
          {error}
        </p>

      </div>

    );

  }

  if (events.length === 0) {

    return <EmptyEvent />;

  }

  return (

    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          My Events
        </h1>

        <p className="text-muted-foreground">
          Manage all your created events.
        </p>

      </div>

      <div className="grid gap-6">

        {events.map((event) => (

          <EventCard
            key={event.id}
            event={event}
            onDelete={onDelete}
          />

        ))}

      </div>

    </div>

  );

}

export default EventList;