import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

const useSettings = () => {
  const {
    isPending: isLoading,
    error,
    data: settings,
  } = useQuery({ queryKey: ["settings"], queryFn: getSettings });

  return { isLoading, error, settings };
};

export default useSettings;
