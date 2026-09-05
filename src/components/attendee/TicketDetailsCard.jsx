import { Badge } from "@/components/ui/badge";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    CalendarDays,
    Ticket,
    IndianRupee,
    Hash,
} from "lucide-react";

function TicketDetailsCard({ ticket }) {

    return (

        <Card>

            <CardHeader className="flex flex-row justify-between items-center">

                <CardTitle>

                    Ticket Details

                </CardTitle>

                <Badge>

                    {ticket.status}

                </Badge>

            </CardHeader>

            <CardContent className="space-y-5">

                <div className="flex items-center gap-3">

                    <Hash className="h-5 w-5" />

                    <div>

                        <p className="font-medium">

                            Ticket ID

                        </p>

                        <p className="text-muted-foreground break-all">

                            {ticket.id}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <Ticket className="h-5 w-5" />

                    <div>

                        <p className="font-medium">

                            Ticket Type

                        </p>

                        <p className="text-muted-foreground">

                            {ticket.ticketType}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <Ticket className="h-5 w-5" />

                    <div>

                        <p className="font-medium">

                            Quantity

                        </p>

                        <p className="text-muted-foreground">

                            {ticket.quantity}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <IndianRupee className="h-5 w-5" />

                    <div>

                        <p className="font-medium">

                            Total Price

                        </p>

                        <p className="text-muted-foreground">

                            ₹ {ticket.totalPrice}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <CalendarDays className="h-5 w-5" />

                    <div>

                        <p className="font-medium">

                            Purchased On

                        </p>

                        <p className="text-muted-foreground">

                            {ticket.createdTime}

                        </p>

                    </div>

                </div>

            </CardContent>

        </Card>

    );

}

export default TicketDetailsCard;