import JobContainer from "../features/Job/JobContiner";
import useStoryFetch from "../hooks/useStoryFetch";

const Job = () => {
  const { data, isLoading, page, setPage } = useStoryFetch("job");
  const props = {
    data,
    isLoading,
    page,
    setPage,
  };

  return <JobContainer {...props} />;
};
export default Job;
