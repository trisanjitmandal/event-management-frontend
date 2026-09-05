import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function TicketQrCard({ ticket }) {

    return (

        <Card>

            <CardHeader>

                <CardTitle>

                    QR Code

                </CardTitle>

            </CardHeader>

            <CardContent className="flex flex-col items-center gap-4">

                <img

                    src={`data:image/png;base64,${ticket.qrCodeBase64}`}

                    alt="QR Code"

                    className="w-64 h-64 border rounded-lg"

                />

                <p className="text-sm text-muted-foreground text-center">

                    Show this QR code at the event entrance.

                </p>

            </CardContent>

        </Card>

    );

}

export default TicketQrCard;