import { useQuery } from "@tanstack/react-query";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { getSubmissions } from "../../apis";
import { IStory, IUser } from "../../types/types";
import { diffTime } from "../../utils/diffTime";
import CommentContainer from "./Comments";
import Favorites from "./Favorites";
import SubmissionContainer from "./Submissions";

const Container = styled.section`
  margin-top: 2px;
  padding: 20px;
`;

const UserContents = styled.div`
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 0 16px;
`;

const UserName = styled.h2`
  font-size: 22px;
  font-weight: 700;
  padding: 24px 0 12px;
`;

const UserInfo = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Joined = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.fontColor};
`;

const Karma = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.fontColor};
  margin-left: 15px;
`;

const Tag = styled.span`
  color: #ed702d;
  font-size: 10px;
  padding: 2px 5px;
  border: 1px solid #ed702d;
  border-radius: 20px;
  margin-right: 5px;
`;

const Introduce = styled.p`
  padding: 24px 0;
`;

const Taps = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 1000px;
  padding: 5px;
  margin-top: 32px;
  margin-bottom: 20px;
`;

const Tap = styled.li`
  flex: 1;
  > a {
    display: block;
    border-radius: 100px;
    padding: 10px 0;
    text-align: center;
    font-size: 12px;
    &.active {
      background-color: #ed702d;
    }
  }
`;

interface Props {
  user?: IUser;
  isLoaing?: boolean;
  submitted?: {
    stories?: (IStory | undefined)[];
    comments?: (IStory | undefined)[];
  };
}

const UserContainer = ({ user, isLoaing, submitted }: Props) => {
  return (
    <Container>
      <UserContents>
        <UserName>{user?.id}</UserName>
        <UserInfo>
          <Joined>
            <Tag>Joined</Tag>
            {diffTime(user?.created!)}
          </Joined>
          <Karma>
            <Tag>Karma</Tag>
            {user?.karma}
          </Karma>
        </UserInfo>
        {user?.about && (
          <Introduce
            dangerouslySetInnerHTML={{
              __html: `${user?.about}`,
            }}
          />
        )}
      </UserContents>
      <Taps>
        <Tap>
          <NavLink to="submissions">Submissions</NavLink>
        </Tap>
        <Tap>
          <NavLink to="comments">Comments</NavLink>
        </Tap>
        <Tap>
          <NavLink to="favorites">Favorites</NavLink>
        </Tap>
      </Taps>
      <Routes>
        <Route
          path="submissions"
          element={<SubmissionContainer stories={submitted?.stories} />}
        />
        <Route
          path="comments"
          element={<CommentContainer comments={submitted?.comments} />}
        />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Container>
  );
};
export default UserContainer;
