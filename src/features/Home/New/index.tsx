import { useQuery } from "@tanstack/react-query";
import { getStories } from "../../../apis";
import NewContent from "./NewContent";

const NewStories = () => {
  const {
    data: stories,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(["home", "new"], () => getStories("new", 0, 4));

  const props = {
    stories,
    isLoading,
    isFetching,
    refetch,
  };

  return <NewContent {...props} />;
};
export default NewStories;
