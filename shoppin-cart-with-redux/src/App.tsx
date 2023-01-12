import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
function App() {
  return (
    <BrowserRouter>

    {/* <NavBar/> */}
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
