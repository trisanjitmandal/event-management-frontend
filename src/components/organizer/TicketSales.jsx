import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function TicketSales({
  eventData,
  handleChange,
}) {
  return (

    <Card>

      <CardHeader>

        <CardTitle>
          Ticket Sales
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Sales Start */}

          <div className="space-y-2">

            <Label htmlFor="salesStartDate">
              Sales Start Date & Time
            </Label>

            <Input
              id="salesStartDate"
              type="datetime-local"
              name="salesStartDate"
              value={eventData.salesStartDate}
              onChange={handleChange}
            />

          </div>

          {/* Sales End */}

          <div className="space-y-2">

            <Label htmlFor="salesEndDate">
              Sales End Date & Time
            </Label>

            <Input
              id="salesEndDate"
              type="datetime-local"
              name="salesEndDate"
              value={eventData.salesEndDate}
              onChange={handleChange}
            />

          </div>

        </div>

      </CardContent>

    </Card>

  );
}

export default TicketSales;