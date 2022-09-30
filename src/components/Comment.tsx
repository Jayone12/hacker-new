import { ReactComponent as ClockIcon } from "../assets/images/clock_icon.svg";
import { ReactComponent as UserIcon } from "../assets/images/user_icon.svg";
import { FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { useState } from "react";
import { diffTime } from "../utils/diffTime";
import ReComment from "./ReComment";

const Container = styled.div<{ reComment: boolean }>`
  padding-left: ${({ reComment }) => reComment && "10px"};
`;

const CommentContianer = styled.div<{ reComment: boolean }>`
  margin-bottom: 10px;
  padding-left: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.reComment && `${props.theme.commentBg}`};
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 20px 0;
  padding-right: 10px;
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  > svg {
    margin-right: 5px;
  }
`;

const CreatedAt = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 10px;
  color: #b7b7b7;
  > svg {
    margin-right: 5px;
  }
`;

const Arrow = styled(FiChevronUp)<{ $isActive: boolean }>`
  transform: ${({ $isActive }) => $isActive && "rotate(-180deg)"};
  transition: all 0.2s ease-in-out;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  word-break: break-all;
  a {
    text-decoration: underline;
  }
`;

const Hr = styled.hr`
  border-color: #b7b7b7;
`;

interface Props {
  reComment: boolean;
  deleted?: boolean;
  by?: string;
  time?: number;
  text?: string;
  kids?: number[];
  id?: number;
}

const Comment = ({ reComment, deleted, by, time, text, kids, id }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      {!deleted && (
        <Container reComment={reComment}>
          <CommentContianer reComment={reComment}>
            <CommentHeader onClick={toggleHandler}>
              <CommentInfo>
                <User>
                  <UserIcon width="20px" height="20px" />
                  {by}
                </User>
                <CreatedAt>
                  <ClockIcon width="14px" height="14px" />
                  {diffTime(time!)}
                </CreatedAt>
              </CommentInfo>
              <Arrow $isActive={isActive} />
            </CommentHeader>
            {!isActive && (
              <Description
                dangerouslySetInnerHTML={{
                  __html: `${text ? text : "[❗️ There is no text.]"}`,
                }}
              />
            )}
          </CommentContianer>
          {!isActive && (
            <>{kids && <ReComment commentIds={kids} parentId={id} />}</>
          )}
          {!reComment && <Hr />}
        </Container>
      )}
    </>
  );
};
export default Comment;
