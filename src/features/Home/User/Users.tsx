import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getBestUsers } from "../../../apis";
import User from "./User";

const Container = styled.ul`
  margin-top: 20px;
  margin-bottom: 56px;
  display: flex;
  position: absolute;
  padding-left: 20px;
`;

const Users = () => {
  const {
    data: bestUsers,
    isLoading,
    refetch,
  } = useQuery(["home", "best"], getBestUsers);

  return (
    <Container>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {bestUsers?.map((user, index) => (
            <User key={user?.id} {...user} index={index} />
          ))}
        </>
      )}
    </Container>
  );
};
export default Users;
