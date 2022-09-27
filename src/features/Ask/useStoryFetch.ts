import { useQuery } from "@tanstack/react-query";
import { getAskStory } from "../../apis";

const useStoryFetch = (start: number, end: number, page: number) => {
  const { data, isLoading } = useQuery(["askStory", page], () =>
    getAskStory(start, end)
  );

  return { data, isLoading };
};
export default useStoryFetch;
