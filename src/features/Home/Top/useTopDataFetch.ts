import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTopStories } from "../../../apis";

const useTopDataFetch = () => {
  const { data, isLoading } = useQuery(["top"], getTopStories, {
    refetchInterval: false,
  });

  return { isLoading, data };
};
export default useTopDataFetch;
