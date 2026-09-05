import {

    Card,
    CardContent,
    CardHeader,
    CardTitle,

} from "@/components/ui/card";

import EmptyValidation from "./EmptyValidation";

function RecentValidationCard({

    validations,

}) {

    if (validations.length === 0) {

        return <EmptyValidation />;

    }

    return (

        <Card>

            <CardHeader>

                <CardTitle>

                    Recent Validations

                </CardTitle>

            </CardHeader>

            <CardContent>

                <div className="space-y-4">

                    {validations.map((validation) => (

                        <div

                            key={validation.id}

                            className="flex justify-between items-center border rounded-lg p-4"

                        >

                            <div>

                                <h3 className="font-semibold">

                                    {validation.attendeeName}

                                </h3>

                                <p className="text-sm text-muted-foreground">

                                    {validation.ticketType}

                                </p>

                            </div>

                            <div className="text-sm text-muted-foreground">

                                {validation.time}

                            </div>

                        </div>

                    ))}

                </div>

            </CardContent>

        </Card>

    );

}

export default RecentValidationCard;