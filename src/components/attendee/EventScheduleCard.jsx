import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import {
  CalendarDays,
  Clock3,
} from "lucide-react";

function EventScheduleCard({ event }) {

  return (

    <Card className="shadow-sm">

      <CardHeader>

        <CardTitle className="flex items-center gap-2">

          <CalendarDays className="h-5 w-5 text-primary" />

          Event Schedule

        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">


        <div className="flex items-start gap-3">

          <CalendarDays className="h-5 w-5 mt-1 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">

              Event Starts

            </p>

            <p className="font-medium">

              {event.startDate}

            </p>

          </div>

        </div>


        <div className="flex items-start gap-3">

          <CalendarDays className="h-5 w-5 mt-1 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">

              Event Ends

            </p>

            <p className="font-medium">

              {event.endDate}

            </p>

          </div>

        </div>

        <Separator />

        {/* =======================================
            Ticket Sales
        ======================================= */}

        <div className="space-y-4">

          <div className="flex items-center gap-2">

            <Clock3 className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">

              Ticket Sales

            </h3>

          </div>

          <div className="flex items-start gap-3">

            <Clock3 className="h-5 w-5 mt-1 text-primary" />

            <div>

              <p className="text-sm text-muted-foreground">

                Sales Start

              </p>

              <p className="font-medium">

                {event.salesStartDate}

              </p>

            </div>

          </div>

          <div className="flex items-start gap-3">

            <Clock3 className="h-5 w-5 mt-1 text-primary" />

            <div>

              <p className="text-sm text-muted-foreground">

                Sales End

              </p>

              <p className="font-medium">

                {event.salesEndDate}

              </p>

            </div>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}

export default EventScheduleCard;