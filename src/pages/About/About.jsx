import React from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const About = () => {
  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <h1>Born</h1>
          <h1>Limitless</h1>
        </section>

        <section className="about-hero">
          <div className="about-hero-img">
            <img src="/about/about-hero.jpg" alt="Alpha's Vision" />
          </div>
        </section>

        <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <AnimatedCopy animateOnScroll={true} tag="h3">
              I'm Alpha — a polymath who thrives at the intersection of technology, business, and creativity. I shape ideas, engineer solutions, and drive innovation that redefines industries.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              My philosophy is simple: Every problem has a solution, and every challenge is an opportunity. With a relentless pursuit of excellence, I craft experiences that inspire, disrupt, and elevate.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              Whether leading a product, building scalable tech, or designing the next big thing — my work is driven by vision, precision, and an obsession with perfection.
            </AnimatedCopy>
          </div>
        </section>

        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              <img src="/about/services-banner.jpg" alt="" />
            </div>
            <p className="primary">Innovation with Intention</p>
          </div>
          <div className="services-col">
            <h4>
              Every project is an evolution — a bold step towards something extraordinary. I blend strategy, creativity, and execution to build products that leave a mark.
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Product Engineering</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    From ideation to deployment, I architect seamless solutions that push boundaries. Whether it's software, AI, or a disruptive startup — my craft is building the future.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Strategic Leadership</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    I translate ideas into impact. From managing cross-functional teams to driving market expansion, I navigate the intersection of business, technology, and growth.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Creative Direction</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    Design isn’t just aesthetics; it’s experience. I bring a meticulous approach to user interaction, storytelling, and branding — ensuring every product resonates with its audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-banner-img">
          <div className="about-banner-img-wrapper">
            <img src="/about/about-banner.jpg" alt="" />
          </div>
        </section>

        <section className="fav-tools">
          <div className="fav-tools-header">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              The Essential Stack
            </AnimatedCopy>
            <AnimatedCopy tag="h2" animateOnScroll={true} delay={0.25}>
              Alpha’s Toolkit
            </AnimatedCopy>
            <AnimatedCopy
              tag="p"
              animateOnScroll={true}
              className="secondary"
              delay={0.5}
            >
              I work with the most powerful technologies, frameworks, and methodologies to craft precision-driven solutions that perform at scale.
            </AnimatedCopy>
          </div>

          <div className="fav-tools-list">
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-1.jpg" alt="" />
                </div>
                <h4>Next.js</h4>
                <p className="primary sm">Scalable Web Applications</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-2.jpg" alt="" />
                </div>
                <h4>Figma</h4>
                <p className="primary sm">User Experience & Design</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-3.jpg" alt="" />
                </div>
                <h4>Python</h4>
                <p className="primary sm">AI & Data Intelligence</p>
              </div>
            </div>
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-4.jpg" alt="" />
                </div>
                <h4>React Native</h4>
                <p className="primary sm">Mobile-First Experiences</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-5.jpg" alt="" />
                </div>
                <h4>Docker</h4>
                <p className="primary sm">Seamless Deployments</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-6.jpg" alt="" />
                </div>
                <h4>TensorFlow</h4>
                <p className="primary sm">Machine Learning & AI</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
