import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getNewStories } from "../../../apis";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import { ReactComponent as Update } from "../../../assets/images/update_icon.svg";
import BorderLine from "../../../components/BorderLine";
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

const Refresh = styled.div`
  display: flex;
  align-items: center;
`;

const StoriesContainer = styled.div`
  position: relative;
  padding: 0 20px;
  padding-bottom: 10px;
`;

const NewStories = () => {
  const { data, isLoading, refetch } = useQuery(["new"], getNewStories, {
    refetchInterval: false,
  });

  return (
    <Container>
      <TitleContainer>
        <Title>
          <Link to="/new">
            Today's New <Arrow />
          </Link>
        </Title>
        <Refresh>
          <button onClick={() => refetch()}>
            <Update />
          </button>
        </Refresh>
      </TitleContainer>
      <StoriesContainer>
        {isLoading ? <span>Loading...</span> : <Stories stories={data} />}
      </StoriesContainer>
      <BorderLine />
    </Container>
  );
};
export default NewStories;
