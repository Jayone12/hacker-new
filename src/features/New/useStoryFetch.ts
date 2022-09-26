import { useQuery } from "@tanstack/react-query";
import { getNewStory } from "../../apis";

const useStoryFetch = (start: number, end: number, page: number) => {
  const { data, isLoading } = useQuery(["newStory", page], () =>
    getNewStory(start, end)
  );

  return { data, isLoading };
};
export default useStoryFetch;
