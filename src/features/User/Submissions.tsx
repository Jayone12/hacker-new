import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSubmissions } from "../../apis";
import Pagination from "../../components/Pagination";
import StoryListLayout from "../../components/StoryListLayout";
import usePagination from "../../hooks/usePagination";

interface Props {
  ids?: number[];
}

const Submissions = ({ ids }: Props) => {
  const { name } = useParams();
  const { limit, page, setPage, offset } = usePagination(1, 5);
  const { data: submissions, isLoading } = useQuery(
    ["submission", name, page],
    () => getSubmissions(ids!),
    {
      select: (submissions) => {
        const storyFilter = submissions?.filter(
          (submission) => submission?.type === "story" && !submission?.deleted
        );
        const result = storyFilter?.slice(offset, offset + limit);
        const total = Math.ceil(storyFilter!.length / limit);
        return { result, total };
      },
    }
  );

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <ul>
          {submissions?.result?.map((submission) => (
            <StoryListLayout key={submission?.id} {...submission} />
          ))}
        </ul>
      )}
      <Pagination page={page} setPage={setPage} total={submissions?.total} />
    </>
  );
};
export default Submissions;
