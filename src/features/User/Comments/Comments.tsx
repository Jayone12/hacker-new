import Comment from "../../../components/Comment";
import Pagination from "../../../components/Pagination";
import { IStory } from "../../../types/types";

interface Props {
  comments?: { result: (IStory | undefined)[] | undefined; total: number };
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Comments = ({ comments, page, setPage }: Props) => {
  return (
    <>
      {comments?.result?.map((comment) => (
        <Comment
          {...comment}
          reComment={false}
          key={comment?.id}
          exist={false}
        />
      ))}

      <Pagination page={page} setPage={setPage} total={comments?.total} />
    </>
  );
};
export default Comments;
