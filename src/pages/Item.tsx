import { useParams } from "react-router";
import styled from "styled-components";
import BorderLine from "../components/BorderLine";
import { ReactComponent as UserIcon } from "../assets/images/user_icon.svg";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import { getStory } from "../apis";

const Container = styled.div`
  position: relative;
  padding-bottom: 20px;
  margin-top: 2px;
`;

const Content = styled.div`
  padding: 0 20px;
`;

const UserInfo = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #727272;
`;

const Username = styled.div`
  font-size: 18px;
`;

const StoryInfo = styled.div`
  font-size: 12px;
  color: #949494;
  margin-top: 4px;
`;

const Point = styled.span``;

const CreatedAt = styled.span``;

const Title = styled.h4`
  font-size: 22px;
  line-height: 26px;
  margin-top: 20px;
`;

const Ask = styled.span`
  color: #ed702d;
`;

const Description = styled.p`
  font-size: 18px;
  padding: 20px 0;
  line-height: 24px;
  word-break: break-all;
  color: #727272;
`;

const Hr = styled.hr`
  border-color: #b7b7b7;
`;

const Item = () => {
  const { id } = useParams();
  const { data: story, isLoading } = useQuery([id], () => getStory(id!));

  return (
    <Container>
      <Content>
        <UserInfo>
          <UserIcon width="35px" height="35px" />
          <div style={{ marginLeft: "10px" }}>
            <Username>{story?.by}</Username>
            <StoryInfo>
              <Point>97 posints</Point> • <CreatedAt>9 hours ago</CreatedAt>
            </StoryInfo>
          </div>
        </UserInfo>
        <Title>
          <Ask>{story?.title.match(/[\w\s]+\:/)}</Ask>
          {story?.title.replace(/[\w\s]+\:/, "")}
        </Title>
        <Description
          dangerouslySetInnerHTML={
            story?.text ? { __html: `${story?.text}` } : { __html: `` }
          }
        />
      </Content>
      <BorderLine />
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <Comments commentIds={story?.kids} />
      )}
    </Container>
  );
};
export default Item;
