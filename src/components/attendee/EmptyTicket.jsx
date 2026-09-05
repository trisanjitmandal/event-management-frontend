import { TicketX } from "lucide-react";

function EmptyTicket() {

    return (

        <div className="flex flex-col items-center justify-center py-20">

            <TicketX className="h-16 w-16 text-muted-foreground mb-4" />

            <h2 className="text-2xl font-semibold">

                No Tickets Found

            </h2>

            <p className="text-muted-foreground mt-2">

                You haven't purchased any tickets yet.

            </p>

        </div>

    );

}

export default EmptyTicket;