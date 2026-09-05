import staffApi from "@/api/staffApi";
import { useNavigate } from "react-router-dom";
import StaffForm from "@/components/organizer/StaffForm";


function CreateStaff(){

    const navigate = useNavigate();
    const handleSubmit = async(data) => {

        try {
            await staffApi.createStaff(data);
            alert("Staff created successfully.");
            navigate("/organizer/staff");
        }
        catch(error){
            console.log(error);
            alert(
                 error.response?.data?.message ??
                "Failed to create staff."
            );
        }

    };
    return(
        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold">

                    Create Staff

                </h1>

                <p className="text-muted-foreground">

                    Add a new staff member to help manage your events.

                </p>

            </div>

            <StaffForm
               onSubmit = {handleSubmit}
            />

        </div>
    );
}

export default CreateStaff;