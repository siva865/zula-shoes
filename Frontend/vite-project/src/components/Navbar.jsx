import { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Benefits", id: "benefits" },
    { name: "Vision", id: "vision" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // mobile close
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo" onClick={() => scrollToSection("home")}>
            ZULA
          </div>

          <ul className="nav-links">
            {menu.map((item) => (
              <li
                key={item.id}
                className="nav-item"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
                <span className="underline"></span>
              </li>
            ))}
          </ul>

          <div className="hamburger" onClick={() => setOpen(true)}>
            ☰
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <span className="close" onClick={() => setOpen(false)}>✕</span>

        {menu.map((item) => (
          <div
            key={item.id}
            className="mobile-item"
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
