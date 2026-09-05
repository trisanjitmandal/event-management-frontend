import { useState } from "react";

import attendeeApi from "@/api/attendeeApi";

import { Button } from "@/components/ui/button";

function TicketActions({

    ticket,

    onRefresh,

}) {

    const [loading, setLoading] = useState(false);

    const handleCancel = async () => {

        const confirmed = window.confirm(

            "Are you sure you want to cancel this ticket?"

        );

        if (!confirmed) {

            return;

        }

        try {

            setLoading(true);

            await attendeeApi.cancelTicket(ticket.id);

            alert("Ticket cancelled successfully.");

            onRefresh();

        }

        catch (error) {

            console.error(error);

            alert(

                error.response?.data?.message ??

                "Failed to cancel ticket."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="flex justify-end">

            <Button

                variant="destructive"

                disabled={
                    loading ||
                    ticket.status === "CANCELLED"
                }

                onClick={handleCancel}

            >

                {

                    ticket.status === "CANCELLED"

                        ? "Ticket Cancelled"

                        : loading

                            ? "Cancelling..."

                            : "Cancel Ticket"

                }

            </Button>

        </div>

    );

}

export default TicketActions;