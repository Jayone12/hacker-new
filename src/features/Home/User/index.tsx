import { useQuery } from "@tanstack/react-query";
import { getBestUsers } from "../../../apis";
import Users from "./Users";

const TodayUsers = () => {
  const { data: bestUsers, isLoading } = useQuery(
    ["home", "best"],
    getBestUsers
  );

  const props = {
    bestUsers,
    isLoading,
  };

  return <Users {...props} />;
};
export default TodayUsers;
