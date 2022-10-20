import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import Skeleton from "../../../components/Skeleton";
import { IStory } from "../../../types/types";
import Stories from "./Stories";

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

const SkeletonContainer = styled.ul`
  margin-top: 20px;
  padding: 0 14px;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1), 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 50px;
`;

interface Props {
  stories?: (IStory | undefined)[];
  isLoading: boolean;
}

const JobContent = ({ stories, isLoading }: Props) => {
  return (
    <>
      <TitleContainer>
        <Title>
          <Link to="job">
            Today's Job <Arrow />
          </Link>
        </Title>
      </TitleContainer>
      <StoriesContainer>
        {isLoading ? (
          <SkeletonContainer>
            {Array(4)
              .fill(0)
              .map((skeleton, index) => (
                <Skeleton key={skeleton + index} />
              ))}
          </SkeletonContainer>
        ) : (
          <Stories stories={stories} />
        )}
      </StoriesContainer>
    </>
  );
};
export default JobContent;
