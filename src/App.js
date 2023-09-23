import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { baseTheme } from './styles/theme';
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.sizes.sidebar} 1fr;
  grid-template-rows: ${({ theme }) => theme.sizes.header} 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main ';
`;

const StyledMain = styled.main`
  grid-area: main;
  padding: 32px;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <StyledApp>
          <Sidebar />
          <Header title="Prices" />
          <StyledMain>
            <AppRouter isAuth={true} />
          </StyledMain>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
