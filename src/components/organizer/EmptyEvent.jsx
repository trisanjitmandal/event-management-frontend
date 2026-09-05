import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

function EmptyEvent() {

    const navigate = useNavigate();

    return (

        <div className="flex flex-col items-center justify-center py-24 text-center">

            <div className="rounded-full bg-slate-100 p-6">

                <CalendarPlus
                    className="h-12 w-12 text-slate-500"
                />

            </div>

            <h2 className="mt-6 text-2xl font-bold">
                No Events Yet
            </h2>

            <p className="mt-2 max-w-md text-muted-foreground">

                You haven't created any events yet.

                <br />

                Create your first event and start selling tickets.

            </p>

            <Button
                className="mt-8"
                onClick={() => navigate("/organizer/create-event")}
            >
                Create Event
            </Button>

        </div>

    );

}

export default EmptyEvent;