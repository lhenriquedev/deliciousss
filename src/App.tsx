import { Category } from "./components/Category/Category";
import { Pages } from "./pages/Pages";
import GlobalStyle from "./styles/globalStyles";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Category />
      <Pages />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
