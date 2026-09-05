import { useEffect, useState } from "react";

import attendeeApi from "@/api/attendeeApi";

import TicketGrid from "@/components/attendee/TicketGrid";

function MyTickets() {

    const [tickets, setTickets] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchTickets();

    }, []);

    const fetchTickets = async () => {

        try {

            setLoading(true);

            const response =
                await attendeeApi.getMyTickets();

            setTickets(response.data);

        }

        catch (error) {

            console.error(error);

            setError("Failed to load tickets.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <TicketGrid
            tickets={tickets}
            loading={loading}
            error={error}
        />

    );

}

export default MyTickets;