
"use client";

import { useEffect, useRef, useState } from "react";
import "../../css/company/our-company.css";

const stats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 100, suffix: "%", label: "Satisfaction Guaranteed" },
  { value: 100, suffix: "+", label: "Successful Campaigns" },
  { value: 20, suffix: "K+", label: "Hours Of Work" },
];

const purposes = [
  {
    icon: "bi-bullseye",
    label: "OUR MISSION",
    title: "Our goal is your goal.",
    description:
      "We want to help you succeed in the competitive world of digital marketing. With our expertise, we adopt your marketing plan and help you understand predictable growth opportunities for your business.",
  },
  {
    icon: "bi-eye",
    label: "OUR VISION",
    title: "Your success comes first.",
    description:
      "Building trust and adapting your marketing tactics helps unlock your true potential. We place your success at the forefront, with your business growth as the end goal.",
  },
  {
    icon: "bi-gem",
    label: "OUR VALUES",
    title: "Accountability and efficiency.",
    description:
      "We take our core values seriously. We are accountable for every action, offer affordable business solutions, and work to keep every project efficient and on track.",
  },
];

const benefits = [
  {
    icon: "bi-google",
    title: "Google Partner",
    description:
      "Digital marketing solutions to help businesses grow their online presence.",
  },
  {
    icon: "bi-people",
    title: "Great Team",
    description:
      "A team of professionals working together to deliver quality digital solutions.",
  },
  {
    icon: "bi-person-check",
    title: "Client-Centric Approach",
    description:
      "We put your goals first and tailor our work to your business needs.",
  },
  {
    icon: "bi-cash-coin",
    title: "No Hidden Charges",
    description:
      "Clear communication, transparent pricing, and no unexpected surprises.",
  },
  {
    icon: "bi-code-slash",
    title: "Expert Programmers",
    description:
      "Technical expertise for modern websites and custom digital solutions.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "ROI-driven Solutions",
    description:
      "Strategies designed to support measurable business growth.",
  },
  {
    icon: "bi-search",
    title: "Free SEO Analysis/Demo",
    description:
      "Explore opportunities to improve your website and digital visibility.",
  },
  {
    icon: "bi-diagram-3",
    title: "CRM Expertise",
    description:
      "CRM solutions that help businesses organize and improve their processes.",
  },
];

const leaders = [
  {
    name: "Ish Singh",
    role: "President",
    image: "/assets/img/company/ish.png",
    initials: "ISH",
    description:
      "As Founder of Light Speed Web, Ish oversees company operations and champions quality, professionalism, and expertise across projects.",
  },
  {
    name: "Gopal Krishnan",
    role: "Managing Director",
    image: "/assets/img/company/Gopal.png",
    initials: "Gopal",
    description:
      "Gopal oversees operations in the India office and brings experience in digital strategy and data analytics.",
  },
  {
    name: "Mario Ruggieri",
    role: "IT Project Manager",
    image: "/assets/img/company/marioLSW.png",
    initials: "MR",
    description:
      "Mario helps keep clients satisfied and projects on time, while staying attentive to new trends and developments.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`lsw-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    let frame = 0;
    let startTime = 0;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <div className="lsw-stat" ref={ref}>
      <div className="lsw-stat-value">
        {count}
        <sup>{suffix}</sup>
      </div>
      <p>{label}</p>
    </div>
  );
}

export default function OurCompany() {
  return (
    <main className="lsw-company">

      {/* HERO */}
      <section className="lsw-about-hero">
        <div className="lsw-about-hero-image" />

        <div className="lsw-about-hero-overlay">
          <div className="lsw-container">
            <Reveal className="lsw-hero-copy">
              <span className="lsw-eyebrow">
                <span className="lsw-eyebrow-dot" />
                GET TO KNOW US
              </span>

              <h1>
                We turn bold ideas
                <br />
                into <span>digital impact.</span>
              </h1>

              <p>
                A digital agency built around your ambitions,
                your customers, and your next stage of growth.
              </p>

              <a href="/contact-us/" className="lsw-primary-btn">
                Let&apos;s build something great
                <i className="bi bi-arrow-up-right" />
              </a>
            </Reveal>

            <div className="lsw-hero-bottom">
              <span>CREATIVE THINKING.</span>
              <span>TECHNICAL PRECISION.</span>
              <span>MEASURABLE GROWTH.</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="lsw-about-intro">
        <div className="lsw-container lsw-intro-layout">
          <Reveal className="lsw-intro-label">
            <span className="lsw-eyebrow">OUR STORY</span>
            <span className="lsw-intro-year">SINCE 2009</span>
          </Reveal>

          <Reveal className="lsw-intro-content" delay={150}>
            <h2>
              Light Speed Web was established in 2009 by{" "}
              <span>Ish Singh</span>, in Mississauga, Ontario.
            </h2>

            <div className="lsw-intro-bottom">
              <p>
                We help businesses navigate the digital landscape through
                marketing, web development, CRM solutions, and creative
                digital experiences. Our focus is understanding your goals
                and building solutions that move your business forward.
              </p>

              <a href="/contact-us/" className="lsw-text-link">
                Get to know our approach
                <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="lsw-stats-section">
        <div className="lsw-container">
          <div className="lsw-stats-top">
            <span className="lsw-eyebrow">THE WORK SPEAKS</span>
            <span className="lsw-stats-note">
              Experience that moves businesses forward.
            </span>
          </div>

          <div className="lsw-stats-grid">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 120}>
                <AnimatedStat {...stat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="lsw-purpose-section">
        <div className="lsw-container">
          <Reveal className="lsw-section-heading">
            <span className="lsw-eyebrow">WHAT DRIVES US</span>
            <h2>
              Vision, attention to detail,
              <br />
              and passion for a <span>flawless final product.</span>
            </h2>
          </Reveal>

          <div className="lsw-purpose-grid">
            {purposes.map((item, index) => (
              <Reveal
                key={item.label}
                className="lsw-purpose-reveal"
                delay={index * 160}
              >
                <article className="lsw-purpose-card">
                  <div className="lsw-purpose-card-top">
                    <span className="lsw-purpose-icon">
                      <i className={`bi ${item.icon}`} />
                    </span>
                    <span className="lsw-card-index">
                      {item.label}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="lsw-card-decoration" aria-hidden="true">
                    ↗
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="lsw-benefits-section">
        <div className="lsw-container">
          <Reveal className="lsw-benefits-heading">
            <span className="lsw-eyebrow">THE LIGHT SPEED DIFFERENCE</span>
            <h2>
              Why you should work with
              <br />
              <span>Light Speed Web.</span>
            </h2>
            <p>
              The right people, the right expertise, and a focus on
              helping your business move forward.
            </p>
          </Reveal>

          <div className="lsw-benefits-grid">
            {benefits.map((item, index) => (
              <Reveal
                key={item.title}
                className="lsw-benefit-reveal"
                delay={(index % 4) * 110}
              >
                <article className="lsw-benefit-card">
                  <div className="lsw-benefit-card-top">
                    <span className="lsw-benefit-icon">
                      <i className={`bi ${item.icon}`} />
                    </span>
                    <span className="lsw-benefit-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="lsw-benefit-arrow">
                    <i className="bi bi-arrow-up-right" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="lsw-leadership-section">
        <div className="lsw-container">
          <div className="lsw-leadership-heading">
            <Reveal>
              <span className="lsw-eyebrow">THE PEOPLE BEHIND US</span>
              <h2>
                Leadership <span>Team.</span>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p>
                Meet the people who bring experience, ideas, and
                commitment to the Light Speed Web team.
              </p>
            </Reveal>
          </div>

          <div className="lsw-leadership-grid">
            {leaders.map((person, index) => (
              <Reveal
                key={person.name}
                className="lsw-leader-reveal"
                delay={index * 150}
              >
                <article className="lsw-leader-card">
                  <div className="lsw-leader-photo">
                    <div className="lsw-leader-placeholder">
                      {person.initials}
                    </div>

                    <img
                      src={person.image}
                      alt={person.name}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <span className="lsw-leader-photo-index">
                     
                    </span>
                  </div>

                  <div className="lsw-leader-info">
                    <span>{person.role}</span>
                    <h3>{person.name}</h3>
                    <p>{person.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lsw-about-cta-section">
        <div className="lsw-container">
          <Reveal className="lsw-about-cta">
            <div className="lsw-about-cta-content">
              <span className="lsw-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>

              <h2>
                Transform your
                <br />
                <span>brand today.</span>
              </h2>

              <p>
                Have an idea in mind? Let&apos;s turn it into something
                meaningful for your business.
              </p>

              <a href="/contact-us/" className="lsw-dark-btn">
                Let&apos;s discuss your project
                <i className="bi bi-arrow-up-right" />
              </a>
            </div>

            <div className="lsw-cta-visual" aria-hidden="true">
              <div className="lsw-cta-orbit lsw-cta-orbit-one" />
              <div className="lsw-cta-orbit lsw-cta-orbit-two" />
              <div className="lsw-cta-orbit lsw-cta-orbit-three" />
              <div className="lsw-cta-core">
                <i className="bi bi-lightning-charge-fill" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
