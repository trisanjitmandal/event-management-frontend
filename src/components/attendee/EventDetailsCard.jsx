import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {
  MapPin,
  User,
  FileText,
} from "lucide-react";

function EventDetailsCard({ event }) {

  return (

    <Card className="shadow-sm">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="text-2xl font-bold">

          {event.name}

        </CardTitle>

        <Badge
          variant={
            event.status === "PUBLISHED"
              ? "default"
              : "secondary"
          }
        >

          {event.status}

        </Badge>

      </CardHeader>

      <CardContent className="space-y-6">


        <div className="space-y-2">

          <div className="flex items-center gap-2">

            <FileText className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">
              Description
            </h3>

          </div>

          <p className="leading-7 text-muted-foreground">

            {event.description}

          </p>

        </div>

        <Separator />


        <div className="flex items-start gap-3">

          <MapPin className="h-5 w-5 mt-1 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">

              Venue

            </p>

            <p className="font-medium">

              {event.venue}

            </p>

          </div>

        </div>


        <div className="flex items-start gap-3">

          <User className="h-5 w-5 mt-1 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">

              Organizer

            </p>

            <p className="font-medium">

              {event.organizerName}

            </p>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}

export default EventDetailsCard;