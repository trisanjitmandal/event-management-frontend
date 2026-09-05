import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TicketTypeCard({
  ticket,
  index,
  removeTicketType,
  handleTicketTypeChange,
}) {
  return (
    <Card className="border-dashed">

      <CardContent className="pt-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="space-y-2">

            <Label>Ticket Type</Label>

            <Select
              value={ticket.typeName}
              onValueChange={(value) =>
                handleTicketTypeChange(index, "typeName", value)
              }
            >

              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>

                <SelectItem value="GENERAL">
                  GENERAL
                </SelectItem>

                <SelectItem value="VIP">
                  VIP
                </SelectItem>

                <SelectItem value="REGULAR">
                  REGULAR
                </SelectItem>

              </SelectContent>

            </Select>

          </div>

          <div className="space-y-2">

            <Label>Price</Label>

            <Input
              type="number"
              placeholder="Enter Price"
              value={ticket.price}
              onChange={(e) =>
                handleTicketTypeChange(
                  index,
                  "price",
                  e.target.value
                )
              }
            />

          </div>

          <div className="space-y-2">

            <Label>Available Quantity</Label>

            <Input
              type="number"
              placeholder="Enter Quantity"
              value={ticket.availableQuantity}
              onChange={(e) =>
                handleTicketTypeChange(
                  index,
                  "availableQuantity",
                  e.target.value
                )
              }
            />

          </div>

        </div>

        <div className="flex justify-end mt-6">

          <Button
            type="button"
            variant="destructive"
            onClick={() => removeTicketType(index)}
          >
            Remove
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}

export default TicketTypeCard;