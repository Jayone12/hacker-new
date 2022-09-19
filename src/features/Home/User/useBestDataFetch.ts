import { useQuery } from "@tanstack/react-query";
import { getBestUsers } from "../../../apis";

const useBestDataFetch = () => {
  const { data, isLoading, refetch } = useQuery(["best"], getBestUsers, {
    refetchInterval: false,
  });

  return { isLoading, data, refetch };
};
export default useBestDataFetch;
