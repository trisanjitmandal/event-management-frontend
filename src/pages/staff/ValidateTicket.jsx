

import { useState } from "react";

import validationApi from "@/api/validationApi";

import ScanQrCard from "@/components/staff/ScanQrCard";
import TicketValidationResult from "@/components/staff/TicketValidationResult";

import { Button } from "@/components/ui/button";

function ValidateTicket() {

    const [ticket, setTicket] = useState(null);

    const [error, setError] = useState("");

    const [scanAgain, setScanAgain] = useState(false);

    const handleScan = async (qrCodeData) => {

        setTicket(null);
        setError("");

        try {

            const { data } =
                await validationApi.validateTicket({

                    qrCodeData,

                });

            setTicket(data);

        } catch (err) {

            console.log(err);

            setError(

                err.response?.data?.message ??

                "Ticket validation failed."

            );

        }

    };

    const handleScanAgain = () => {

        setTicket(null);

        setError("");

        setScanAgain((prev) => !prev);

    };

    return (

        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold">

                    Validate Ticket

                </h1>

                <p className="text-muted-foreground">

                    Scan attendee QR code.

                </p>

            </div>

            {!ticket && !error && (

                <ScanQrCard

                    onScan={handleScan}

                    scanAgain={scanAgain}

                />

            )}

            {ticket && (

                <div className="space-y-4">

                    <TicketValidationResult

                        ticket={ticket}

                    />

                    <Button

                        onClick={handleScanAgain}

                    >

                        Scan Next Ticket

                    </Button>

                </div>

            )}

            {error && (

                <div className="space-y-4">

                    <div className="rounded-lg border border-red-500 bg-red-50 p-4">

                        <h2 className="font-semibold text-red-600">

                            Ticket Validation Failed

                        </h2>

                        <p className="mt-2 text-sm">

                            {error}

                        </p>

                    </div>

                    <Button

                        variant="outline"

                        onClick={handleScanAgain}

                    >

                        Scan Again

                    </Button>

                </div>

            )}

        </div>

    );

}

export default ValidateTicket;