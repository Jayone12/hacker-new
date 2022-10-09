import { useQuery } from "@tanstack/react-query";
import { getStories } from "../../../apis";
import ShowContent from "./ShowContent";

const ShowStories = () => {
  const {
    data: stories,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(["home", "show"], () => getStories("show", 0, 5));

  const props = {
    stories,
    isLoading,
    isFetching,
    refetch,
  };

  return <ShowContent {...props} />;
};
export default ShowStories;
