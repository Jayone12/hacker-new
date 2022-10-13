import useStoryFetch from "../hooks/useStoryFetch";
import AskContainer from "../features/Ask";

const Ask = () => {
  const { data, isLoading, page, setPage } = useStoryFetch("ask");
  const props = {
    data,
    isLoading,
    page,
    setPage,
  };

  return <AskContainer {...props} />;
};
export default Ask;
