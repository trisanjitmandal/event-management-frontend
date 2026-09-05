import {

    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,

} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Mail } from "lucide-react";

import StaffActions from "./StaffActions";


function StaffCard({
    staff,onDelete
}) {
    
    return (
         <Card className="hover:shadow-lg transition-shadow">

            <CardHeader className="flex flex-row justify-between items-center">

                <CardTitle>
                    {staff.name}
                </CardTitle>

                <Badge>
                    STAFF
                </Badge>

            </CardHeader>

            <CardContent className="space-y-4">

                <div className="flex items-center gap-2">

                    <Mail className="h-4 w-4" />
                    {staff.email}

                </div>
            </CardContent>

             <CardFooter>

                <StaffActions
                    staffId={staff.id}
                    onDelete={onDelete}
                />

            </CardFooter>

        </Card>
               
    );
}

export default StaffCard;