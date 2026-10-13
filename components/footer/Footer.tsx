"use client";

import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="lsw-footer">
      <div className="lsw-footer-main">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row g-5">
            {/* Project heading */}
            <div className="col-lg-6 col-md-12">
              <div className="lsw-footer-heading">
                <h2>
                  Let’s talk
                  <br />
                  about
                  <br />
                  <span>your project</span>
                </h2>

                <a href="/contact" className="lsw-footer-connect">
                  SOUND GOOD? LET’S CONNECT!
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Contact and newsletter */}
            <div className="col-lg-3 col-md-6">
              <div className="lsw-footer-column">
                <h3>Connect with us</h3>

                <a href="mailto:info@lightspeedweb.ca" className="lsw-footer-contact">
                  <i className="bi bi-envelope"></i>
                  <span>info@lightspeedweb.ca</span>
                </a>

                <a href="tel:+16475007155" className="lsw-footer-contact">
                  <i className="bi bi-chat-dots-fill"></i>
                  <span>(647) 500-7155</span>
                </a>

                <div className="lsw-footer-newsletter">
                  <h3>Join our newsletter</h3>

                  <form
                    className="lsw-newsletter-form"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      required
                    />
                    <button type="submit" aria-label="Subscribe">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Addresses and social links */}
            <div className="col-lg-3 col-md-6">
              <div className="lsw-footer-column lsw-footer-address">
                <h3>Address</h3>

                <p>
                  <span className="lsw-address-icon">🇨🇦</span>
                  77 City Centre Drive, East Tower, Suite 501 Mississauga, ON,
                  L5B 1M5
                </p>

                <p>
                  <span className="lsw-address-icon">🇮🇳</span>
                  No. 97, Kalyan Tower, East Lokamanya St, RS Puram,
                  Coimbatore, TN - 641002
                </p>

                <p>
                  <i className="bi bi-clock lsw-address-clock"></i>
                  Monday → Friday 9am to 5pm
                </p>

                <div className="lsw-footer-social">
                  <h3>Follow us</h3>

                  <div className="lsw-social-links">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-facebook"></i> Facebook
                    </a>

                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-instagram"></i> Instagram
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-linkedin"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="lsw-footer-bottom">
            <a href="/" className="lsw-footer-logo">
              <Image
                src="/images/logo.png"
                alt="Light Speed Web"
                width={180}
                height={32}
              />
            </a>

            <p>
              Copyright © 2026 Light Speed Web
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}