import styled from "styled-components";
import JobBanner from "../assets/images/job_banner.png";
import Pagination from "../components/Pagination";
import JobContainer from "../features/Job/JobContiner";
import Story from "../features/Job/Story";
import useStoryFetch from "../hooks/useStoryFetch";

const Container = styled.section``;

const Banner = styled.div`
  margin-top: 2px;
`;

const ContentConatiner = styled.ul`
  padding: 20px;
`;

const Job = () => {
  const { data: stories, isLoading, page, setPage } = useStoryFetch("job");
  const props = {
    stories,
    isLoading,
    page,
    setPage,
  };

  return <JobContainer {...props} />;
};
export default Job;
