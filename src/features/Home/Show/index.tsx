import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import { ReactComponent as Update } from "../../../assets/images/update_icon.svg";
import BorderLine from "../../../components/BorderLine";
import Stories from "./Stories";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStories } from "../../../apis";

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

const Refresh = styled.div`
  display: flex;
  align-items: center;
`;

const StoriesContainer = styled.div`
  position: relative;
  height: 222px;
  overflow-x: scroll;
  padding-bottom: 10px;
  height: 300px;
`;

const ShowStories = () => {
  const {
    data: stories,
    isLoading,
    refetch,
  } = useQuery(["home", "show"], () => getStories("show", 0, 5));

  return (
    <Container>
      <TitleContainer>
        <Title>
          <Link to="/show">
            Today's Show <Arrow />
          </Link>
        </Title>
        <Refresh>
          <button onClick={() => refetch()}>
            <Update />
          </button>
        </Refresh>
      </TitleContainer>
      <StoriesContainer>
        {isLoading ? <span>Loading</span> : <Stories stories={stories} />}
      </StoriesContainer>
      <BorderLine />
    </Container>
  );
};
export default ShowStories;
