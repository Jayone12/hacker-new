import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getUser } from "../apis";
import UserContainer from "../features/User";

const User = () => {
  const { name } = useParams();
  const { data: user, isLoading } = useQuery(["user", name], () =>
    getUser(name!)
  );

  const props = {
    user,
    isLoading,
  };

  if (!isLoading) {
    return <UserContainer {...props} />;
  } else {
    return <span>Loading...</span>;
  }
};
export default User;
