import { useQuery } from "@tanstack/react-query";
import { getStories } from "../apis";
import usePagination from "./usePagination";

const useStoryFetch = (story: string) => {
  const { limit, page, setPage, offset } = usePagination(1, 10);

  const { data, isLoading } = useQuery([story], () => getStories(story), {
    select: (data) => {
      const stories = data?.slice(offset, offset + limit);
      const total = Math.ceil(data!.length / limit);
      return { stories, total };
    },
  });

  return { data, isLoading, page, setPage };
};
export default useStoryFetch;
