import { useNavigate } from "react-router-dom";

import {

    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,

} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {

    CalendarDays,
    Ticket,
    IndianRupee,
    Eye,

} from "lucide-react";

function TicketCard({ ticket }) {

    const navigate = useNavigate();

    return (

        <Card className="hover:shadow-lg transition-all">

            <CardHeader className="flex flex-row justify-between items-center">

                <CardTitle>

                    Ticket

                </CardTitle>

                <Badge>

                    {ticket.status}

                </Badge>

            </CardHeader>

            <CardContent className="space-y-4">

                <div className="flex items-center gap-2">

                    <Ticket className="h-4 w-4" />

                    <span>

                        {ticket.ticketType}

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <Ticket className="h-4 w-4" />

                    <span>

                        Quantity : {ticket.quantity}

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <IndianRupee className="h-4 w-4" />

                    <span>

                         {ticket.totalPrice}

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <CalendarDays className="h-4 w-4" />

                    <span>

                        {ticket.createdTime}

                    </span>

                </div>

            </CardContent>

            <CardFooter className="justify-end">

                <Button

                    onClick={() =>
                        navigate(`/attendee/tickets/${ticket.id}`)
                    }

                >

                    <Eye className="mr-2 h-4 w-4" />

                    View Ticket

                </Button>

            </CardFooter>

        </Card>

    );

}

export default TicketCard;