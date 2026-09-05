import {

    Card,
    CardContent,
    CardHeader,
    CardTitle,

} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

function TicketValidationResult({

    ticket,

}) {

    if (!ticket) return null;

    return (

        <Card>

            <CardHeader>

                <CardTitle>

                    Ticket Details

                </CardTitle>

            </CardHeader>

            <CardContent className="space-y-4">

                <div>

                    <strong>Attendee</strong>

                    <p>{ticket.attendeeName}</p>

                </div>

                <div>

                    <strong>Event</strong>

                    <p>{ticket.eventName}</p>

                </div>

                <div>

                    <strong>Ticket Type</strong>

                    <p>{ticket.ticketType}</p>

                </div>

                <div>

                    <strong>Quantity</strong>

                    <p>{ticket.quantity}</p>

                </div>

                <div>

                    <strong>Status</strong>

                    <br />

                    <Badge>

                        {ticket.status}

                    </Badge>

                </div>

                <div>

                    <strong>Validated At</strong>

                    <p>

                        {ticket.validationDateTime}

                    </p>

                </div>

            </CardContent>

        </Card>

    );

}

export default TicketValidationResult;