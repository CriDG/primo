import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Storia from './pages/Storia';
import Home from './pages/Home';

function App() {

 
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
        <Route path = '/storia' element={<Storia/>}/>  
        <Route path = '/' element={<Home />}/> 
        </Routes>
  
      </div>
    </>
  );
}

export default App;
