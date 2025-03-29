import React from "react";
import "./Project.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const Project = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src="/project/banner.jpg" alt="" />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Overview
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut rem debitis laudantium voluptates. Velit earum soluta numquam beatae corrupti quod libero commodi at quas repellendus, voluptate labore eveniet saepe?
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Year
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              2025
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Category
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Short Film
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Running Time
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              10:45
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Directed by
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Alpha
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-1.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-2.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-3.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-4.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-5.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Editor
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Alpha
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Sound Design
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Alpha
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Art Director
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Alpha
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Producer
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Alpha
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Director
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Alpha
            </AnimatedCopy>
          </div>
        </section>

        <section className="next-project">
          <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
            02 - 05
          </AnimatedCopy>
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            Next
          </AnimatedCopy>

          <div className="next-project-img">
            <div className="next-project-img-wrapper">
              <ParallaxImage src="/work/work-2.jpg" alt="" />
            </div>
          </div>

          <AnimatedCopy tag="h4" animateOnScroll={true}>
            Market Pulse
          </AnimatedCopy>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Project);
