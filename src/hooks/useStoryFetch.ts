import { useQuery } from "@tanstack/react-query";
import { getTopStory } from "../apis";

const useStoryFetch = (start: number, end: number, page: number) => {
  const { data, isLoading } = useQuery(["topStory", page], () =>
    getTopStory(start, end)
  );

  return { data, isLoading };
};
export default useStoryFetch;
