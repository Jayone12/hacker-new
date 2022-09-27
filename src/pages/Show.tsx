import styled from "styled-components";
import ShowBanner from "../assets/images/show_banner.png";
import LayoutButtons from "../components/LayoutButtons";
import Pagination from "../components/Pagination";
import Stories from "../components/Stories";
import useStoryFetch from "../features/Show/useStoryFetch";
import useChangeLayout from "../hooks/useChangeLayout";
import usePagination from "../hooks/usePagination";

const Container = styled.section``;

const ContentConatiner = styled.div`
  padding: 20px;
`;

const Banner = styled.div`
  margin-top: 2px;
`;

const Show = () => {
  const [layout, handlechangeLayout] = useChangeLayout();
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { data: stories, isLoading } = useStoryFetch(
    offset,
    offset + limit,
    page
  );

  return (
    <Container>
      <Banner>
        <img
          src={ShowBanner}
          alt="show your TALENTS, Share anything here, Experience hacker effect"
        />
      </Banner>
      <ContentConatiner>
        <LayoutButtons
          layout={layout}
          handlechangeLayout={handlechangeLayout}
        />
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <Stories layout={layout} stories={stories} />
        )}
        <Pagination page={page} setPage={setPage} />
      </ContentConatiner>
    </Container>
  );
};
export default Show;
