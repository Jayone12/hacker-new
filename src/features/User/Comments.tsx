import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSubmissions } from "../../apis";
import Comment from "../../components/Comment";
import usePagination from "../../hooks/usePagination";

interface Props {
  ids?: number[];
}

const Comments = ({ ids }: Props) => {
  const { name } = useParams();
  const { limit, page, setPage, offset } = usePagination(1, 5);
  const { data: comments, isLoading } = useQuery(
    ["comments", name, page],
    () => getSubmissions(ids!),
    {
      select: (comments) => {
        const storyFilter = comments?.filter(
          (comment) => comment?.type === "comment" && !comment?.deleted
        );
        const result = storyFilter?.slice(offset, offset + limit);
        const total = Math.ceil(storyFilter!.length / limit);
        return { result, total };
      },
    }
  );
  return (
    <ul>
      {comments?.result?.map((comment) => (
        // <li>{comment?.text}</li>
        <Comment {...comment} reComment={false} key={comment?.id} />
      ))}
    </ul>
  );
};
export default Comments;
