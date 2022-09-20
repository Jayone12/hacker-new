import styled from "styled-components";
import banner from "../assets/images/home_banner.png";
import AskStories from "../features/Home/Ask";
import JobStories from "../features/Home/Job";
import NewStories from "../features/Home/New";
import ShowStories from "../features/Home/Show";
import TopStories from "../features/Home/Top";
import TodayUsers from "../features/Home/User";

const Container = styled.section``;

const Banner = styled.img`
  width: 390px;
  height: 240px;
  margin-top: 2px;
`;

const Home = () => {
  return (
    <Container>
      <Banner src={banner} alt="" />
      <TopStories />
      <NewStories />
      <TodayUsers />
      <ShowStories />
      <AskStories />
      <JobStories />
    </Container>
  );
};
export default Home;
