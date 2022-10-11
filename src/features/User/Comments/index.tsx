import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSubmissions } from "../../../apis";
import usePagination from "../../../hooks/usePagination";
import Comments from "./Comments";

interface Props {
  commentIds?: number[];
}

const CommentContainer = ({ commentIds }: Props) => {
  const { name } = useParams();
  const { limit, page, setPage, offset } = usePagination(1, 5);
  const { data: comments, isLoading } = useQuery(
    ["comments", name, page],
    () => getSubmissions(commentIds!),
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

  const props = {
    page,
    setPage,
    comments,
    isLoading,
  };

  return <Comments {...props} />;
};
export default CommentContainer;
