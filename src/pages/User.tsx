import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSubmissions, getUser } from "../apis";
import Skeleton from "../components/Skeleton";
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
    submitted,
  };

  if (!isLoading) {
    return <UserContainer {...props} />;
  } else {
    return (
      <ul>
        {Array(10)
          .fill(0)
          .map((skeleton, index) => (
            <Skeleton key={skeleton + index} />
          ))}
      </ul>
    );
  }
};
export default User;
