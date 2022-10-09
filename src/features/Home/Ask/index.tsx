import { useQuery } from "@tanstack/react-query";
import { getStories } from "../../../apis";
import AskContent from "./AskContent";

const AskStories = () => {
  const {
    data: stories,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(["home", "ask"], () => getStories("ask", 0, 5));

  const props = {
    stories,
    isLoading,
    isFetching,
    refetch,
  };

  return <AskContent {...props} />;
};
export default AskStories;
