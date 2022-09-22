import styled from "styled-components";
import { ReactComponent as UserIcon } from "../assets/images/user_icon.svg";
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
`;

const CreatedAt = styled.div`
  margin-left: 10px;
`;

interface Props {
  by?: string;
  title?: string;
  score?: number;
  time?: number;
}

const StoryListLayout = ({ by, title, score, time }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <StoryInfo>
        <User>
          <UserIcon /> {by}
        </User>
        <Score>{score} points</Score>
        <CreatedAt>{diffTime(time!)}</CreatedAt>
      </StoryInfo>
    </Container>
  );
};

export default StoryListLayout;
