import Link from "next/link";
import "../css/services.css";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites built to support your business growth.",
    link: "/services/web-development",
  },
  {
    title: "SEO",
    description:
      "Improve your search visibility and attract more qualified visitors to your website.",
    link: "/services/seo",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach the right audience with effective digital marketing and paid advertising strategies.",
    link: "/services/paid-advertising",
  },
  {
    title: "Branding & Social Media",
    description:
      "Build a strong brand identity and connect with your audience across social platforms.",
    link: "/services/branding-social-media",
  },
  {
    title: "CRM Solutions",
    description:
      "Streamline your customer relationships with powerful and customized CRM solutions.",
    link: "/services/crm",
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging digital experiences that your customers will love.",
    link: "/services/ui-ux",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">

        <div className="services-heading text-center" data-aos="fade-up">
          <span className="services-subtitle">
            OUR SERVICES
          </span>

          <h2>
            Digital Solutions for
            <span> Your Business</span>
          </h2>

          <p>
            We provide innovative digital solutions that help
            businesses grow, connect with customers and achieve
            their goals.
          </p>
        </div>

        <div className="row g-4">

          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="service-card">
                <div className="service-icon">+</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link href={service.link}>
                  Learn More →
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}