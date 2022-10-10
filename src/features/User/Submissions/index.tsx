import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSubmissions } from "../../../apis";
import usePagination from "../../../hooks/usePagination";
import Submissions from "./Submission";

interface Props {
  ids?: number[];
}

const SubmissionContainer = ({ ids }: Props) => {
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

  const props = {
    submissions,
    isLoading,
    limit,
    page,
    setPage,
    offset,
  };

  return <Submissions {...props} />;
};
export default SubmissionContainer;
