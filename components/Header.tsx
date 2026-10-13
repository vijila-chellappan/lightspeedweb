"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header" className="header">

      <div className="header-container">

        {/* Logo */}
        <Link
          href="/"
          className="header-logo"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.png"
            alt="Light Speed Web"
            width={280}
            height={49}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`header-nav ${menuOpen ? "menu-open" : ""}`}>

          <ul>
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>

            <li>
              <Link href="/our-work" onClick={closeMenu}>
                Our Work
              </Link>
            </li>

            <li>
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

        </nav>

        {/* Contact + CTA */}
        <div className="header-right">

          <div className="header-phone">
            <i className="bi bi-chat-fill"></i>
            <span>(647) 500-7155</span>
          </div>

          <Link
            href="/contact"
            className="header-project-btn"
            onClick={closeMenu}
          >
            Start a Project
            <i className="bi bi-arrow-right"></i>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`mobile-menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
}