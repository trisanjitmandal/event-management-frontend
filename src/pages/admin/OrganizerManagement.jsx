import { useState } from "react";

import UserSearch from "@/components/admin/UserSearch";
import UserInfoCard from "@/components/admin/UserInfoCard";

function OrganizerManagement() {

    const [selectedUser, setSelectedUser] = useState(null);

    return (

        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold">

                    Organizer Management

                </h1>

                <p className="text-muted-foreground">

                    Search users and manage organizer permissions.

                </p>

            </div>

            <div className="max-w-xl">

                <UserSearch
                    onSelectUser={setSelectedUser}
                />

            </div>

            {selectedUser && (

                <UserInfoCard
                     user={selectedUser}
                    onRoleChange={setSelectedUser}
                />

)}

        </div>

    );

}

export default OrganizerManagement;