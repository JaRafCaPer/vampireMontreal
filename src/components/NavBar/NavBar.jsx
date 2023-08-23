import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";



const NavBar = () => {
    const [color, setColor] = useState(null);
    const handleClick = (item) => {
        setColor(item);
    };

    return (
        <>
       
                        <div className="todo">
                            <div className="bloque">
                                <div className="navLink"><Link className="pNav" to="/" onClick={() => handleClick("inicio")}
                                style={{ color: color === "inicio" ? "#4F6C7C" : "red" }}>Home</Link></div>
                                <div className="navLink"><Link className="pNav" to="personajes" onClick={() => handleClick("Personajes")}
                                style={{ color: color === "sobre" ? "#4F6C7C" : "red" }}>Pjs</Link></div>
                                <div className="navLink"><Link className="pNav" to="ciudad" onClick={() => handleClick("ciudad")}
                                style={{ color: color === "conocenos" ? "#4F6C7C" : "red" }}>City</Link></div>
                                <div className="navLink"><Link className="pNav"to="mapas" onClick={() => handleClick("mapas")}
                                style={{ color: color === "contactanos" ? "#4F6C7C" : "red" }}>Maps</Link></div>
                                <div className="navLink"><Link className="pNav"to="tiradas" onClick={() => handleClick("tiradas")}
                                style={{ color: color === "contactanos" ? "#4F6C7C" : "red" }}>Rolls</Link></div>
                            </div>
                        </div>
             
            
        </>


    )
}

export default NavBar;
