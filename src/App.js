import * as React from "react";
import './App.css'
import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx"
import Home from "./components/Home/Home.jsx";
import Maps from "./components/Mapas/Maps.jsx";
import Personajes from './components/Personajes/Personajes.jsx'
import Ciudad from './components/Ciudad/Ciudad.jsx'
import Tiradas from './components/Tiradas/tiradas.jsx'


function App() {
  return (
    <div className='App'>
      <NextUIProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mapas" element={<Maps />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/ciudad" element={<Ciudad />} />\
            <Route path="/tiradas" element={<Tiradas />} />
          </Routes>
          
        </BrowserRouter>
      </NextUIProvider>
    </div>
  );
}

export default App;
