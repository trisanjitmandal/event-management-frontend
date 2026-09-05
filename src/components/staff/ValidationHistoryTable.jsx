import {

    Card,
    CardContent,

} from "@/components/ui/card";

import {

    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,

} from "@/components/ui/table";

function HistoryTable({ history }) {

    if (history.length === 0) {

        return (

            <Card>

                <CardContent className="py-10 text-center text-muted-foreground">

                    No validation history found.

                </CardContent>

            </Card>

        );

    }

    return (

        <Card>

            <CardContent className="pt-6">

                <Table>

                    <TableHeader>

                        <TableRow>

                            <TableHead>Event</TableHead>

                            <TableHead>Ticket Type</TableHead>

                            <TableHead>Quantity</TableHead>

                            <TableHead>Validated At</TableHead>

                        </TableRow>

                    </TableHeader>

                    <TableBody>

                        {history.map((item) => (

                            <TableRow key={item.id}>

                                <TableCell>

                                    {item.eventName}

                                </TableCell>

                                <TableCell>

                                    {item.ticketType}

                                </TableCell>

                                <TableCell>

                                    {item.quantity}

                                </TableCell>

                                <TableCell>

                                    {new Date(
                                        item.validationDateTime
                                    ).toLocaleString()}

                                </TableCell>

                            </TableRow>

                        ))}

                    </TableBody>

                </Table>

            </CardContent>

        </Card>

    );

}

export default HistoryTable;