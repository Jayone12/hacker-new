import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import { ReactComponent as Clock } from "../../../assets/images/clock_icon.svg";
import Carousel from "../../../components/Carousel";
import Stories from "./Stories";
import BorderLine from "../../../components/BorderLine";
import { IStory } from "../../../types/types";
import Skeleton from "../../../components/Skeleton";

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
  padding-bottom: 10px;
  margin-bottom: 50px;
`;

const SkeletonContainer = styled.ul`
  width: 350px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 0 14px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1), 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

interface Props {
  refreshTime: string;
  isLoading: boolean;
  data?: (IStory | undefined)[];
}

const TopContent = ({ refreshTime, isLoading, data }: Props) => {
  return (
    <>
      <TitleContainer>
        <Title>
          <Link to="/top">
            Today's Top <Arrow />
          </Link>
        </Title>
        <Refresh>
          <Clock />
          <span>{refreshTime}:00</span>
        </Refresh>
      </TitleContainer>
      <StoriesContainer>
        {!isLoading ? (
          <Carousel>
            <Stories stories={data?.slice(0, 5)} rank={1} />
            <Stories stories={data?.slice(5, 10)} rank={6} />
            <Stories stories={data?.slice(10, 15)} rank={11} />
          </Carousel>
        ) : (
          <SkeletonContainer>
            {Array(5)
              .fill(0)
              .map((skeleton) => (
                <Skeleton key={skeleton} />
              ))}
          </SkeletonContainer>
        )}
      </StoriesContainer>
      <BorderLine />
    </>
  );
};
export default TopContent;
