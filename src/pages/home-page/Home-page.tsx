import React, { useEffect, useState } from "react";
import "./Home-page.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import TypeAnimationComponent from "../../components/TypeAnimation/TypeAnimation";
import samuHomeImage from "../../assets/samu_2.jpg";
import samuAboutImage from "../../assets/samu.jpg";
import Card from "../../components/Card/card";
import DownloadIcon from "@mui/icons-material/Download";

const HomePage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const keywords1 = [
    "Javascript",
    "Typescript",
    "Angular",
    "React",
    "Java",
    "Python",
    "Kotlin",
    "HTML",
    "React",
  ];

  const keywords2 = [
    "Spring Boot",
    "Git",
    "AWS",
    "SQL",
    "CSS",
    "PostgreSQL",
    "Cypress",
    "JUnit",
    "Jest",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="homepage" id="home">
      {/* Navigation Bar */}
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="_logo">
          Samu
        </a>
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
          <h5 className="_sub_title">An independent web developer</h5>
        </div>
        <div className="image-section">
          <img className="image" src={samuHomeImage} alt="Samu" />
        </div>
      </section>

      <section id="section" className="about-section">
        <div className="image-section">
          <img className="image" src={samuAboutImage} alt="Samu" />
        </div>
        <div className="text-section">
          <h3 className="_margin">Web developer based in Boston</h3>
          <div className="_sub_title">
            <p>
              I'm a passionate software developer with 8 years of programming
              experience and 3 years working in real-world production
              environments. I thrive in collaborative teams and take pride in
              building scalable, maintainable, and modern solutions.
            </p>
            <p>
              One of my most impactful roles involved maintaining a major
              product for an S&P 500 company, where I learned the importance of
              clean architecture, accountability, and delivering value under
              high standards. I’ve worked on both new, innovative projects and
              the improvement of legacy systems — both equally rewarding
              challenges.
            </p>
            <p>
              My skill set includes a range of modern technologies such as
              TypeScript, Angular, JavaScript, Java, Python, and more. I enjoy
              working across the full stack and bridging the gap between systems
              and user experience. I hold a Bachelor’s degree in Business
              Information Systems, giving me a strong foundation in both
              technology and business strategy.
            </p>
            <p>
              I believe that great software is built where technical excellence
              meets real-world value. I’m easygoing, growth-oriented, and driven
              by curiosity. I'm always eager to learn, improve, and contribute
              to meaningful, sustainable, and future-ready digital products.
              Thanks for visiting — I’d love the opportunity to help drive your
              team’s success.
            </p>
          </div>
          <div id="button_p" className="ac_btn btn">
            <DownloadIcon className="vertical-align-middle" />
            Download CV
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <ul className="projects-list">
          <Card />
        </ul>
      </section>

      <section id="preferred" className="preferred-section">
        <h2>Preferred Technologies:</h2>
        <div className="section">
          <div className="text-section center">
            {keywords1.map((keyword, idx) => (
              <p key={idx}>{keyword}</p>
            ))}
          </div>
          <div className="text-section center">
            {keywords2.map((keyword, idx) => (
              <p key={idx}>{keyword}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="form-section">
        <h2>Contact Me</h2>
        <p>
          If you’d like to get in touch, feel free to reach out via the form
          below:
        </p>

        {/* Contact Form */}
        <ContactForm />
      </section>

      <section id="Footer" className="Footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
