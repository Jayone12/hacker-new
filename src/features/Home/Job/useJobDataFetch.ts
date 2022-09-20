import { useQuery } from "@tanstack/react-query";
import { getJobStories } from "../../../apis";

const useJobDataFetch = () => {
  const { data, isLoading, refetch } = useQuery(["job"], getJobStories, {
    refetchInterval: false,
  });

  return { isLoading, data, refetch };
};
export default useJobDataFetch;
