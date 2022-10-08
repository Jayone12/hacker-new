import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import useDarkMode from "./hooks/useDarkMode";
import Routers from "./Routers";

import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./utils/theme";

function App() {
  const [themeMode, handleThemeMode] = useDarkMode();

  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header handleThemeMode={handleThemeMode} />
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
