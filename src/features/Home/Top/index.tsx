import useTopDataFetch from "../../../features/Home/Top/useTopDataFetch";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import { ReactComponent as Clock } from "../../../assets/images/clock_icon.svg";
import Carousel from "../../../components/Carousel";
import Stories from "../../../features/Home/Top/Stories";
import { useEffect, useState } from "react";

const TopStoriesContainer = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;
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
  padding-bottom: 10px;
`;

const TopStories = () => {
  const { isLoading, data } = useTopDataFetch();

  const [refreshTime, setRefreshTime] = useState("00");
  const getRefreshHour = () => {
    setRefreshTime(new Date().getHours() + "");
    setInterval(() => {
      const time = new Date();
      const hour = time.getHours();
      const minutes = time.getSeconds();
      if (minutes === 0) {
        if (hour < 10) {
          setRefreshTime("0" + hour);
        } else {
          setRefreshTime(hour + "");
        }
      }
    }, 1000);
  };

  useEffect(() => {
    getRefreshHour();
  }, []);

  return (
    <TopStoriesContainer>
      <TitleContainer>
        <Title>
          Today's Top <Arrow />
        </Title>
        <Refresh>
          <Clock />
          <span>{refreshTime}:00</span>
        </Refresh>
      </TitleContainer>
      <StoriesContainer>
        {!isLoading ? (
          <Carousel>
            <Stories stories={data?.slice(0, 5)} />
            <Stories stories={data?.slice(5, 10)} />
            <Stories stories={data?.slice(10, 15)} />
          </Carousel>
        ) : (
          <span>Loding...</span>
        )}
      </StoriesContainer>
    </TopStoriesContainer>
  );
};
export default TopStories;
