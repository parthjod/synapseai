import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

function Navbar() {
  const [navBlur, setNavBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBlur(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${navBlur ? "blurred" : ""}`}>
      <div className="image-container2">
        <Link to="/">
          <img src="/synapselogo.png" alt="logo" />
        </Link>
        <h1>Synapse AI</h1>
      </div>
      <div className="nav-links">
        <Link to="/">
          <AiOutlineHome className="nav-icon" /> Home
        </Link>
        <Link to="/about">
          <AiOutlineUser className="nav-icon" /> About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
