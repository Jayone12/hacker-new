import styled from "styled-components";
import { ReactComponent as UserIcon } from "../../../assets/images/user_icon.svg";
import { IStory } from "../../../types/types";

const Container = styled.li``;

const CreateAt = styled.span`
  display: inline-block;
  font-size: 10px;
  color: #4ca5c4;
  padding: 5px 6px 4px;
  background: rgba(76, 165, 196, 0.15);
  border-radius: 10px;
  margin-bottom: 10px;
`;

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

const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const UserName = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;

const Hr = styled.hr`
  border: 1px solid #b7b7b7;
  margin: 16px 0;
`;

interface Props {
  story?: IStory;
  index: number;
}

const Story = () => {
  return (
    <Container>
      <CreateAt>2 minutes ago</CreateAt>
      <StoryTitle>
        TikTok Japan pays influencers, without informing viewers, to spread
        tweet videos
      </StoryTitle>
      <User>
        <UserIcon />
        <UserName>Kristin Watson</UserName>
      </User>
      <Hr />
    </Container>
  );
};
export default Story;
