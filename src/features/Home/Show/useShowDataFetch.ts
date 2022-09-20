import { useQuery } from "@tanstack/react-query";
import { getShowStories } from "../../../apis";

const useShowDataFetch = () => {
  const { data, isLoading, refetch } = useQuery(["show"], getShowStories, {
    refetchInterval: false,
  });

  return { isLoading, data, refetch };
};
export default useShowDataFetch;
