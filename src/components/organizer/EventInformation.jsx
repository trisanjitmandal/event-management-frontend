import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function EventInformation({
  eventData,
  handleChange,
}) {
  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Event Information
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        {/* Event Name */}

        <div className="space-y-2">

          <Label htmlFor="name">
            Event Name
          </Label>

          <Input
            id="name"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            placeholder="Enter event name"
          />

        </div>

        {/* Venue */}

        <div className="space-y-2">

          <Label htmlFor="venue">
            Venue
          </Label>

          <Input
            id="venue"
            name="venue"
            value={eventData.venue}
            onChange={handleChange}
            placeholder="Enter venue"
          />

        </div>

        {/* Description */}

        <div className="space-y-2">

          <Label htmlFor="description">
            Description
          </Label>

          <Textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            rows={6}
            placeholder="Describe your event..."
          />

        </div>

      </CardContent>

    </Card>
  );
}

export default EventInformation;