import TicketCard from "./TicketCard";
import EmptyTicket from "./EmptyTicket";

function TicketGrid({

    tickets,
    loading,
    error,

}) {

    if (loading) {

        return (

            <div className="text-center py-20">

                Loading Tickets...

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

    if (tickets.length === 0) {

        return <EmptyTicket />;

    }

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {tickets.map((ticket) => (

                <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                />

            ))}

        </div>

    );

}

export default TicketGrid;