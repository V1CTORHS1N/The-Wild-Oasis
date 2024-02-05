import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking(bookingId) {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success(`Booking #${bookingId} successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error(`There was an error while deleting booking #${bookingId}`);
    },
  });

  return { deleteBooking, isDeletingBooking };
}

export default useDeleteBooking;
