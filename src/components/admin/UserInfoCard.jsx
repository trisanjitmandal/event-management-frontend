import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import adminApi from "@/api/adminApi";

function UserInfoCard({ user, onRoleChange }) {

    const handleAction = async () => {

        try {

            if (user.role === "ATTENDEE") {

                await adminApi.promoteOrganizer(user.id);

                onRoleChange({
                    ...user,
                    role: "ORGANIZER",
                });

            } else if (user.role === "ORGANIZER") {

                await adminApi.demoteOrganizer(user.id);

                onRoleChange({
                    ...user,
                    role: "ATTENDEE",
                });

            }

        } catch (error) {

            console.log(error);

            alert("Operation failed.");

        }

    };

    return (

        <Card className="max-w-xl">

            <CardHeader>

                <CardTitle>

                    Selected User

                </CardTitle>

            </CardHeader>

            <CardContent className="space-y-5">

                <div>

                    <p className="text-sm text-muted-foreground">

                        Name

                    </p>

                    <p className="font-medium">

                        {user.name}

                    </p>

                </div>

                <div>

                    <p className="text-sm text-muted-foreground">

                        Email

                    </p>

                    <p className="font-medium">

                        {user.email}

                    </p>

                </div>

                <div>

                    <p className="text-sm text-muted-foreground">

                        Current Role

                    </p>

                    <Badge variant="secondary">

                        {user.role}

                    </Badge>

                </div>

                <Button
                    onClick={handleAction}
                    className="w-full"
                >

                    {user.role === "ATTENDEE"
                        ? "Promote to Organizer"
                        : "Demote to Attendee"}

                </Button>

            </CardContent>

        </Card>

    );

}

export default UserInfoCard;