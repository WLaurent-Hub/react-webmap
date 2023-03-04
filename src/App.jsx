import React from 'react';
// import Navbar from './components/Navbar';
import Map from './components/Map';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboards from './pages/Dashboards';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Map/>}></Route>
          <Route path='/dashboard' element={<Dashboards/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </Sidebar>
      </BrowserRouter>
    </div>

    
  );
}

export default App;