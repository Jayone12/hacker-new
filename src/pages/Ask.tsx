import AskBanner from "../assets/images/ask_banner.png";
import Pagination from "../components/Pagination";
import Stories from "../features/Ask/Stories";
import Banner from "../components/Banner";
import useStoryFetch from "../hooks/useStoryFetch";

const Ask = () => {
  const { data: stories, isLoading, page, setPage } = useStoryFetch("ask");

  return (
    <section>
      <Banner src={AskBanner} alt="We're here!" />
      <>
        {isLoading ? <span>Loading...</span> : <Stories stories={stories} />}
        <Pagination page={page} setPage={setPage} />
      </>
    </section>
  );
};
export default Ask;
