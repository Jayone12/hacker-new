import NewContent from "../features/New";
import useChangeLayout from "../hooks/useChangeLayout";
import useStoryFetch from "../hooks/useStoryFetch";

const New = () => {
  const [layout, handlechangeLayout] = useChangeLayout();
  const { data, isLoading, page, setPage } = useStoryFetch("new");
  const props = {
    layout,
    handlechangeLayout,
    data,
    isLoading,
    page,
    setPage,
  };

  return <NewContent {...props} />;
};
export default New;
