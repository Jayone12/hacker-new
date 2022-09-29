import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getJobStory } from "../apis";
import JobBanner from "../assets/images/job_banner.png";
import Pagination from "../components/Pagination";
import Story from "../features/Job/Story";
import usePagination from "../hooks/usePagination";

const Container = styled.section``;

const Banner = styled.div`
  margin-top: 2px;
`;

const ContentConatiner = styled.ul`
  padding: 20px;
`;

const Job = () => {
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { data: Stories, isLoading } = useQuery(["jobStory", page], () =>
    getJobStory(offset, offset + limit)
  );

  return (
    <Container>
      <Banner>
        <img src={JobBanner} alt="Find Your Ideal Job" />
      </Banner>
      <ContentConatiner>
        {Stories?.map((story) => (
          <Story key={story?.id} {...story} />
        ))}
      </ContentConatiner>
      <Pagination page={page} setPage={setPage} />
    </Container>
  );
};
export default Job;
