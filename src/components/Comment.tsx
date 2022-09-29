import { ReactComponent as ClockIcon } from "../assets/images/clock_icon.svg";
import { ReactComponent as UserIconBig } from "../assets/images/user_icon_big.svg";
import { FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStory } from "../apis";
import { diffTime } from "../utils/diffTime";
import ReComment from "./ReComment";

const Container = styled.div<{ reComment: boolean }>`
  padding-left: ${({ reComment }) => reComment && "10px"};
`;

const CommentContianer = styled.div<{ reComment: boolean }>`
  margin-top: 10px;
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
  comment: number;
  reComment: boolean;
}

const Comment = ({ comment, reComment }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive((prev) => !prev);
  };

  const { data: story, isLoading } = useQuery([comment], () =>
    getStory(comment!)
  );

  return (
    <>
      {!story?.deleted && (
        <Container reComment={reComment}>
          <CommentContianer reComment={reComment}>
            <CommentHeader onClick={toggleHandler}>
              <CommentInfo>
                <User>
                  <UserIconBig width="20px" height="20px" />
                  {story?.by}
                </User>
                <CreatedAt>
                  <ClockIcon width="14px" height="14px" />
                  {diffTime(story?.time!)}
                </CreatedAt>
              </CommentInfo>
              <Arrow $isActive={isActive} />
            </CommentHeader>
            {!isActive && (
              <Description
                dangerouslySetInnerHTML={{
                  __html: `${
                    story?.text ? story?.text : "[❗️ There is no text.]"
                  }`,
                }}
              />
            )}
          </CommentContianer>
          {!isActive && (
            <>{story?.kids && <ReComment comments={story?.kids} />}</>
          )}
        </Container>
      )}
      {!reComment && <Hr />}
    </>
  );
};
export default Comment;
