import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as ThemeIcon } from "../assets/images/theme_icon.svg";
import { ReactComponent as AboutIcon } from "../assets/images/about_icon.svg";
import { Link } from "react-router-dom";

const Container = styled.header``;

const TopContainer = styled.div`
  height: 40px;
  background-color: ${({ theme }) => theme.headerBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #fff;
  margin-left: 5px;
  letter-spacing: -0.04px;
`;

const SubMenu = styled.div`
  display: flex;
  align-items: center;
  svg {
    &:last-child {
      margin-left: 10px;
      margin-top: 3px;
    }
  }
`;

const Nav = styled.nav``;

const MenuContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 40px;
`;

const Menu = styled.li`
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #727272;
  a {
    width: 100%;
    padding: 10px;
    &:hover {
      border-bottom: 3px solid #ed702d;
      color: ${({ theme }) => theme.fontColor};
    }
    &.active {
      border-bottom: 3px solid #ed702d;
      color: ${({ theme }) => theme.fontColor};
    }
  }
`;

interface Props {
  handleThemeMode: () => void;
}

const Header = ({ handleThemeMode }: Props) => {
  return (
    <Container>
      <TopContainer>
        <TitleContainer>
          <Logo />
          <Title>Svelte Hacker News</Title>
        </TitleContainer>
        <SubMenu>
          <ThemeIcon onClick={handleThemeMode} />
          <Link to="/about">
            <AboutIcon />
          </Link>
        </SubMenu>
      </TopContainer>
      <Nav>
        <MenuContainer>
          <Menu>
            <Link to="/">Home</Link>
          </Menu>
          <Menu>
            <Link to="/top">Top</Link>
          </Menu>
          <Menu>
            <Link to="/new">New</Link>
          </Menu>
          <Menu>
            <Link to="/show">Show</Link>
          </Menu>
          <Menu>
            <Link to="/ask">Ask</Link>
          </Menu>
          <Menu>
            <Link to="/job">Job</Link>
          </Menu>
        </MenuContainer>
      </Nav>
    </Container>
  );
};
export default Header;
