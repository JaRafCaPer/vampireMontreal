import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"
import Home from "./components/Home/Home.jsx";
import Maps from "./components/Mapas/Maps.jsx";
import Personajes from './components/Personajes/Personajes.jsx'
import Ciudad from './components/Ciudad/Ciudad.jsx'


function App() {
  return (
    <div className='App'>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mapas" element={<Maps />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/ciudad" element={<Ciudad />} />
          </Routes>
          
        </BrowserRouter>

    </div>
  );
}

export default App;
