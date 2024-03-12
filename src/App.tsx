import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePageComponent from './Components/HomePageComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePageComponent/>}/>
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
