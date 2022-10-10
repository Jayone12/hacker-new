import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getStory } from "../apis";
import ItemContainer from "../features/Item";

const Item = () => {
  const { id } = useParams();
  const { data: story, isLoading } = useQuery([id], () => getStory(id!));

  const props = {
    story,
    isLoading,
  };

  return <ItemContainer {...props} />;
};
export default Item;
