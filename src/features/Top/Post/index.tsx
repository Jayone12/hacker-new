import styled from "styled-components";
import useStoryFetch from "../../../hooks/useStoryFetch";
import Pagination from "../../../components/Pagination";
import useChangeLayout from "../../../hooks/useChangeLayout";
import LayoutButtons from "../../../components/LayoutButtons";
import Stories from "../../../components/Stories";
import TopPostContent from "./TopPostContent";

const Container = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const TopPost = () => {
  const [layout, handlechangeLayout] = useChangeLayout();
  const { data: stories, isLoading, page, setPage } = useStoryFetch("top");
  const props = {
    layout,
    handlechangeLayout,
    stories,
    isLoading,
    page,
    setPage,
  };

  return <TopPostContent {...props} />;
};
export default TopPost;
