import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import BorderLine from "../../../components/BorderLine";
import Users from "./Users";

const Container = styled.div`
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
  padding: 0 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.004px;
`;

const StoriesContainer = styled.div`
  position: relative;
  height: 222px;
  overflow-x: scroll;
  padding-bottom: 10px;
`;

const TodayUsers = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          Today's User <Arrow />
        </Title>
      </TitleContainer>
      <StoriesContainer>
        <Users />
      </StoriesContainer>
      <BorderLine />
    </Container>
  );
};
export default TodayUsers;
