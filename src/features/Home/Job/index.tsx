import { useQuery } from "@tanstack/react-query";
import { getStories } from "../../../apis";
import JobContent from "./JobContent";

const JobStories = () => {
  const { data: stories, isLoading } = useQuery(["home", "job"], () =>
    getStories("job", 0, 5)
  );

  const props = {
    stories,
    isLoading,
  };

  return <JobContent {...props} />;
};
export default JobStories;
