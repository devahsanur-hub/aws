import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#qualification", label: "Qualification" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const navStyles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      padding: "1rem 2rem",
      background: "rgba(25, 25, 25, 0.7)",
      backdropFilter: "blur(10px)",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1000,
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    logoImage: {
      height: "40px",
      objectFit: "contain",
      borderRadius: "5px",
    },
    logoText: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#fff",
    },
    menuButton: {
      color: "#fff",
      fontSize: "1.8rem",
      cursor: "pointer",
      display: isMobile ? "block" : "none",
      zIndex: 1001,
      transition: "transform 0.3s ease",
    },
    ulDesktop: {
      display: isMobile ? "none" : "flex",
      listStyle: "none",
      gap: "1.5rem",
      margin: 0,
      padding: 0,
    },
    ulMobile: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
     background: "linear-gradient(135deg,rgba(13, 12, 18, 0.57),rgba(34, 33, 39, 0.53))",
      backdropFilter: "blur(8px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
      padding: "4rem 0 2rem 0",
      animation: "slideDown 0.5s ease forwards",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      fontWeight: "500",
      fontSize: "1rem",
      position: "relative",
      transition: "all 0.3s ease",
    },
  };

  return (
    <>
      <style>
        {`
          body {
            padding-top: 70px;
            margin: 0;
            box-sizing: border-box;
          }

          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-100%); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeSlide {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .nav-link:hover {
            background-color: rgba(255,255,255,0.1);
            box-shadow: 0 0 10px #6c63ff, 0 0 20px #6c63ff;
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <nav style={navStyles.nav}>
        <div style={navStyles.logoContainer}>
          <img src={logo} alt="Logo" style={navStyles.logoImage} />
          <span style={navStyles.logoText}>MyPortfolio</span>
        </div>

        <div onClick={toggleMenu} style={navStyles.menuButton}>
          {menuOpen ? <FaTimes style={{ transform: "rotate(180deg)" }} /> : <FaBars />}
        </div>

        <ul style={navStyles.ulDesktop}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="nav-link" style={navStyles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {menuOpen && isMobile && (
          <ul style={navStyles.ulMobile}>
            {navLinks.map((link, index) => (
              <li key={index} style={{ animation: `fadeSlide 0.3s ease ${(index + 1) * 0.1}s forwards`, opacity: 0 }}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={navStyles.link}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
