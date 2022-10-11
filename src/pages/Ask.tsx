import AskBanner from "../assets/images/ask_banner.png";
import Pagination from "../components/Pagination";
import Stories from "../features/Ask/Stories";
import Banner from "../components/Banner";
import useStoryFetch from "../hooks/useStoryFetch";
import AskContainer from "../features/Ask";

const Ask = () => {
  const { data: stories, isLoading, page, setPage } = useStoryFetch("ask");
  const props = {
    stories,
    isLoading,
    page,
    setPage,
  };

  return <AskContainer {...props} />;
};
export default Ask;
