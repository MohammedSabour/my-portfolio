import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router";
import Navbar from "./components/Navbar";
import Emailside from './components/Emailside';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Toolbox from "./pages/Toolbox";
import Socialside from './components/Socialside';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='max-w-5xl mx-auto'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/toolbox" element={<Toolbox/>} />
        </Routes>
      </div>
      <Emailside/>
      <Socialside/>
    </BrowserRouter>
  )
}
