import styled from "styled-components";

import { BrowserRouter, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import GlobalStyle from "./styles/globalStyles";

import { Pages } from "./pages/Pages";
import { HeaderCategory } from "./components/HeaderCategory/HeaderCategory";
import { SearchBox } from "./components/SearchBox/SearchBox";

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.nav`
  max-width: 110rem;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>deliciousss</Logo>
      </Nav>
      <SearchBox />
      <HeaderCategory />
      <Pages />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
