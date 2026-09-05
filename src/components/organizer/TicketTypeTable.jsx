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

function TicketTypeTable({ ticketTypes }) {

  return (

    <Card>

      <CardHeader>

        <CardTitle>
          Ticket Types
        </CardTitle>

      </CardHeader>

      <CardContent>

        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>
                Type
              </TableHead>

              <TableHead>
                Price
              </TableHead>

              <TableHead>
                Quantity
              </TableHead>

            </TableRow>

          </TableHeader>

          <TableBody>

            {ticketTypes.map((ticket) => (

              <TableRow
                key={ticket.id}
              >

                <TableCell>

                  {ticket.typeName}

                </TableCell>

                <TableCell>

                  ₹ {ticket.price}

                </TableCell>

                <TableCell>

                  {ticket.availableQuantity}

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