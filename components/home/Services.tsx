
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

export default function Services() {
  return (
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
                { "--delay": `${index * 150}ms` } as React.CSSProperties
              }
            >
              <a href={service.link} className="lsw-service-card">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="lsw-service-image">
                  <img src={service.image} alt={service.alt} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
