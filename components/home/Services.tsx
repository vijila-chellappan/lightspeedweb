
"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import "../../css/home/services.css";

const services = [
  {
    title: "Digital Strategy",
    description:
      "Now more than ever, it's vital for businesses to have a digital strategy that delivers real results.",
    image: "/assets/img/homeservices/digital-strategy.jpg",
    alt: "Digital strategy and marketing",
    link: "/digital-strategy",
  },
  {
    title: "Ecommerce Solutions",
    description:
      "Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day. Get set up with Shopify, Magento, and WooCommerce customized solutions.",
    image: "/assets/img/homeservices/ecommerce-solutions.jpg",
    alt: "Ecommerce solutions",
    link: "/ecommerce-development",
  },
  {
    title: "Website Development",
    description:
      "From layout, to visuals, to writing markup and coding, aesthetics and usability we've got you covered.",
    image: "/assets/img/homeservices/website-development.jpg",
    alt: "Website development",
    link: "/wordpress-website-development",
  },
  {
    title: "CRM Automation",
    description:
      "Is your business ready for a digital future? Automate every operation of your business with CRM.",
    image: "/assets/img/homeservices/crm-automation.jpg",
    alt: "CRM automation",
    link: "/crm-automation",
  },
  {
    title: "Video Production",
    description:
      "Bring yourself, your brand, your passions and your vision to life with video production services. We create videos that you are proud to share with the world.",
    image: "/assets/img/homeservices/video-production.jpg",
    alt: "Video production services",
    link: "/video-production",
  },
  {
    title: "Mobile Apps",
    description:
      "Provide superior service to your customers with your own customized mobile business app.",
    image: "/assets/img/homeservices/mobile-apps.jpg",
    alt: "Mobile app development",
    link: "/ios-development",
  },
];

const stats = [
  { number: 50, label: "DEDICATED PROFESSIONALS" },
  { number: 500, label: "CLIENTS SERVED" },
  { number: 250, label: "DELIVERED PROJECTS" },
  { number: 10, label: "YEARS OF EXPERIENCE" },
  { number: 100, label: "SATISFACTION" },
  { number: 50, label: "STARTUPS WE WORKED WITH" },
];

const industries = [
  {
    title: "Dental",
    icon: "bi bi-emoji-smile",
    services: ["Web Development", "Branding", "Marketing"],
    link: "/our-work/",
  },
  {
    title: "Mortgage",
    icon: "bi bi-house-check",
    services: ["Web Development", "User Interface", "Web Design"],
    link: "/our-work/",
  },
  {
    title: "Insurance",
    icon: "bi bi-file-earmark-medical",
    services: ["Web Development", "User Interface", "Web Design"],
    link: "/our-work/",
  },
  {
    title: "Real Estate",
    icon: "bi bi-house-heart",
    services: ["UI & UX design", "Branding", "Marketing"],
    link: "/our-work/",
  },
  {
    title: "Home Renovation",
    icon: "bi bi-tools",
    services: ["UI & UX design", "Branding", "Marketing"],
    link: "/our-work/",
  },
  {
    title: "Hospitality",
    icon: "bi bi-buildings",
    services: ["UI & UX design", "Branding", "Marketing"],
    link: "/our-work/",
  },
  {
    title: "Legal",
    icon: "bi bi-file-earmark-text",
    services: ["UI & UX design", "Branding", "Marketing"],
    link: "/our-work/",
  },
  {
    title: "Manufacturing",
    icon: "bi bi-gear-wide-connected",
    services: ["UI & UX design", "Branding", "Marketing"],
    link: "/our-work/",
  },
  {
    title: "Trucking",
    icon: "bi bi-truck",
    services: ["Web Development", "Branding", "Marketing"],
    link: "/our-work/",
  },
  {
    title: "Furniture",
    icon: "bi bi-lamp",
    services: ["UI & UX design", "Branding", "Marketing"],
    link: "/our-work/",
  },
  {
    title: "Data Science",
    icon: "bi bi-graph-up",
    services: ["UI & UX design", "Branding", "Marketing"],
    link: "/our-work/",
  },
  {
    title: "Ecommerce",
    icon: "bi bi-cart3",
    services: ["UI & UX design", "Branding", "Marketing"],
    link: "/our-work/",
  },
];

const workProcess = [
  {
    title: "Idea",
    icon: "bi bi-lightbulb",
    description:
      "A great website or digital marketing plan starts with a concept.",
  },
  {
    title: "Blueprint",
    icon: "bi bi-map",
    description:
      "A carefully developed plan can take you from where you are to where you want to be.",
  },
  {
    title: "Design",
    icon: "bi bi-pen",
    description:
      "Our expert designers create effective and visually appealing content.",
  },
  {
    title: "Launch",
    icon: "bi bi-rocket-takeoff",
    description:
      "The day you've been waiting for! Your website or digital marketing campaign goes live!",
  },
  {
    title: "Testing",
    icon: "bi bi-shuffle",
    description:
      "Ongoing testing pinpoints the most effective ways for your business to attract customers.",
  },
  {
    title: "Development",
    icon: "bi bi-pc-display",
    description:
      "Using regular data input, we refine your digital marketing to make it even more effective to beat the competition.",
  },
];
const clientReviews = [
  {
    name: "Gogi Luthra",
    time: "5 years ago",
    avatar: "G",
    review:
      "Professional and knowledgeable team. I will recommend them for your digital advertising and website needs!",
  },
  {
    name: "Paramjit Singh Bhatia",
    time: "6 years ago",
    avatar: "P",
    review:
      "Light speed is the best in digital marketing, and their customer service is excellent. Thanks Light Speed Web Inc...",
  },
  {
    name: "Joyce Rodriguez",
    time: "6 years ago",
    avatar: "J",
    review:
      "When we hired Light Speed Web Inc. three years ago, it was the best decision we made. They manage our website and do all the...",
  },
  {
    name: "Eleanor Kong",
    time: "6 years ago",
    avatar: "E",
    review:
      "We have had the pleasure of working with the team at Light Speed Web for a few years now, and we are happy with how...",
  },
];
function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const duration = 2800;
    const startTime = performance.now();
    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, target]);

  return (
    <span ref={counterRef} className="lsw-stat-number">
      {count}
      <sup>+</sup>
    </span>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const visibleReviews = Array.from(
    { length: 4 },
    (_, index) =>
      clientReviews[
        (activeReview + index) % clientReviews.length
      ]
  );

  const previousReview = () => {
    setActiveReview(
      (current) =>
        (current - 1 + clientReviews.length) % clientReviews.length
    );
  };

  const nextReview = () => {
    setActiveReview(
      (current) => (current + 1) % clientReviews.length
    );
  };
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Services Section */}
      <section id="services" className="lsw-services">
        <div className="container-fluid px-4 px-lg-5">
          <h2 className="lsw-services-title">
            What <span>We Do?</span>
          </h2>

          <div className="row g-4 lsw-services-grid">
            {services.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 service-reveal"
                key={service.title}
                style={
                  {
                    "--delay": `${index * 150}ms`,
                  } as CSSProperties
                }
              >
                <a href={service.link} className="lsw-service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="lsw-service-image">
                    <img
                      src={service.image}
                      alt={service.alt}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="lsw-why-us" id="why-us">
        <div className="lsw-why-container">
          <h2 className="lsw-why-title">
            <span>Why</span> Us
          </h2>

          <p className="lsw-why-description">
            We have been ranked as a top mobile and web development
            company by the industry’s top reviewers.
          </p>

          <div className="lsw-stats-grid">
            {stats.map((stat) => (
              <div className="lsw-stat-item" key={stat.label}>
                <Counter target={stat.number} />
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* HI-Tech Industry Solutions */}
      <section className="lsw-industries" id="industries">
      <div className="lsw-industries-container">
        <header className="lsw-industries-header">
          <h2>
            <span>HI-Tech</span> Industry Solutions
          </h2>

          <p>Tailor-made for different type of industries</p>
        </header>

        <div className="lsw-industries-grid">
          {industries.map((industry) => (
            <Link
              href={industry.link}
              className="lsw-industry-card"
              key={industry.title}
            >
              <div className="lsw-industry-icon">
                <i className={industry.icon} aria-hidden="true" />
              </div>

              <div className="lsw-industry-content">
                <h3>{industry.title}</h3>

                <div className="lsw-industry-services">
                    {industry.services.map((service, index) => (
                        <span key={service}>
                        {service}
                        {index < industry.services.length - 1 ? "," : ""}
                        </span>
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="lsw-industries-footer">
          <Link href="/our-work/" className="lsw-industries-view-more">
            View More
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    {/*Work Process */}
    <section
      ref={sectionRef}
      className={`lsw-work-process ${isVisible ? "is-visible" : ""}`}
      id="work-process"
    >
      <div className="lsw-work-process-inner">
        <header className="lsw-work-process-header">
          <h2 className="lsw-process-heading-animate">
            <span>WORK</span> PROCESS
          </h2>

          <p className="lsw-process-description-animate">
            We choose the best development methodology depending on your
            project, ensuring the lowest TAT along with the lowest
            development cost.
          </p>
        </header>

        <div className="lsw-process-grid">
          {workProcess.map((step, index) => (
            <div
              className="lsw-process-item"
              key={step.title}
              style={
                {
                  "--process-delay": `${index * 180}ms`,
                } as CSSProperties
              }
            >
              <div className="lsw-process-heading">
                <span className="lsw-process-icon">
                  <i className={step.icon} aria-hidden="true" />
                </span>

                <h3>{step.title}</h3>
              </div>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/*CLIENT REVIEWS SECTION */}
    <section className="lsw-client-reviews" id="client-reviews">
      <div className="lsw-reviews-container">
        <h2 className="lsw-reviews-title">
          First Impression, <span>Our Clients</span>
        </h2>

        <div className="lsw-reviews-carousel">
          <button
            type="button"
            className="lsw-review-arrow lsw-review-prev"
            onClick={previousReview}
            aria-label="Previous reviews"
          >
            &#8249;
          </button>

          <div className="lsw-reviews-grid">
            {visibleReviews.map((review, index) => (
              <article
                className="lsw-review-card"
                key={`${review.name}-${index}`}
              >
                <div className="lsw-review-top">
                  <div className="lsw-review-avatar">
                    {review.avatar}
                  </div>

                  <div className="lsw-review-person">
                    <h3>{review.name}</h3>
                    <span>{review.time}</span>
                  </div>

                  <span
                    className="lsw-google-g"
                    aria-label="Google review"
                  >
                    G
                  </span>
                </div>

                <div
                  className="lsw-review-stars"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                  <span className="lsw-review-verified">✿</span>
                </div>

                <p className="lsw-review-text">
                  {review.review}
                </p>

                <a
                  className="lsw-review-read-link"
                  href="/reviews/"
                >
                  Read more
                </a>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="lsw-review-arrow lsw-review-next"
            onClick={nextReview}
            aria-label="Next reviews"
          >
            &#8250;
          </button>
        </div>

        <div className="lsw-reviews-footer">
          <a href="/reviews/" className="lsw-reviews-read-more">
            Read More <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>
    </section>
   {/*CTA section */}
    <section className="lsw-brand-cta-section">
      <div className="lsw-brand-cta">
        <div className="lsw-brand-cta-content">
          <h2>
            Transform your
            <br />
            <span>brand today!</span>
          </h2>

          <a href="/contact-us/" className="lsw-brand-cta-button">
            Let’s Discuss a project
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="lsw-brand-cta-image" aria-hidden="true" />
      </div>
    </section>
    </>
  );
}
