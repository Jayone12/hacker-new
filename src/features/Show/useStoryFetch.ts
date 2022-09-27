import { useQuery } from "@tanstack/react-query";
import { getShowStory } from "../../apis";

const useStoryFetch = (start: number, end: number, page: number) => {
  const { data, isLoading } = useQuery(["showStory", page], () =>
    getShowStory(start, end)
  );

  return { data, isLoading };
};
export default useStoryFetch;
