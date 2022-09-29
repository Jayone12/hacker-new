import { ReactComponent as CommentIcon } from "../assets/images/comment_icon.svg";
import styled from "styled-components";
import Comment from "./Comment";

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

const SortBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Circle = styled.div`
  background-color: #f49664;
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

const Comments = ({ comments }: { comments?: number[] }) => {
  return (
    <Container>
      <CommentsNav>
        <CommentsSort>
          <SortBtn>
            <Circle />
            <Registered>Registered</Registered>
          </SortBtn>
          <SortBtn>
            <Circle />
            <Newest>Newest</Newest>
          </SortBtn>
        </CommentsSort>
        <CommentsValue>
          <CommentIcon width="12px" />
          {comments ? comments.length : 0}
        </CommentsValue>
      </CommentsNav>
      {comments?.map((comment) => (
        <Comment key={comment} comment={comment} reComment={false} />
      ))}
    </Container>
  );
};
export default Comments;
