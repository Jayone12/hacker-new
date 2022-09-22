import styled from "styled-components";
import { ReactComponent as UserIcon } from "../assets/images/user_icon.svg";
import { ReactComponent as CommentIcon } from "../assets/images/comment_icon.svg";
import { diffTime } from "../utils/diffTime";

const Container = styled.li`
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 14px;
  margin-top: 20px;
`;

const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.fontColor};
  line-height: 24px;
`;

const StoryInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 20px;
  position: relative;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  > svg {
    margin-right: 5px;
  }
`;

const Score = styled.div`
  margin-left: 10px;
  color: #949494;
`;

const CreatedAt = styled.div`
  margin-left: 10px;
  color: #949494;
`;

const Comment = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  color: #ed702d;
  svg {
    width: 12px;
    margin-right: 5px;
  }
`;

interface Props {
  by?: string;
  title?: string;
  score?: number;
  time?: number;
  kids?: number[];
}

const StoryListLayout = ({ by, title, score, time, kids }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <StoryInfo>
        <User>
          <UserIcon /> {by}
        </User>
        <Score>{score} points</Score>
        <CreatedAt>{diffTime(time!)}</CreatedAt>
        <Comment>
          <CommentIcon />
          {kids ? <>{kids!.length}</> : 0}
        </Comment>
      </StoryInfo>
    </Container>
  );
};

export default StoryListLayout;
