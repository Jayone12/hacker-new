import styled from "styled-components";
import { ReactComponent as UserIcon } from "../assets/images/user_icon.svg";
import { ReactComponent as PointIcon } from "../assets/images/point_icon.svg";
import { ReactComponent as ClockIcon } from "../assets/images/clock_icon.svg";
import { ReactComponent as CommentIcon } from "../assets/images/comment_icon.svg";
import { diffTime } from "../utils/diffTime";
import domainFromUrl from "../utils/domainFromUrl";

const Container = styled.li`
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 16px 12px 14px;
  margin-top: 20px;
`;

const Url = styled.span`
  font-size: 10px;
  color: #ed702d;
  padding: 3px 5px;
  border-radius: 20px;
  background-color: #fff;
`;

const Title = styled.h4`
  height: 40px;
  margin-top: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.fontColor};
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StoryInfo = styled.div`
  font-size: 12px;
  margin-top: 20px;
  color: #949494;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 5px;
  color: ${({ theme }) => theme.fontColor};
  > svg {
    margin-right: 5px;
    color: ${({ theme }) => theme.fontColor};
  }
`;

const Score = styled.span`
  vertical-align: middle;
  > svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const CreatedAt = styled.span`
  margin-left: 10px;
  vertical-align: middle;
  > svg {
    width: 14px;
    margin-right: 5px;
    vertical-align: middle;
  }
`;

const Comment = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
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
  url?: string;
  kids?: number[];
}

const StoryGridLayout = ({ by, title, score, time, url, kids }: Props) => {
  return (
    <Container>
      {url ? <Url>{domainFromUrl(url!)}</Url> : <Url>Empty</Url>}
      <Title>{title}</Title>
      <StoryInfo>
        <Score>
          <PointIcon />
          {score}
        </Score>
        <CreatedAt>
          <ClockIcon />
          {diffTime(time!)}
        </CreatedAt>
      </StoryInfo>
      <UserContainer>
        <User>
          <UserIcon /> {by}
        </User>
        <Comment>
          <CommentIcon />
          {kids ? <>{kids!.length}</> : 0}
        </Comment>
      </UserContainer>
    </Container>
  );
};

export default StoryGridLayout;
