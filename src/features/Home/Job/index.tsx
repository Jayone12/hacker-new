import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import Stories from "./Stories";

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
  height: 200px;
  overflow-x: scroll;
  padding-bottom: 10px;
`;

const JobStories = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <Link to="job">
            Today's Job <Arrow />
          </Link>
        </Title>
      </TitleContainer>
      <StoriesContainer>
        <Stories />
      </StoriesContainer>
    </Container>
  );
};
export default JobStories;
