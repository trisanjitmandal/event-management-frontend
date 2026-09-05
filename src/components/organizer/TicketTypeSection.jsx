import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import TicketTypeCard from "./TicketTypeCard";

function TicketTypeSection({
  ticketTypes,
  addTicketType,
  removeTicketType,
  handleTicketTypeChange,
}) {
  return (

    <Card>

      <CardHeader>
        <CardTitle>Ticket Types</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">

        {ticketTypes.length === 0 && (

          <p className="text-sm text-muted-foreground">
            No ticket types added yet.
          </p>

        )}

        {ticketTypes.map((ticket, index) => (

          <TicketTypeCard
            key={index}
            ticket={ticket}
            index={index}
            removeTicketType={removeTicketType}
            handleTicketTypeChange={handleTicketTypeChange}
          />

        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addTicketType}
        >
          + Add Ticket Type
        </Button>

      </CardContent>

    </Card>

  );
}

export default TicketTypeSection;