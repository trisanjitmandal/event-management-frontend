import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import staffApi from "@/api/staffApi";
import StaffGrid from "@/components/organizer/StaffGrid";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";


function StaffManagement() {

    const navigate = useNavigate();

    const[staff , setStaff] = useState([]);
    const[loading , setLoading] = useState(true);
    const[error , setError] = useState("");

    useEffect(() => {
    fetchStaff();
    },[])

    const fetchStaff = async () => {

        try{
            setLoading(true);
            const response = await staffApi.getAllStaff();
            console.log(response.data);
            setStaff(response.data);
        }
        catch(error){
            console.log(error);
            setError("Failed to load staff.");
        }
        finally{
            setLoading(false);
        }
    }




    const handleDelete = async(id) => {

        if(!window.confirm("Delete this staff member?")){
            return;
        }

        try{
            await staffApi.deleteStaff(id);
            fetchStaff();
        }

        catch(error){
            console.log(error);
             alert("Failed to delete staff.");
        }
    };

    return (

         <div className="space-y-6">

        <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">

                        Staff Management

                    </h1>

                    <p className="text-muted-foreground">

                        Manage all staff members.

                    </p>

                </div>

                <Button

                    onClick={() =>
                        navigate("/organizer/create-staff")
                    }

                >

                    <Plus className="mr-2 h-4 w-4" />

                    Create Staff

                </Button>

            </div>

        
        <StaffGrid
           staff = {staff}
           loading = {loading}
           error = {error}
           onDelete = {handleDelete}
        />

        </div>
    );
}

export default StaffManagement;