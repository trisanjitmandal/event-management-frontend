import { useEffect, useState } from "react";
import { getMyProfile } from "@/api/userApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, User, Shield, Calendar } from "lucide-react";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getMyProfile();
                setProfile(data);
            } catch (err) {
                console.error("Failed to fetch profile:", err);
                setError("Failed to load profile");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-10">
                <Loader2 className="h-6 w-6 animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 py-10">
                {error}
            </div>
        );
    }

    return (
        <Card className="max-w-2xl">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">

                {/* Name */}
                <div className="flex items-center gap-4">
                    <User className="h-5 w-5 text-muted-foreground" />

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Name
                        </p>
                        <p className="font-medium">
                            {profile.name}
                        </p>
                    </div>
                </div>

                {/* Role */}
                <div className="flex items-center gap-4">
                    <Shield className="h-5 w-5 text-muted-foreground" />

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Role
                        </p>
                        <p className="font-medium">
                            {profile.role}
                        </p>
                    </div>
                </div>

                {/* Account Created */}
                <div className="flex items-center gap-4">
                    <Calendar className="h-5 w-5 text-muted-foreground" />

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Account Created
                        </p>
                        <p className="font-medium">
                            {new Date(profile.createdAt).toLocaleDateString(
                                "en-IN",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </p>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
};

export default Profile;