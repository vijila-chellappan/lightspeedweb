"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  const isAboutActive =
    pathname === "/our-company" ||
    pathname.startsWith("/our-company/") ||
    pathname === "/team" ||
    pathname.startsWith("/team/");

  return (
    <header id="header" className="header">
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="header-logo" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Light Speed Web"
            width={280}
            height={49}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "menu-open" : ""}`}>
          <ul>
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/our-company" onClick={closeMenu}>
                About Us
              </Link>
            </li>
           
            {/* Our Work Dropdown */}
            <li
              className={`header-dropdown ${aboutOpen ? "dropdown-open" : ""} ${
                isAboutActive ? "active" : ""
              }`}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <div className="header-dropdown-heading">
                <Link
                  href="/our-work"
                  onClick={closeMenu}
                  aria-current={
                    pathname === "/our-work" ? "page" : undefined
                  }
                >
                  Our Works
                </Link>

                <button
                  type="button"
                  className="header-dropdown-toggle"
                  aria-label="Toggle About Us submenu"
                  aria-expanded={aboutOpen}
                  onClick={() => setAboutOpen((open) => !open)}
                >
                  <i className="bi bi-chevron-down" />
                </button>
              </div>

              <ul className="header-submenu">
                <li>
                  <Link
                    href="/our-work"
                    onClick={closeMenu}
                    aria-current={
                      pathname === "/our-work" ? "page" : undefined
                    }
                  >
                    <i className="bi bi-buildings" />
                    Our Websites
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-videos"
                    onClick={closeMenu}
                    aria-current={
                      pathname === "/our-videos" ? "page" : undefined
                    }
                  >
                    <i className="bi bi-people" />
                    Our Videos
                  </Link>
                </li>
              </ul>
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

        {/* Contact and CTA */}
        <div className="header-right">
          <div className="header-phone">
            <i className="bi bi-chat-fill" />
            <span>(647) 500-7155</span>
          </div>

          <Link
            href="/contact"
            className="header-project-btn"
            onClick={closeMenu}
          >
            Start a Project
            <i className="bi bi-arrow-right" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => {
            setMenuOpen((open) => !open);
            setAboutOpen(false);
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}