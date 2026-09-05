import { useNavigate } from "react-router-dom";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    CalendarDays,
    MapPin,
    User,
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";

function EventCard({ event, onDelete }) {

    const navigate = useNavigate();

    return (

        <Card className="shadow-sm hover:shadow-md transition-shadow">

            <CardHeader className="flex flex-row items-center justify-between">

                <CardTitle className="text-xl">

                    {event.name}

                </CardTitle>

                <Badge>

                    {event.status}

                </Badge>

            </CardHeader>

            <CardContent className="space-y-4">

                <div className="flex items-center gap-2 text-muted-foreground">

                    <MapPin className="h-4 w-4" />

                    <span>

                        {event.venue}

                    </span>

                </div>

                <div className="flex items-center gap-2 text-muted-foreground">

                    <CalendarDays className="h-4 w-4" />

                    <span>

                        {event.startDate}

                    </span>

                </div>

                <div className="flex items-center gap-2 text-muted-foreground">

                    <User className="h-4 w-4" />

                    <span>

                        {event.organizerName}

                    </span>

                </div>

            </CardContent>

            <CardFooter className="flex justify-end gap-2">

                <Button
                    variant="outline"
                    onClick={() =>
                        navigate(`/organizer/events/${event.id}`)
                    }
                >

                    <Eye className="mr-2 h-4 w-4" />

                    View

                </Button>

                <Button
                    onClick={() =>
                        navigate(`/organizer/edit-event/${event.id}`)
                    }
                >

                    <Pencil className="mr-2 h-4 w-4" />

                    Edit

                </Button>

                <Button
                variant="destructive"
                onClick={() => onDelete(event.id)}
                >

                    <Trash2 className="mr-2 h-4 w-4" />

                    Delete

                </Button>

            </CardFooter>

        </Card>

    );

}

export default EventCard;