import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSubmissions } from "../../../apis";
import Pagination from "../../../components/Pagination";
import StoryListLayout from "../../../components/StoryListLayout";
import usePagination from "../../../hooks/usePagination";
import { IStory } from "../../../types/types";

interface Props {
  submissions?: {
    result: (IStory | undefined)[] | undefined;
    total: number;
  };
  isLoading: boolean;
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
}

const Submissions = ({ submissions, isLoading, page, setPage }: Props) => {
  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        // <ul>
        //   {submissions?.result?.map((submission) => (
        //     <StoryListLayout key={submission?.id} {...submission} />
        //   ))}
        // </ul>
        <span></span>
      )}
      {/* <Pagination page={page} setPage={setPage} total={submissions?.total} /> */}
    </>
  );
};
export default Submissions;
