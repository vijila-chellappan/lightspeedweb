export default function Hero() {
  return (
    <section id="hero" className="hero section dark-background">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source
          src="/videos/hero-background.mp4"
          type="video/mp4"
        />
      </video>

      <div className="container position-relative">

        {/* Hero Heading */}
        <div className="welcome position-relative text-center">

          <div className="hero-tagline">
            LIGHT SPEED WEB: MARKETING IN MOTION.
          </div>

          <h1>
            Ignite Your Vision.
            <br />
            Accelerate Your Reach.
          </h1>

          <p>
            Innovative digital solutions designed to turn your ideas
            into powerful online experiences and measurable business growth.
          </p>

        </div>


        {/* Marketing Boxes */}
        <div className="hero-boxes row g-4 mt-4">

          {/* Box 1 */}
          <div className="col-lg-3 col-md-6 d-flex">

            <div className="hero-feature-box w-100">

              <div className="hero-icon">
                <i className="bi bi-lightbulb"></i>
              </div>

              <h3>Ignite Your Vision</h3>

              <p>
                Build a powerful digital presence with modern,
                responsive and conversion-focused websites.
              </p>

              <span className="hero-box-link">
                Explore Solutions →
              </span>

            </div>

          </div>


          {/* Box 2 */}
          <div className="col-lg-3 col-md-6 d-flex">

            <div className="hero-feature-box w-100">

              <div className="hero-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>

              <h3>Accelerate Your Reach</h3>

              <p>
                Reach the right audience through SEO, digital marketing
                and strategies designed to grow your business.
              </p>

              <span className="hero-box-link">
                Grow Your Business →
              </span>

            </div>

          </div>


          {/* Box 3 */}
          <div className="col-lg-3 col-md-6 d-flex">

            <div className="hero-feature-box w-100">

              <div className="hero-icon">
                <i className="bi bi-stars"></i>
              </div>

              <h3>AI Innovation</h3>

              <p>
                Transform your business with AI-powered automation,
                intelligent solutions and smarter workflows.
              </p>

              <span className="hero-box-link">
                Discover AI →
              </span>

            </div>

          </div>


          {/* Box 4 */}
          <div className="col-lg-3 col-md-6 d-flex">

            <div className="hero-feature-box w-100">

              <div className="hero-icon">
                <i className="bi bi-diagram-3"></i>
              </div>

              <h3>CRM Optimization</h3>

              <p>
                Improve customer relationships, automate processes
                and turn more leads into loyal customers.
              </p>

              <span className="hero-box-link">
                Optimize Your CRM →
              </span>

            </div>

          </div>

        </div>


        {/* Bottom Marketing Message */}
        <div className="hero-bottom-text text-center">

          <span>🚀</span>

          AI INNOVATION
          <b>•</b>
          CRM OPTIMIZATION
          <b>•</b>
          DIGITAL MARKETING EVOLUTION

        </div>

      </div>

    </section>
  );
}