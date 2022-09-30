import styled from "styled-components";
import { ReactComponent as PointIcon } from "../../../assets/images/point_icon.svg";
import { ReactComponent as ClockIcon } from "../../../assets/images/clock_icon.svg";
import { ReactComponent as UserIcon } from "../../../assets/images/user_icon.svg";
import { ReactComponent as CommentIcon } from "../../../assets/images/comment_icon.svg";
import { diffTime } from "../../../utils/diffTime";
import domainFromUrl from "../../../utils/domainFromUrl";

const Container = styled.li`
  width: 228px;
  padding: 16px;
  box-sizing: border-box;
  background: #e2ecf0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-right: 20px;
`;

const SiteUrl = styled.span`
  font-size: 10px;
  color: #fff;
  padding: 4px 6px;
  background-color: #ed702d;
  border-radius: 50px;
`;

const Title = styled.h4`
  height: 100px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  line-height: 20px;
  margin-top: 10px;
`;

const Show = styled.span`
  color: #ed702d;
`;

const StoryInfo = styled.div`
  color: #727272;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-left: 5px;
  }
`;

const CreateAt = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  > span {
    margin-left: 5px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  color: #727272;
  svg {
    margin-right: 5px;
  }
`;

const User = styled.div`
  font-size: 12px;
  color: #727272;
  font-weight: blod;
  display: flex;
  align-items: center;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  by?: string;
  score?: number;
  title?: string;
  time?: number;
  url?: string;
  kids?: number[];
}

const Story = ({ by, score, title, time, url, kids }: Props) => {
  return (
    <Container>
      <SiteUrl>{url ? domainFromUrl(url!) : "Empty Url"}</SiteUrl>
      <Title>
        <Show>{title!.substring(0, 8)}</Show>
        {title?.substring(8)}
      </Title>
      <StoryInfo>
        <Point>
          <PointIcon />
          <span>{score}</span>
        </Point>
        <CreateAt>
          <ClockIcon />
          <span>{diffTime(time!)}</span>
        </CreateAt>
      </StoryInfo>
      <hr />
      <UserInfo>
        <User>
          <UserIcon /> {by}
        </User>
        <Comment>
          <CommentIcon /> {kids ? kids!.length : 0}
        </Comment>
      </UserInfo>
    </Container>
  );
};
export default Story;
