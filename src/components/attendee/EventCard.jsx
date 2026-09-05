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
    MapPin,
    User,
    Eye,

} from "lucide-react";

function EventCard({ event }) {

    const navigate = useNavigate();

    return (

        <Card className="hover:shadow-lg transition-all">

            <CardHeader className="flex flex-row justify-between items-center">

                <CardTitle>

                    {event.name}

                </CardTitle>

                <Badge>

                    {event.status}

                </Badge>

            </CardHeader>

            <CardContent className="space-y-4">

                <div className="flex items-center gap-2">

                    <MapPin className="h-4 w-4" />

                    {event.venue}

                </div>

                <div className="flex items-center gap-2">

                    <CalendarDays className="h-4 w-4" />

                    {event.startDate}

                </div>

                <div className="flex items-center gap-2">

                    <User className="h-4 w-4" />

                    {event.organizerName}

                </div>

            </CardContent>

            <CardFooter className="justify-end">

                <Button

                    onClick={() =>
                        navigate(`/attendee/events/${event.id}`)
                    }

                >

                    <Eye className="mr-2 h-4 w-4" />

                    View Details

                </Button>

            </CardFooter>

        </Card>

    );

}

export default EventCard;