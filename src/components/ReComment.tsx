import { useQuery } from "@tanstack/react-query";
import { getComments } from "../apis";
import Comment from "./Comment";

interface Props {
  commentIds: number[];
  parentId?: number;
}

const ReComment = ({ commentIds, parentId }: Props) => {
  const { data: comments, isLoading } = useQuery(["reComments", parentId], () =>
    getComments(commentIds)
  );

  return (
    <>
      {comments?.map((comment) => (
        <Comment key={comment?.id} reComment={true} {...comment} exist={true} />
      ))}
    </>
  );
};
export default ReComment;
