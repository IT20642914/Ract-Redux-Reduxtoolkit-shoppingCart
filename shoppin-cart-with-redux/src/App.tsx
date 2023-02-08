import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Header from './Components/Navbar';
function App() {
  return (
    <BrowserRouter>

    <Header/>
    <main>
     
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route> 404 Not Found!</Route>

      </Routes>
     
    </main>
 
  </BrowserRouter>
  );
}

export default App;
