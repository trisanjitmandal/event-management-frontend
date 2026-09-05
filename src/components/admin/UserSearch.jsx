import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

import adminApi from "@/api/adminApi";

function UserSearch({ onSelectUser }) {

    const [keyword, setKeyword] = useState("");

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const timer = setTimeout(async () => {

            const search = keyword.trim();

            if (search.length < 2) {

                setUsers([]);

                return;

            }

            try {

                setLoading(true);

                const response = await adminApi.searchUsers(search);

                setUsers(response.data);

            } catch (error) {

                console.error(error);

                setUsers([]);

            } finally {

                setLoading(false);

            }

        }, 400);

        return () => clearTimeout(timer);

    }, [keyword]);

    return (

        <div className="space-y-3">

            <Input
                placeholder="Search by name or email..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />

            {loading && (

                <p className="text-sm text-muted-foreground">

                    Searching...

                </p>

            )}

            {!loading && users.length > 0 && (

                <div className="rounded-lg border divide-y">

                    {users.map((user) => (

                        <button
                            key={user.id}
                            type="button"
                            onClick={() => {

                                onSelectUser(user);

                                setKeyword("");

                                setUsers([]);

                            }}
                            className="w-full p-4 text-left hover:bg-muted transition-colors"
                        >

                            <div className="font-medium">

                                {user.name}

                            </div>

                            <div className="text-sm text-muted-foreground">

                                {user.email}

                            </div>

                        </button>

                    ))}

                </div>

            )}

        </div>

    );

}

export default UserSearch;