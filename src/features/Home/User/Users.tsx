import styled from "styled-components";
import BorderLine from "../../../components/BorderLine";
import User from "./User";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import { IUser } from "../../../types/types";

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
  padding: 0 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.004px;
`;

const StoriesContainer = styled.div`
  position: relative;
  height: 222px;
  overflow-x: scroll;
  padding-bottom: 10px;
`;

const UserLists = styled.ul`
  margin-top: 20px;
  margin-bottom: 56px;
  display: flex;
  position: absolute;
  padding-left: 20px;
`;

interface Props {
  bestUsers?: (IUser | undefined)[];
  isLoading: boolean;
}

const Users = ({ bestUsers, isLoading }: Props) => {
  return (
    <>
      <TitleContainer>
        <Title>
          Today's User <Arrow />
        </Title>
      </TitleContainer>
      <StoriesContainer>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <UserLists>
            {bestUsers?.map((user, index) => (
              <User key={user?.id} {...user} index={index} />
            ))}
          </UserLists>
        )}
      </StoriesContainer>
      <BorderLine />
    </>
  );
};
export default Users;
