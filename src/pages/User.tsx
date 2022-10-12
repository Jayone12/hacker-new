import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSubmissions, getUser } from "../apis";
import UserContainer from "../features/User";

const User = () => {
  const { name } = useParams();
  const { data: user } = useQuery(["user", name], () => getUser(name!));
  const { data: submitted, isLoading } = useQuery(
    ["submitted", name],
    () => getSubmissions(user!.submitted),
    {
      enabled: !!user?.submitted,
      select: (datas) => {
        const stories = datas?.filter(
          (data) => data?.type !== "comment" && !data?.deleted
        );
        const comments = datas?.filter(
          (data) => data?.type === "comment" && !data?.deleted
        );
        return { stories, comments };
      },
    }
  );

  const props = {
    user,
    isLoading,
    submitted,
  };

  if (!isLoading) {
    return <UserContainer {...props} />;
  } else {
    return <span>Loading...</span>;
  }
};
export default User;
