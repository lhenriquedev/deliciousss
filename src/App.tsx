import styled from "styled-components";

import { BrowserRouter, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import GlobalStyle from "./styles/globalStyles";

import { Pages } from "./pages/Pages";
import { HeaderCategory } from "./components/HeaderCategory/HeaderCategory";
import { SearchBox } from "./components/SearchBox/SearchBox";

// Dark theme stuffs
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { useState } from "react";

import * as S from "./styled";

function App() {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <S.Nav>
          <GiKnifeFork />
          <S.Logo to={"/"}>deliciousss</S.Logo>
          <button onClick={handleTheme}>Switch Theme</button>
        </S.Nav>
        <SearchBox />
        <HeaderCategory />
        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
