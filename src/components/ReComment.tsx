import Comment from "./Comment";

interface Props {
  comments: number[];
}

const ReComment = ({ comments }: Props) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment} reComment={true} />
      ))}
    </>
  );
};
export default ReComment;
