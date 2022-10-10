import NewContent from "../features/New";
import useChangeLayout from "../hooks/useChangeLayout";
import useStoryFetch from "../hooks/useStoryFetch";

const New = () => {
  const [layout, handlechangeLayout] = useChangeLayout();
  const { data: stories, isLoading, page, setPage } = useStoryFetch("new");
  const props = {
    layout,
    handlechangeLayout,
    stories,
    isLoading,
    page,
    setPage,
  };

  return <NewContent {...props} />;
};
export default New;
