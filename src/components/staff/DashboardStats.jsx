import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function DashboardStats({

    validatedToday,
    todayEvents,
    failedScans,
    lastValidation,

}) {

    const stats = [

        {
            title: "Tickets Validated",
            value: validatedToday,
        },

        {
            title: "Today's Events",
            value: todayEvents,
        },

        {
            title: "Failed Scans",
            value: failedScans,
        },

        {
            title: "Last Validation",
            value: lastValidation,
        },

    ];

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => (

                <Card key={item.title}>

                    <CardHeader>

                        <CardTitle>

                            {item.title}

                        </CardTitle>

                    </CardHeader>

                    <CardContent>

                        <p className="text-4xl font-bold">

                            {item.value}

                        </p>

                    </CardContent>

                </Card>

            ))}

        </div>

    );

}

export default DashboardStats;