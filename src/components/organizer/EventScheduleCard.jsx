import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CalendarDays } from "lucide-react";

function EventScheduleCard({ event }) {

  return (

    <Card>

      <CardHeader>

        <CardTitle>
          Event Schedule
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex items-start gap-3">

          <CalendarDays className="h-5 w-5 mt-1" />

          <div>

            <p className="font-medium">
              Event Start
            </p>

            <p className="text-muted-foreground">
              {event.startDate}
            </p>

          </div>

        </div>

        <div className="flex items-start gap-3">

          <CalendarDays className="h-5 w-5 mt-1" />

          <div>

            <p className="font-medium">
              Event End
            </p>

            <p className="text-muted-foreground">
              {event.endDate}
            </p>

          </div>

        </div>

        <div className="border-t pt-4">

          <p className="font-semibold mb-2">
            Ticket Sales
          </p>

          <p>

            <strong>Start:</strong>

            {" "}

            {event.salesStartDate}

          </p>

          <p>

            <strong>End:</strong>

            {" "}

            {event.salesEndDate}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}

export default EventScheduleCard;