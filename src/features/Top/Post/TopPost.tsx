import styled from "styled-components";
import useStoryFetch from "../../../hooks/useStoryFetch";
import Pagination from "../../../components/Pagination";
import usePagination from "../../../hooks/usePagination";
import useChangeLayout from "../../../hooks/useChangeLayout";
import LayoutButtons from "../../../components/LayoutButtons";
import Stories from "../../../components/Stories";

const Container = styled.div`
  margin-top: 20px;
`;

const TopPost = () => {
  const [layout, handlechangeLayout] = useChangeLayout();
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { data: stories, isLoading } = useStoryFetch(
    offset,
    offset + limit,
    page
  );

  return (
    <Container>
      <LayoutButtons layout={layout} handlechangeLayout={handlechangeLayout} />
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <Stories layout={layout} stories={stories} />
      )}
      <Pagination page={page} setPage={setPage} />
    </Container>
  );
};
export default TopPost;
