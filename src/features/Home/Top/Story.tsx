import { Link } from "react-router-dom";
import styled from "styled-components";
import { IStory } from "../../../types/types";
import { diffTime } from "../../../utils/diffTime";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 14px 0;
`;

const Rank = styled.div`
  font-size: 24px;
  color: #ed702d;
  margin-right: 24px;
`;

const StoryInfo = styled.div``;

const StoryTitle = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 275px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: ${({ theme }) => theme.fontColor};
  text-overflow: ellipsis;
  overflow: hidden;
`;

const UserInfo = styled.div`
  font-size: 12px;
  color: #727272;
  margin-top: 14px;
  > span:not(:first-child) {
    margin-left: 8px;
  }
`;

const UserName = styled.span``;
const UserPoint = styled.span``;
const CreatedAt = styled.span``;

interface Props {
  title?: string;
  by?: string;
  score?: number;
  time?: number;
  url?: string;
  id?: number;
  index: number;
}

const Story = ({ title, by, score, time, url, id, index }: Props) => {
  return (
    <Container>
      <Rank>{index}</Rank>
      <StoryInfo>
        <StoryTitle>
          {url ? (
            <a href={url}>{title}</a>
          ) : (
            <Link to={`top/item/${id}`}>{title}</Link>
          )}
        </StoryTitle>
        <UserInfo>
          <UserName>{by}</UserName>
          <UserPoint>{score} point</UserPoint>
          <CreatedAt>{diffTime(time!)}</CreatedAt>
        </UserInfo>
      </StoryInfo>
    </Container>
  );
};
export default Story;
