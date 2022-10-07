import { useQuery } from "@tanstack/react-query";
import { Route, Routes, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { idText } from "typescript";
import { getUser } from "../apis";
import Comments from "../features/User/Comments";
import Favorites from "../features/User/Favorites";
import Submissions from "../features/User/Submissions";
import { diffTime } from "../utils/diffTime";

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

const User = () => {
  const { name } = useParams();

  const { data, isLoading } = useQuery(["user", name], () => getUser(name!));
  if (!isLoading) {
    return (
      <Container>
        <UserContents>
          <UserName>{data?.id}</UserName>
          <UserInfo>
            <Joined>
              <Tag>Joined</Tag>
              {diffTime(data?.created!)}
            </Joined>
            <Karma>
              <Tag>Karma</Tag>
              {data?.karma}
            </Karma>
          </UserInfo>
          {data?.about && (
            <Introduce
              dangerouslySetInnerHTML={{
                __html: `${data?.about}`,
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
            element={<Submissions ids={data?.submitted} />}
          />
          <Route path="comments" element={<Comments ids={data?.submitted} />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </Container>
    );
  } else {
    return <span>Loading...</span>;
  }
};
export default User;
