import { useQuery } from "@tanstack/react-query";
import { getAskStories } from "../../../apis";

const useAskDataFetch = () => {
  const { data, isLoading, refetch } = useQuery(["ask"], getAskStories, {
    refetchInterval: false,
  });

  return { isLoading, data, refetch };
};
export default useAskDataFetch;
