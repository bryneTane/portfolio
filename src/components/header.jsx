import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: "about", href: "#about" },
    { name: "experience", href: "#experience" },
    { name: "education", href: "#education" },
    { name: "projects", href: "#projects" },
    { name: "skills", href: "#skills" },
    { name: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="header">
        {/* Logo */}
        <a href="#start" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/logo-ft.png" alt="FT" style={{ height: "32px" }} />
            <span
              style={{
                color: "var(--term-orange)",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              FRIEDRICH
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <nav className="nav nav-desktop">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? "☀" : "☾"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-sidebar-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`mobile-sidebar ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-sidebar-header">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/logo-ft.png" alt="FT" style={{ height: "28px" }} />
            <span
              style={{
                color: "var(--term-orange)",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              MENU
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-sidebar-close"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-sidebar-nav">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="mobile-nav-link"
              onClick={handleNavClick}
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <span className="mobile-nav-icon">▸</span>
              {item.name}
            </a>
          ))}
        </nav>

        {/* <div className="mobile-sidebar-footer">
          <div style={{ fontSize: '10px', color: 'var(--term-text-dim)', marginBottom: '12px' }}>
            $ cat system.status
          </div>
          <div style={{ fontSize: '11px', color: 'var(--term-text)', lineHeight: 1.6 }}>
            <div>theme: {isDark ? 'dark' : 'light'}</div>
            <div>status: <span style={{ color: 'var(--term-green)' }}>ONLINE</span></div>
          </div>
        </div> */}
      </aside>
    </>
  );
}
