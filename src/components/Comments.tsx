import { ReactComponent as CommentIcon } from "../assets/images/comment_icon.svg";
import styled from "styled-components";
import Comment from "./Comment";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "../apis";

const Container = styled.div`
  padding: 0 20px;
`;

const CommentsNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 0;
`;

const CommentsSort = styled.div`
  display: flex;
`;

const SortBtn = styled.button<{ sort: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: ${({ sort }) => !sort && "#727272"};
`;

const Circle = styled.div<{ sort: boolean }>`
  background-color: ${({ sort }) => (sort ? "#f49664" : "#c4c4c4")};
  width: 6px;
  height: 6px;
  border-radius: 10px;
  margin-right: 4px;
`;

const Registered = styled.span``;

const Newest = styled.span``;

const CommentsValue = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #ed702d;
  > svg {
    margin-right: 5px;
  }
`;

const Comments = ({ commentIds }: { commentIds?: number[] }) => {
  const [sort, setSort] = useState(false);
  const { data: comments, isLoading } = useQuery(["comments"], () =>
    getComments(commentIds)
  );

  const arr = comments?.map((comment) => comment);

  const sortComment = arr?.sort((a, b) => {
    if (a!.time < b!.time) return 1;
    if (a!.time > b!.time) return -1;
    return 0;
  });

  const toggleHandler = () => setSort((prev) => !prev);

  return (
    <Container>
      <CommentsNav>
        <CommentsSort>
          <SortBtn onClick={toggleHandler} disabled={!sort} sort={!sort}>
            <Circle sort={!sort} />
            <Registered>Registered</Registered>
          </SortBtn>
          <SortBtn onClick={toggleHandler} disabled={sort} sort={sort}>
            <Circle sort={sort} />
            <Newest>Newest</Newest>
          </SortBtn>
        </CommentsSort>
        <CommentsValue>
          <CommentIcon width="12px" />
          {commentIds ? commentIds.length : 0}
        </CommentsValue>
      </CommentsNav>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {sort
            ? sortComment?.map((comment) => (
                <Comment key={comment?.id} {...comment} reComment={false} />
              ))
            : comments?.map((comment) => (
                <Comment key={comment?.id} {...comment} reComment={false} />
              ))}
        </>
      )}
    </Container>
  );
};
export default Comments;
