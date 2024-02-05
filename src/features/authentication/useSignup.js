import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useSignup = () => {
  const queryClient = useQueryClient();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Please verify the new account from the user's email address."
      );
    },
    onError: (error) => {
      toast.error(error.message);
      queryClient.invalidateQueries({ active: true });
    },
  });

  return { signup, isLoading };
};
