import styled from "styled-components";
import ShowContent from "../features/Show";
import useChangeLayout from "../hooks/useChangeLayout";
import useStoryFetch from "../hooks/useStoryFetch";

const Show = () => {
  const [layout, handlechangeLayout] = useChangeLayout();
  const { data, isLoading, page, setPage } = useStoryFetch("show");
  const props = {
    layout,
    handlechangeLayout,
    isLoading,
    data,
    page,
    setPage,
  };

  return <ShowContent {...props} />;
};
export default Show;
