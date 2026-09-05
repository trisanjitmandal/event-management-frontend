import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function EventSchedule({
  eventData,
  handleChange,
}) {
  return (

    <Card>

      <CardHeader>

        <CardTitle>
          Event Schedule
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Start Date */}

          <div className="space-y-2">

            <Label htmlFor="startDate">
              Start Date & Time
            </Label>

            <Input
              id="startDate"
              type="datetime-local"
              name="startDate"
              value={eventData.startDate}
              onChange={handleChange}
            />

          </div>

          {/* End Date */}

          <div className="space-y-2">

            <Label htmlFor="endDate">
              End Date & Time
            </Label>

            <Input
              id="endDate"
              type="datetime-local"
              name="endDate"
              value={eventData.endDate}
              onChange={handleChange}
            />

          </div>

        </div>

      </CardContent>

    </Card>

  );
}

export default EventSchedule;