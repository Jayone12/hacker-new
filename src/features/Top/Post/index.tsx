import useStoryFetch from "../../../hooks/useStoryFetch";
import useChangeLayout from "../../../hooks/useChangeLayout";
import TopPostContent from "./TopPostContent";

const TopPost = () => {
  const [layout, handlechangeLayout] = useChangeLayout();
  const { data, isLoading, page, setPage } = useStoryFetch("top");
  const props = {
    layout,
    handlechangeLayout,
    data,
    isLoading,
    page,
    setPage,
  };

  return <TopPostContent {...props} />;
};
export default TopPost;
