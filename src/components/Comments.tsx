import { ReactComponent as CommentIcon } from "../assets/images/comment_icon.svg";
import styled from "styled-components";
import Comment from "./Comment";
import { useParams } from "react-router";

const Container = styled.div`
  padding: 0 10px;
`;

const CommentsNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
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

const Comments = () => {
  const { id } = useParams();

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
          240
        </CommentsValue>
      </CommentsNav>
      <Comment />
    </Container>
  );
};
export default Comments;
