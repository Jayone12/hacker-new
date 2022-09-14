import styled, { ThemeProvider } from "styled-components";
import Routers from "./Router";
import { lightTheme } from "./utils/theme";

const Wrapper = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgColor};
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Wrapper>
        <Routers />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
