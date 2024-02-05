import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

const useCheckin = () => {
  const queryClient = useQueryClient();

  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked in successfully`);
      queryClient.invalidateQueries({ ative: true });
    },
    onError: (error) => {
      toast.error("There was an error while checking in");
    },
  });

  return { checkin, isCheckingIn };
};

export default useCheckin;
