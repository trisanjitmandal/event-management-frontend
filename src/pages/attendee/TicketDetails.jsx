import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import attendeeApi from "@/api/attendeeApi";

import TicketDetailsCard from "@/components/attendee/TicketDetailsCard";
import TicketQrCard from "@/components/attendee/TicketQrCard";
import TicketActions from "@/components/attendee/TicketActions";

function TicketDetails() {

    const { ticketId } = useParams();

    const [ticket, setTicket] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchTicket();

    }, [ticketId]);

    // ==========================================
    // Fetch Ticket
    // ==========================================

    const fetchTicket = async () => {

        try {

            setLoading(true);

            const response =
                await attendeeApi.getTicketById(ticketId);

            setTicket(response.data);

        }

        catch (error) {

            console.error(error);

            if(error.response?.status === 403 ||
                error.response?.status === 404){
               setError("Ticket not found or you are not authorized to view this ticket.");
             } else {
                setError("Failed to load ticket. Please try again.")
             }

        }

        finally {

            setLoading(false);

        }

    };

    // ==========================================
    // Loading
    // ==========================================

    if (loading) {

        return (

            <div className="text-center py-20">

                Loading Ticket...

            </div>

        );

    }

    // ==========================================
    // Error
    // ==========================================

    if (error) {

        return (

            <div className="text-center py-20 text-red-500">

                {error}

            </div>

        );

    }

    // ==========================================
    // Not Found
    // ==========================================

    if (!ticket) {

        return (

            <div className="text-center py-20">

                Ticket not found.

            </div>

        );

    }

    // ==========================================
    // UI
    // ==========================================

    return (

        <div className="max-w-5xl mx-auto space-y-6">

            <div>

                <h1 className="text-3xl font-bold">

                    Ticket Details

                </h1>

                <p className="text-muted-foreground">

                    View your ticket information and QR code.

                </p>

            </div>

            <TicketDetailsCard
                ticket={ticket}
            />

            <TicketQrCard
                ticket={ticket}
            />

            {ticket.status !== "CANCELLED" && (
                <TicketActions
                 ticket={ticket}
                 onRefresh={fetchTicket}
               />

)}

        </div>

    );

}

export default TicketDetails;