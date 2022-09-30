import { useEffect } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBanner from "../assets/images/top_banner.png";
import TopPost from "../features/Top/Post/TopPost";
import TopUsers from "../features/Top/User/TopUsers";

const Container = styled.section``;

const ContentConatiner = styled.div`
  padding: 20px 0;
`;

const Banner = styled.div`
  margin-top: 2px;
`;

const Kinds = styled.div`
  width: 340px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.storyBg};
  border-radius: 100px;
  padding: 4px 5px;
  border: 1px solid #b7b7b7;
`;

const Button = styled.button`
  a {
    display: block;
    width: 170px;
    padding: 12px 0;
    font-size: 12px;
    text-align: center;
    border-radius: 100px;
    &.active {
      background-color: #ed702d;
    }
  }
`;

const Top = () => {
  const navigate = useNavigate();

  useEffect(() => {
    return navigate("/top/post");
  }, []);

  return (
    <Container>
      <Banner>
        <img src={TopBanner} alt="Check out the top" />
      </Banner>
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
    </Container>
  );
};
export default Top;
