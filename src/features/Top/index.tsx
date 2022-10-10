import Banner from "../../components/Banner";
import topBanner from "../../assets/images/top_banner.png";
import styled from "styled-components";
import { NavLink, Route, Routes } from "react-router-dom";
import TopPost from "./Post";
import TopUsers from "./User";

const ContentConatiner = styled.div`
  padding: 20px 0;
`;

const Kinds = styled.div`
  width: 340px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.storyBg};
  border-radius: 100px;
  padding: 4px 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const Button = styled.button`
  a {
    display: block;
    width: 170px;
    padding: 12px 0;
    font-size: 12px;
    text-align: center;
    border-radius: 100px;
    color: #b7b7b7;
    &.active {
      background-color: #ed702d;
      color: #fff;
    }
  }
`;

const TopContainer = () => {
  return (
    <section>
      <Banner src={topBanner} alt="Check out the top" />
      <ContentConatiner>
        <Kinds>
          <Button>
            <NavLink to="post">Post</NavLink>
          </Button>
          <Button>
            <NavLink to="users">Users</NavLink>
          </Button>
        </Kinds>
        <Routes>
          <Route path="post" element={<TopPost />} />
          <Route path="users" element={<TopUsers />} />
        </Routes>
      </ContentConatiner>
    </section>
  );
};
export default TopContainer;
