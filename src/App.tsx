import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import useDarkMode from "./hooks/useDarkMode";
import About from "./pages/About";
import Ask from "./pages/Ask";
import Home from "./pages/Home";
import Item from "./pages/Item";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Show from "./pages/Show";
import Top from "./pages/Top";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./utils/theme";

function App() {
  const [themeMode, handleThemeMode] = useDarkMode();

  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header handleThemeMode={handleThemeMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top" element={<Top />} />
          <Route path="/new" element={<New />} />
          <Route path="/show" element={<Show />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/job" element={<Top />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
