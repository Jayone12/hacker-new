import { useParams } from "react-router";
import styled from "styled-components";
import BorderLine from "../components/BorderLine";
import { ReactComponent as UserIconBig } from "../assets/images/user_icon_big.svg";
import Comments from "../components/Comments";

const Container = styled.div`
  position: relative;
  padding-bottom: 20px;
  border-top: 1px solid #727272;
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

const Description = styled.p`
  font-size: 18px;
  padding: 20px 0;
  line-height: 24px;
`;

const Hr = styled.hr`
  border-color: #b7b7b7;
`;

const Item = () => {
  const { id } = useParams();

  return (
    <Container>
      <Content>
        <UserInfo>
          <UserIconBig />
          <div style={{ marginLeft: "10px" }}>
            <Username>tekno45</Username>
            <StoryInfo>
              <Point>97 posints</Point> • <CreatedAt>9 hours ago</CreatedAt>
            </StoryInfo>
          </div>
        </UserInfo>
        <Title>
          Ask HN: Has anyone gone from software to physical engineering?
        </Title>
        <Description>
          Im feeling burned out and getting interested in machining, materials
          science and engineering outside of code. Anyone else done this?
          Thinking of going to school full time to see it through. FYI: I do not
          have any schooling past highschool. I got really lucky and ended up an
          SRE after working my way off the helpdesk.
        </Description>
      </Content>
      <BorderLine />
      <Comments />
    </Container>
  );
};
export default Item;
