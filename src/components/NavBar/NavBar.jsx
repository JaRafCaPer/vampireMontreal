import { Navbar, NavbarItem, Link } from "@nextui-org/react";
import { useState } from "react";

const NavBar = () => {
  const [color, setColor] = useState(null);
  const handleClick = (item) => {
    setColor(item);
  };

  return (
    <Navbar className="bg-black text-danger text-decoration-none navbar">
      <NavbarItem>
        <Link
        color="danger"
          href="/"
          className={`pNav ${color === "inicio" ? "active" : ""}`}
          onClick={() => handleClick("inicio")}
        >
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
        color="danger"
          href="/personajes"
          className={`pNav ${color === "Personajes" ? "active" : ""}`}
          onClick={() => handleClick("Personajes")}
        >
          Characters
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
        color="danger"
          href="/ciudad"
          className={`pNav ${color === "ciudad" ? "active" : ""}`}
          onClick={() => handleClick("ciudad")}
        >
          City
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
        color="danger"
          href="/mapas"
          className={`pNav ${color === "mapas" ? "active" : ""}`}
          onClick={() => handleClick("mapas")}
        >
          Maps
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
        color="danger"
          href="/tiradas"
          className={`pNav ${color === "tiradas" ? "active" : ""}`}
          onClick={() => handleClick("tiradas")}
        >
          Rolls
        </Link>
      </NavbarItem>
    </Navbar>
  );
};

export default NavBar;
