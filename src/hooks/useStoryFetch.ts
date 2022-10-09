import { useQuery } from "@tanstack/react-query";
import { getAskStory, getStories } from "../apis";
import usePagination from "./usePagination";

const useStoryFetch = (story: string) => {
  const { limit, page, setPage, offset } = usePagination(1, 10);

  const { data, isLoading } = useQuery([story, page], () =>
    getStories(story, offset, offset + limit)
  );

  return { data, isLoading, page, setPage };
};
export default useStoryFetch;
