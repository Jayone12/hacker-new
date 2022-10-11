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
