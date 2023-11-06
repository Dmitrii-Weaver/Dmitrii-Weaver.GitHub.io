import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import Profile from './components/profile/profile';
import Header from './components/header/header';
import Portfolio from './pages/portfolio/portfolio';
import Resume from './pages/resume/resume';
import Footer from './components/footer/footer';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';

function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={7}>
        <Grid item lg={3} md={4} xs={12} sm={12}>
          <Profile /> 
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <Routes>
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/' element={<Resume />} />
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
