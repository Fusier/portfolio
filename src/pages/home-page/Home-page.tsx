import React from "react";
import "./Home-page.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import TypeAnimationComponent from "../../components/TypeAnimation/TypeAnimation";
import samuHomeImage from "../../assets/black_test4.jpg";
import samuAboutImage from "../../assets/samu_casual.jpg";
import MBTASchedule from "../../assets/MBTA_schedules.png";
import { motion } from "framer-motion";
import Card from "../../components/Card/card";
import DownloadIcon from "@mui/icons-material/Download";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Button } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <div className="homepage" id="home">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="_anchor">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">My Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>

      <section className="home-section">
        <div className="text-section">
          <h4 className="_margin">
            <TypeAnimationComponent />
          </h4>
          <h5 className="sub-title">An independent web developer</h5>
        </div>
        <div className="image-section">
          <img className="image" src={samuHomeImage} alt="Samu" />
        </div>
        <div className="social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color={"white"} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} color={"white"} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color={"white"} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color={"white"} />
          </a>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2 className="about-title">About me</h2>
        <div className="about-content">
          <div className="image-section">
            <img className="image" src={samuAboutImage} alt="Samu" />
          </div>
          <div className="text-section">
            <h2 className="top-title">Who am I?</h2>
            <h3 className="margin">Bostonian with that Finnishing touch 😉</h3>
            <div className="sub-title">
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
              <p className="border-bottom">
                I'm originally from Finland, which has definitely influenced how
                I approach work — practical, focused, and always aiming for
                clean, efficient solutions. Outside of development, I stay
                active by going to the gym, and when I have some extra free
                time, I enjoy playing video games. Both help me recharge, stay
                sharp, and think creatively — whether I'm problem-solving in
                code or just taking a breather between projects.
              </p>
            </div>
            <div className="contact-info">
              <p>Name: Samu Willman</p>
              <p>Email: samu.willman.usa@gmail.com</p>
              <p>Phone Number: +1 (617) 581-8784</p>
              <p>Spoken Languages: Finnish, English, Swedish</p>
            </div>
            <div className="padding-top">
              <Button
                variant="contained"
                className="button-color"
                sx={{
                  borderRadius: 0,
                }}
                startIcon={<DownloadIcon className="vertical-align-middle" />}
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume-section"></section>

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

      <section id="contact-me" className="contact-me">
        <ContactForm></ContactForm>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
