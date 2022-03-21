import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import GlobalStyle from "./styles/globalStyles";

import { Pages } from "./pages/Pages";
import { HeaderCategory } from "./components/HeaderCategory/HeaderCategory";
import { SearchBox } from "./components/SearchBox/SearchBox";

// Dark theme stuffs
import { lightTheme, darkTheme } from "./theme/theme";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { ToggleTheme } from "./components/ToggleTheme/ToggleTheme";

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
          <S.LogoContainer>
            <GiKnifeFork size={30} />
            <S.Logo to={"/"}>deliciousss</S.Logo>
          </S.LogoContainer>
          <ToggleTheme handleTheme={handleTheme}>
            {theme === "light" ? (
              <HiOutlineMoon size={30} />
            ) : (
              <HiOutlineSun size={30} />
            )}
          </ToggleTheme>
        </S.Nav>
        <SearchBox />
        <HeaderCategory />
        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
