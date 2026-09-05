import { Button } from "@/components/ui/button";

function EventActions({

  eventId,
  loading,
  onEdit,
  onDelete,

}) {

  return (

    <div className="flex justify-end gap-4">

      <Button
        variant="outline"
        onClick={() => onEdit(eventId)}
      >
        Edit Event
      </Button>

      <Button
        variant="destructive"
        disabled={loading}
        onClick={() => onDelete(eventId)}
      >
        {loading ? "Deleting..." : "Delete Event"}
      </Button>

    </div>

  );

}

export default EventActions;