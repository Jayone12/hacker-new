import { useQuery } from "@tanstack/react-query";
import { getTopUsers } from "../../../apis";
import UserContent from "./UserContent";

const TopUsers = () => {
  const { data: users, isLoading } = useQuery(["topUser"], getTopUsers, {
    select: (users) => {
      return users?.sort((a, b) => b!.karma - a!.karma);
    },
  });

  const props = {
    users,
    isLoading,
  };

  return <UserContent {...props} />;
};
export default TopUsers;
