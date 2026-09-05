import { useState } from "react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

function ScanQrCard({

    onScan,
    loading,

}) {

    const [qrCodeData, setQrCodeData] = useState("");

    const handleSubmit = () => {

        if (!qrCodeData.trim()) return;

        onScan(qrCodeData);

    };

    return (

        <Card>

            <CardHeader>

                <CardTitle>

                    Scan Ticket

                </CardTitle>

            </CardHeader>

            <CardContent className="space-y-4">

                <Input

                    placeholder="Paste QR Code"

                    value={qrCodeData}

                    onChange={(e) =>
                        setQrCodeData(e.target.value)
                    }

                />

                <Button

                    className="w-full"

                    onClick={handleSubmit}

                    disabled={loading}

                >

                    {loading ? "Validating..." : "Validate Ticket"}

                </Button>

            </CardContent>

        </Card>

    );

}

export default ScanQrCard;