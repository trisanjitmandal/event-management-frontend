import { Card, CardContent } from "@/components/ui/card";

function EmptyValidation() {

    return (

        <Card>

            <CardContent className="py-16 text-center text-muted-foreground">

                No tickets have been validated yet.

            </CardContent>

        </Card>

    );

}

export default EmptyValidation;