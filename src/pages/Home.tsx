import Banner from "../components/Banner";
import AskStories from "../features/Home/Ask";
import JobStories from "../features/Home/Job";
import NewStories from "../features/Home/New";
import ShowStories from "../features/Home/Show";
import TopStories from "../features/Home/Top";
import TodayUsers from "../features/Home/User";
import banner from "../assets/images/home_banner.png";

const Home = () => {
  return (
    <section>
      <Banner src={banner} alt="Use hacker News! For your Hacker Effect!" />
      <TopStories />
      <NewStories />
      <TodayUsers />
      <ShowStories />
      <AskStories />
      <JobStories />
    </section>
  );
};
export default Home;
