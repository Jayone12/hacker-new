import Comment from "../../../components/Comment";
import Pagination from "../../../components/Pagination";
import usePagination from "../../../hooks/usePagination";
import { IStory } from "../../../types/types";

interface Props {
  comments?: (IStory | undefined)[];
}

const CommentContainer = ({ comments }: Props) => {
  const { limit, page, setPage, offset } = usePagination(1, 5);

  return (
    <>
      {comments?.slice(offset, offset + limit).map((comment) => (
        <Comment
          {...comment}
          reComment={false}
          key={comment?.id}
          exist={false}
        />
      ))}

      <Pagination
        page={page}
        setPage={setPage}
        total={Math.ceil(comments!.length / limit)}
      />
    </>
  );
};
export default CommentContainer;
