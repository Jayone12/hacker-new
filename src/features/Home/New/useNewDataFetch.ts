import { useQuery } from "@tanstack/react-query";
import { getNewStories } from "../../../apis";

const useNewDataFetch = () => {
  const { data, isLoading, refetch } = useQuery(["new"], getNewStories, {
    refetchInterval: false,
  });

  return { isLoading, data, refetch };
};
export default useNewDataFetch;
