import styled from "styled-components";
import { ReactComponent as UserIcon } from "../assets/images/user_icon.svg";
import { ReactComponent as CommentIcon } from "../assets/images/comment_icon.svg";
import { diffTime } from "../utils/diffTime";
import domainFromUrl from "../utils/domainFromUrl";
import { Link, useLocation } from "react-router-dom";

const Container = styled.li`
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 14px;
  margin-top: 20px;
`;

const Url = styled.span`
  font-size: 10px;
  color: #ed702d;
  padding: 3px 5px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.tagBg};
`;

const Title = styled.h4`
  margin-top: 10px;
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
  url?: string;
  id?: number;
}

const StoryListLayout = ({ by, title, score, time, kids, url, id }: Props) => {
  const { pathname } = useLocation();

  return (
    <Container>
      {url && <Url>{domainFromUrl(url!)}</Url>}
      <Title>
        {url ? (
          <a href={url}>{title}</a>
        ) : (
          <Link to={`${pathname.match(/\/+[\w\s]+/)}/item/${id}`}>{title}</Link>
        )}
      </Title>
      <StoryInfo>
        <User>
          <UserIcon />
          <Link to={`/user/${by}/submissions`}>{by}</Link>
        </User>
        <Score>{score} points</Score>
        <CreatedAt>{diffTime(time!)}</CreatedAt>
        <Comment>
          <CommentIcon />
          {kids ? (
            <Link to={`${pathname.match(/\/+[\w\s]+/)}/item/${id}`}>
              {kids!.length}
            </Link>
          ) : (
            0
          )}
        </Comment>
      </StoryInfo>
    </Container>
  );
};

export default StoryListLayout;
