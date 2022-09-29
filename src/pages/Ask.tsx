import styled from "styled-components";
import AskBanner from "../assets/images/ask_banner.png";
import Pagination from "../components/Pagination";
import useStoryFetch from "../features/Ask/useStoryFetch";
import Stories from "../features/Ask/Stories";
import usePagination from "../hooks/usePagination";

const Container = styled.section``;

const ContentConatiner = styled.div``;

const Banner = styled.div`
  margin-top: 2px;
`;

const Ask = () => {
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { data: stories, isLoading } = useStoryFetch(
    offset,
    offset + limit,
    page
  );

  return (
    <Container>
      <Banner>
        <img src={AskBanner} alt="We're here!" />
      </Banner>
      <ContentConatiner>
        {isLoading ? <span>Loading...</span> : <Stories stories={stories} />}
        <Pagination page={page} setPage={setPage} />
      </ContentConatiner>
    </Container>
  );
};
export default Ask;
