import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Create from './components/Create';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Note from './components/Note';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <div className="main">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Router>
            <Grid item xs={4}>
              <Header></Header>
            </Grid>
            <Grid item xs={8}>
              <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/create' element={<Create />} />
                <Route path='/note/' element={<Note />} />
                <Route path='/note/:noteURL' element={<Note />} />
                <Route path='*' element={<Error />} />
              </Routes>
            </Grid>
          </Router>
          <Footer></Footer>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
