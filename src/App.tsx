import { HeaderCategory } from "./components/HeaderCategory/HeaderCategory";
import { Pages } from "./pages/Pages";
import GlobalStyle from "./styles/globalStyles";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderCategory />
      <Pages />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
