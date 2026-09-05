import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import EventInformation from "./EventInformation";
import EventSchedule from "./EventSchedule";
import TicketSales from "./TicketSales";
import TicketTypeSection from "./TicketTypeSection";

function EventForm({

    title,
    subtitle,
    buttonText,

    loading,

    initialData,

    onSubmit,

}) {


    const [eventData, setEventData] = useState({

        name: "",

        description: "",

        venue: "",

        startDate: "",

        endDate: "",

        salesStartDate: "",

        salesEndDate: "",

        ticketTypes: [],

    });

    useEffect(() => {

        if (initialData) {

            setEventData({

                ...initialData,

                ticketTypes:

                    initialData.ticketTypes ?? [],

            });

        }

    }, [initialData]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setEventData((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    const addTicketType = () => {

        setEventData((prev) => ({

            ...prev,

            ticketTypes: [

                ...prev.ticketTypes,

                {

                    typeName: "GENERAL",

                    price: "",

                    availableQuantity: "",

                }

            ]

        }));

    };

    const removeTicketType = (index) => {

        setEventData((prev) => ({

            ...prev,

            ticketTypes:

                prev.ticketTypes.filter(

                    (_, i) => i !== index

                ),

        }));

    };

    const handleTicketTypeChange = (

        index,

        field,

        value

    ) => {

        setEventData((prev) => {

            const updated = [...prev.ticketTypes];

            updated[index] = {

                ...updated[index],

                [field]: value,

            };

            return {

                ...prev,

                ticketTypes: updated,

            };

        });

    };

    const validateForm = () => {

        if (!eventData.name.trim()) {
            alert("Event Name is required");
            return false;
        }

        if (!eventData.description.trim()) {
            alert("Description is required");
            return false;
        }

        if (!eventData.venue.trim()) {
            alert("Venue is required");
            return false;
        }

        if (!eventData.startDate) {
            alert("Start Date is required");
            return false;
        }

        if (!eventData.endDate) {
            alert("End Date is required");
            return false;
        }

        if (!eventData.salesStartDate) {
            alert("Sales Start Date is required");
            return false;
        }

        if (!eventData.salesEndDate) {
            alert("Sales End Date is required");
            return false;
        }

        if (
            new Date(eventData.endDate) <=
            new Date(eventData.startDate)
        ) {
            alert("End Date must be after Start Date");
            return false;
        }

        if (
            new Date(eventData.salesEndDate) <=
            new Date(eventData.salesStartDate)
        ) {
            alert("Sales End Date must be after Sales Start Date");
            return false;
        }

        if (
            new Date(eventData.salesEndDate) >
            new Date(eventData.startDate)
        ) {
            alert("Ticket Sales must end before Event Starts");
            return false;
        }

        if (eventData.ticketTypes.length === 0) {
            alert("Please add at least one Ticket Type");
            return false;
        }

        for (const ticket of eventData.ticketTypes) {

            if (!ticket.typeName) {
                alert("Please select Ticket Type");
                return false;
            }

            if (Number(ticket.price) <= 0) {
                alert("Ticket Price must be greater than zero");
                return false;
            }

            if (Number(ticket.availableQuantity) <= 0) {
                alert("Available Quantity must be greater than zero");
                return false;
            }

        }

        return true;

    };


    const handleSubmit = () => {

        if (!validateForm()) {
            return;
        }

        const payload = {

            ...eventData,

            ticketTypes:

                eventData.ticketTypes.map(ticket => ({

                    ...ticket,

                    price: Number(ticket.price),

                    availableQuantity: Number(
                        ticket.availableQuantity
                    ),

                })),

        };

        onSubmit(payload);

    };


    return (

        <div className="max-w-5xl mx-auto space-y-6">

            <div>

                <h1 className="text-3xl font-bold">

                    {title}

                </h1>

                <p className="text-muted-foreground">

                    {subtitle}

                </p>

            </div>

            <EventInformation
                eventData={eventData}
                handleChange={handleChange}
            />

            <EventSchedule
                eventData={eventData}
                handleChange={handleChange}
            />

            <TicketSales
                eventData={eventData}
                handleChange={handleChange}
            />

            <TicketTypeSection
                ticketTypes={eventData.ticketTypes}
                addTicketType={addTicketType}
                removeTicketType={removeTicketType}
                handleTicketTypeChange={handleTicketTypeChange}
            />

            <Separator />

            <div className="flex justify-end">

                <Button

                    onClick={handleSubmit}

                    disabled={loading}

                >

                    {

                        loading

                            ? "Please Wait..."

                            : buttonText

                    }

                </Button>

            </div>

        </div>

    );

}


    export default EventForm;
