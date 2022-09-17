import styled from "styled-components";
import { IStory } from "../../../types/types";

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
  story?: IStory;
  index: number;
}

const Story = ({ story, index }: Props) => {
  return (
    <Container>
      <Rank>{index + 1}</Rank>
      <StoryInfo>
        <StoryTitle>{story?.title}</StoryTitle>
        <UserInfo>
          <UserName>{story?.by}</UserName>
          <UserPoint>{story?.score} point</UserPoint>
          <CreatedAt>2 minutes ago</CreatedAt>
        </UserInfo>
      </StoryInfo>
    </Container>
  );
};
export default Story;
