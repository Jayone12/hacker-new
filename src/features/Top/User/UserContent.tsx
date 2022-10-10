import styled from "styled-components";
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

interface Props {
  isLoading: boolean;
  users?: (IUser | undefined)[];
}

const UserContent = ({ isLoading, users }: Props) => {
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
        <ul>
          {users?.map((user, index) => (
            <UserList key={`${user?.id}${index}`} {...user} index={index} />
          ))}
        </ul>
      )}
    </Container>
  );
};
export default UserContent;
