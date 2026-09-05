import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Ticket } from "lucide-react";

function TicketTypeTable({ ticketTypes }) {

  return (

    <Card className="shadow-sm">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="flex items-center gap-2">

          <Ticket className="h-5 w-5 text-primary" />

          Ticket Types

        </CardTitle>

        <Badge variant="secondary">

          {ticketTypes.length} Types

        </Badge>

      </CardHeader>

      <CardContent>

        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>
                Ticket Type
              </TableHead>

              <TableHead>
                Price
              </TableHead>

              <TableHead className="text-right">
                Availability
              </TableHead>

            </TableRow>

          </TableHeader>

          <TableBody>

            {ticketTypes.map((ticket) => (

              <TableRow key={ticket.id}>

                <TableCell>

                  <Badge variant="outline">

                    {ticket.typeName}

                  </Badge>

                </TableCell>

                <TableCell className="font-semibold">

                  ₹ {ticket.price}

                </TableCell>

                <TableCell className="text-right">

                  {ticket.availableQuantity > 0 ? (

                    <Badge>

                      {ticket.availableQuantity} Left

                    </Badge>

                  ) : (

                    <Badge variant="destructive">

                      Sold Out

                    </Badge>

                  )}

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </CardContent>

    </Card>

  );

}

export default TicketTypeTable;