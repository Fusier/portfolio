import React, { useEffect, useState } from "react";
import "./Home-page.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import TypeAnimationComponent from "../../components/TypeAnimation/TypeAnimation";
import samuHomeImage from "../../assets/samu_2.jpg";
import samuAboutImage from "../../assets/samu.jpg";
import MBTASchedule from "../../assets/MBTA_schedules.png";
import { motion } from "framer-motion";
import Card from "../../components/Card/card";
import DownloadIcon from "@mui/icons-material/Download";
import TechMarquee from "../../components/marquee";
import { useSectionTracker } from "../../hooks/useSectionTracker";

const HomePage: React.FC = () => {
  const sectionIds = ["about", "projects", "contact"];

  const activeSection = useSectionTracker(sectionIds);

  return (
    <div className="homepage" id="home">
      {/* Navigation Bar */}
      <div className="navbar">
        <a href="#home" className="_logo">
          Samu
        </a>
        <div className="_anchor">
          <ul className="nav-items">
            {sectionIds.map((id) => (
              <li
                key={id}
                className={`nav-item ${activeSection === id ? "active" : ""}`}
              >
                <a href={`#${id}`}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="home-section">
        <div className="text-section">
          <h4 className="_margin">
            <TypeAnimationComponent />
          </h4>
          <h5 className="_sub_title">An independent web developer</h5>
        </div>
        <div className="image-section">
          <img className="image" src={samuHomeImage} alt="Samu" />
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="image-section">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.4,
              margin: "200px",
            }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: 0.2,
            }}
          >
            <img className="image" src={samuAboutImage} alt="Samu" />
          </motion.div>
        </div>
        <div className="text-section">
          <motion.div
            initial={{ x: "80%", opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.6,
              margin: "200px",
            }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: 0.2,
            }}
          >
            <h3 className="_margin">Web developer based in Boston</h3>
            <div className="_sub_title">
              <p>
                I'm a passionate software developer with eight years of overall
                programming experience with over three of those in real-world
                production environments. I enjoy working in dynamic teams and
                take pride in building solutions that are scalable,
                maintainable, and future-ready.
              </p>
              <p>
                A highlight of my career was leading and maintaining a major
                product for an S&P 500 company, where I gained valuable
                experience in clean architecture, accountability, and delivering
                real business value at scale. I’ve worked on both innovative new
                projects and legacy systems — both offering unique challenges I
                enjoy solving. I'm well-versed in multiple front-end, back-end
                and cloud technologies. I love working across the full stack and
                bridging the gap between complex systems and great user
                experiences.
              </p>
              <p>
                I hold a degree in Business Information Systems, giving me a
                strong understanding of both technology and the business context
                that drives it. I believe the best software is built where
                technical quality meets strategic insight. I'm easygoing,
                curious, and constantly striving to improve. Whether it's
                refining old code or building something entirely new, I’m driven
                to create solutions that are not only effective today but
                sustainable for the future.
              </p>
            </div>
            <div id="button_p" className="ac_btn btn">
              <DownloadIcon className="vertical-align-middle" />
              Download CV
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-list">
          <Card
            image={MBTASchedule}
            title="MBTA schedules"
            infotext="Timetable for MBTA train schedules"
            link="https://mbta-infotable.pages.dev/"
          />
          <Card
            image="Video game mod"
            title="second project"
            infotext="This is a project I've made"
          />
          <Card
            image="Temperature meter"
            title="third project"
            infotext="This is a project I've made"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="programming-bg-section">
        <div className="programming-bg-content">
          <h2 className="white-text">Let's work together</h2>
          <p className="white-text">
            If you’d like to get in touch, feel free to reach out via the form
            below:
          </p>
          <ContactForm />
        </div>

        {/* Contact Form */}
      </section>

      <section id="Footer" className="Footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
