import Pagination from "../../../components/Pagination";
import StoryListLayout from "../../../components/StoryListLayout";
import usePagination from "../../../hooks/usePagination";
import { IStory } from "../../../types/types";

interface Props {
  stories?: (IStory | undefined)[];
}

const SubmissionContainer = ({ stories }: Props) => {
  const { limit, page, setPage, offset } = usePagination(1, 5);

  return (
    <>
      <ul>
        {stories?.slice(offset, offset + limit).map((story) => (
          <StoryListLayout key={story?.id} {...story} />
        ))}
      </ul>
      <Pagination
        page={page}
        setPage={setPage}
        total={Math.ceil(stories!.length / limit)}
      />
    </>
  );
};
export default SubmissionContainer;
