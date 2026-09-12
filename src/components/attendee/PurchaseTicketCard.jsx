import { useState } from "react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import RazorpayCheckout from "@/components/payment/RazorpayCheckout";


function PurchaseTicketCard({ event }) {

    const [selectedTicket, setSelectedTicket] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [paymentStarted, setPaymentStarted] = useState(false);

    const handleTicketChange = (value) => {

        const ticket = event.ticketTypes.find(
            ticket => ticket.typeName === value
        );

        setSelectedTicket(ticket);

        setQuantity(1);

        // Reset payment UI if ticket changes
        setPaymentStarted(false);

    };

    const handlePaymentSuccess = (ticketResponse) => {

        console.log(
            "Payment successful:",
            ticketResponse
        );

        alert("Payment Successful! Ticket generated.");

        // You can navigate to My Tickets later.
        window.location.href = "/attendee/tickets";
    };

       const handlePaymentError = (message) => {

        console.error(
            "Payment failed:",
            message
        );

        alert(message);

        setPaymentStarted(false);
    };


    return (

        <Card>

            <CardHeader>

                <CardTitle>
                    Purchase Ticket
                </CardTitle>

            </CardHeader>


            <CardContent className="space-y-6">

                <div className="space-y-2">

                    <Label>
                        Ticket Type
                    </Label>


                    <Select
                        onValueChange={handleTicketChange}
                    >

                        <SelectTrigger>

                            <SelectValue
                                placeholder="Select Ticket Type"
                            />

                        </SelectTrigger>


                        <SelectContent>

                            {event.ticketTypes.map(
                                ticket => (

                                    <SelectItem
                                        key={ticket.id}
                                        value={ticket.typeName}
                                    >

                                        {ticket.typeName}

                                    </SelectItem>

                                )
                            )}

                        </SelectContent>

                    </Select>

                </div>


                <div className="space-y-2">
                    <Label> Quantity </Label>
                    <div className="flex items-center gap-4">
                        
                          <Button
                              type = "button"
                              variant="outline"
                              size =  "icon"
                              disabled={!selectedTicket ||quantity <= 1}
                              onClick={() => {
                              setQuantity((prev) => Math.max(1, prev - 1));
                              }}
                              >
                                -
                            </Button> 

                    <div className="w-20 h-8 border rounded-md flex items-center justify-center">
                    {quantity}
                    </div>

                          <Button
                              type = "button"
                              variant="outline"
                              size =  "icon"
                              disabled={!selectedTicket ||quantity >= selectedTicket.availableQuantity}
                              onClick={() => {
                              setQuantity((prev) => Math.min(selectedTicket.availableQuantity,prev + 1  ));
                              }}
                              >
                              +
                            </Button>     
                    </div>

                </div>

                {selectedTicket && (

                    <div className="rounded-lg border p-4 space-y-3">

                        <div className="flex justify-between">

                            <span>
                                Price
                            </span>

                            <span>
                                ₹ {selectedTicket.price}
                            </span>

                        </div>


                        <div className="border-t pt-3 flex justify-between font-bold text-lg">

                            <span>
                                Total
                            </span>

                            <span>
                                ₹ {selectedTicket.price * quantity}
                            </span>

                        </div>

                    </div>

                )}

                {selectedTicket && !paymentStarted && (

                    <Button
                        type="button"
                        className="w-full"
                        onClick={() => {
                            setPaymentStarted(true);
                        }}
                    >

                        Proceed To Payment

                    </Button>

                )}



                {selectedTicket && paymentStarted && (

                    <div className="space-y-3">

                        <RazorpayCheckout

                            eventId={event.id}

                            ticketType={
                                selectedTicket.typeName
                            }

                            quantity={quantity}

                            onSuccess={
                                handlePaymentSuccess
                            }

                            onError={
                                handlePaymentError
                            }

                        />


                        <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={() => {
                                setPaymentStarted(false);
                            }}
                        >

                            Back

                        </Button>

                    </div>

                )}

            </CardContent>

        </Card>
    );
}

export default PurchaseTicketCard;