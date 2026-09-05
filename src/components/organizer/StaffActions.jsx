import { Button } from "../ui/button";

function StaffActions({
    staffId,onDelete
}) {
    return (
         <div className="flex justify-end w-full">

            <Button
              variant="destructive"
              onClick = {() => onDelete(staffId) }
            >
                
                Delete

            </Button>

         </div>
    );
}

export default StaffActions;