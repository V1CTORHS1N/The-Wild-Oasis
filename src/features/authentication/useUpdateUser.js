import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("Current user updated successfully");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isUpdating, updateUser };
}
