import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MapPin, User } from "lucide-react";

function EventDetailsCard({ event }) {

  return (

    <Card>

      <CardHeader className="flex flex-row justify-between items-center">

        <CardTitle className="text-2xl">
          {event.name}
        </CardTitle>

        <Badge>
          {event.status}
        </Badge>

      </CardHeader>

      <CardContent className="space-y-6">

        <div>

          <h3 className="font-semibold mb-2">
            Description
          </h3>

          <p className="text-muted-foreground">
            {event.description}
          </p>

        </div>

        <div className="flex items-center gap-2">

          <MapPin className="h-4 w-4" />

          <span>{event.venue}</span>

        </div>

        <div className="flex items-center gap-2">

          <User className="h-4 w-4" />

          <span>{event.organizerName}</span>

        </div>

      </CardContent>

    </Card>

  );

}

export default EventDetailsCard;