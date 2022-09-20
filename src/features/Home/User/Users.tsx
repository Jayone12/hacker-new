import styled from "styled-components";
import useBestDataFetch from "./useBestDataFetch";
import User from "./User";

const Container = styled.ul`
  margin-top: 20px;
  margin-bottom: 56px;
  display: flex;
  position: absolute;
  padding-left: 20px;
`;

const Users = () => {
  const { data: bestUsers, isLoading } = useBestDataFetch();

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
