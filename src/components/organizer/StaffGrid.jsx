import StaffCard from "./StaffCard";
import EmptyStaff from "./EmptyStaff";


function StaffGrid({
    staff,loading,
    error,onDelete
    
}) {

    if(loading){

        return (
             <div className="text-center py-20">

                Loading Staff...

            </div>

        );
    }

    if(error){

        return(
             <div className="text-center py-20 text-red-500">

                {error}

            </div>
        );
    }

    if(staff.lenght === 0){
        return <EmptyStaff/>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">


            {staff.map((member) => (

                <StaffCard
                    key={member.id}
                    staff={member}
                    onDelete={onDelete}
                />

            ))}
        </div>
    );
}

export default StaffGrid;