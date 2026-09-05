import DashboardStats from "@/components/staff/DashboardStats";
import RecentValidationCard from "@/components/staff/RecentValidationCard";

function StaffDashboard() {

    const stats = {

        validatedToday: 0,
        todayEvents: 0,
        failedScans: 0,
        lastValidation: "---",

    };

    const recentValidations = [];

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold">

                    Welcome Back 👋

                </h1>

                <p className="text-muted-foreground mt-1">

                    Here's your ticket validation activity for today.

                </p>

            </div>

            <DashboardStats

                validatedToday={stats.validatedToday}
                todayEvents={stats.todayEvents}
                failedScans={stats.failedScans}
                lastValidation={stats.lastValidation}

            />

            <RecentValidationCard

                validations={recentValidations}

            />

        </div>

    );

}

export default StaffDashboard;