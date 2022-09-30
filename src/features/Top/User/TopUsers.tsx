import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getTopUsers } from "../../../apis";
import { IUser } from "../../../types/types";
import UserList from "./UserList";

const Container = styled.div`
  padding-bottom: 50px;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontColor};
  margin-top: 20px;
  padding: 0 20px;
`;

const ListTitles = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: #e2ecf0;
  padding: 15px 0;
  color: #727272;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
`;
const ListTitle = styled.span`
  width: 100%;
`;

const UserLists = styled.ul``;

const TopUsers = () => {
  const { data: users, isLoading } = useQuery(["topUser"], getTopUsers, {
    select: (users) => {
      return users?.sort((a, b) => b!.karma - a!.karma);
    },
  });

  return (
    <Container>
      <Title>User Ranking🏆</Title>
      <ListTitles>
        <ListTitle>Rank</ListTitle>
        <ListTitle>User Name</ListTitle>
        <ListTitle>Karma</ListTitle>
      </ListTitles>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <UserLists>
          {users?.map((user, index) => (
            <UserList key={`${user?.id}${index}`} {...user} index={index} />
          ))}
        </UserLists>
      )}
    </Container>
  );
};
export default TopUsers;
