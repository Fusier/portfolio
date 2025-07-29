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
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Button } from "@mui/material";
import ResumeItem from "../../components/ResumeItem/resumeItem";

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
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="image-section">
            <img className="image" src={samuAboutImage} alt="Samu" />
          </div>
          <div className="text-section">
            <h2 className="top-title">Who am I?</h2>
            <h3 className="margin">Bostonian with that Finnishing touch 😉</h3>
            <div className="sub-title">
              <p className="sub-text">
                I'm a passionate software developer with eight years of overall
                programming experience with over three of those in real-world
                production environments. I enjoy working in dynamic teams and
                take pride in building solutions that are scalable,
                maintainable, and future-ready.
              </p>
              <p className="sub-text">
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
              <p className="sub-text">
                I hold a degree in Business Information Systems, giving me a
                strong understanding of both technology and the business context
                that drives it. I believe the best software is built where
                technical quality meets strategic insight. I'm easygoing,
                curious, and constantly striving to improve. Whether it's
                refining old code or building something entirely new, I’m driven
                to create solutions that are not only effective today but
                sustainable for the future.
              </p>
              <p className="border-bottom sub-text">
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
              <p>
                Name: <span className="sub-text"> Samu Willman</span>
              </p>
              <p>
                Email:{" "}
                <span className="sub-text "> samu.willman.usa@gmail.com</span>
              </p>
              <p>
                Phone Number:{" "}
                <span className="sub-text"> +1 (617) 581-8784</span>
              </p>
              <p>
                Spoken Languages:
                <span className="sub-text"> Finnish, English, Swedish</span>
              </p>
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

      <section id="resume" className="resume-section">
        <div className="resume-list">
          <div>
            <ResumeItem
              title="Bitwise Oy"
              subTitle="04/2022 - 11/2024"
              description="Co-managed a large S&P 500 company product."
            ></ResumeItem>
            <ResumeItem
              title="Monad Oy"
              subTitle="04/2021 - 10/2021"
              description="Developer on an easy-to-use hour logging tool NoTime™"
            ></ResumeItem>
            <ResumeItem
              title="Tampere University of Applied Sciences"
              subTitle="06/2018 - 06/2024"
              description="Graduated as a Bachelor of Business Information Systems"
            ></ResumeItem>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Featured Project</h2>
        <div className="project">
          <Card
            image={MBTASchedule}
            title="MBTA schedules"
            infotext="Timetable for MBTA train schedules"
            link="https://mbta-infotable.pages.dev/"
          />
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <div className="form-section">
          <div className="column">
            <h3 className="message-me">Message Me</h3>
            <ContactForm />
          </div>
          <div className="column">
            <h3 className="contact-title">Contact Information</h3>
            <div className="contact-text">
              <p className="sub-text contact-title">
                Currently living in Boston but available for projects all around
                USA. Don't hesitate to contact me whether it's a work
                opportunity or a freelance project!
              </p>
              <div className="contact-item">
                <FaPhoneAlt
                  className="icon"
                  color="deepskyblue"
                  size={"30px"}
                />
                <p className="sub-text">+1 (617) 581-8784</p>
              </div>
              <div className="contact-item">
                <MdEmail className="icon" color="deepskyblue" size={"30px"} />
                <p className="sub-text">samu.willman.usa@gmail.com</p>
              </div>
              <div className="contact-item">
                <FaLocationDot
                  className="icon"
                  color="deepskyblue"
                  size={"30px"}
                />
                <p className="sub-text">Boston, MA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
