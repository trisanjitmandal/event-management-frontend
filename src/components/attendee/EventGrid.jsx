import EventCard from "./EventCard";
import EmptyEvent from "./EmptyEvent";

function EventGrid({

    events,
    loading,
    error,

}) {

    if (loading) {

        return (

            <div className="text-center py-20">
                Loading Events...
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

    if (events.length === 0) {

        return <EmptyEvent />;

    }

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {events.map((event) => (

                <EventCard
                    key={event.id}
                    event={event}
                />

            ))}

        </div>

    );

}

export default EventGrid;