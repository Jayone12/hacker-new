import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import { ReactComponent as Clock } from "../../../assets/images/clock_icon.svg";
import Carousel from "../../../components/Carousel";
import Stories from "../../../features/Home/Top/Stories";
import { useEffect, useState } from "react";
import BorderLine from "../../../components/BorderLine";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStories } from "../../../apis";

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

const TopStories = () => {
  const { data, isLoading } = useQuery(["top"], () => getStories("top", 0, 15));
  const [refreshTime, setRefreshTime] = useState("");

  useEffect(() => {
    setRefreshTime(new Date().getHours() + "");
    const getHour = setInterval(() => {
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

    return () => {
      clearInterval(getHour);
    };
  }, []);

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
          <span>Loding...</span>
        )}
      </StoriesContainer>
      <BorderLine />
    </>
  );
};
export default TopStories;
