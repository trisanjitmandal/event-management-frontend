

function EmptyStaff() {

    return (

         <div className="flex flex-col items-center justify-center py-20">

            <Users className="h-16 w-16 text-muted-foreground" />

            <h2 className="mt-4 text-2xl font-semibold">

                No Staff Found

            </h2>

            <p className="text-muted-foreground">

                Create your first staff member.

            </p>

        </div>

    );
}

export default EmptyStaff;