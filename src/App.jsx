import React from 'react';
import { Grid, Box, styled } from '@mui/material';
import Header from './components/templates/Header';
import './App.css';
import NavBar from './components/templates/NavBar';
import Main from './pages/Main';
import Footer from './components/templates/Footer';

const HeaderWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(201, 237, 237)',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NavBarWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(115, 196, 196)',
  height: '100vh',
  display: 'flex',
  alignItems: 'flex-start',
}));

const Body = styled(Box)(() => ({
  backgroundColor: 'rgb(208, 219, 219)',
  height: '100vh',
  padding: '25px',
}));

const FooterWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(201, 237, 237)',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto',
}));

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        </Grid>
        <Grid item lg={2} md={0} xs={0}
          display={{ xs: "none", md: "none", lg: "block" }}>
          <NavBarWrapper>
            <NavBar />
          </NavBarWrapper >
        </Grid>
        <Grid item lg={10} md={12} xs={12}>
          <Body>
            <Main />
          </Body>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
