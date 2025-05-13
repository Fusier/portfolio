import React, { useState } from "react";
import "./Home-page.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import TypeAnimationComponent from "../../components/TypeAnimation/TypeAnimation";
import CloseIcon from "@mui/icons-material/Close";
import samuImage from "../../assets/samu_test.jpg";
import Card from "../../components/Card/card";
import DownloadIcon from "@mui/icons-material/Download";

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Toggle burger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnOverlayClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="burger-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <CloseIcon
            style={{ color: "white", fontSize: "2rem", cursor: "pointer" }}
          />
        </div>
        <ul className="menu-items">
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              My Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="overlay" onClick={closeMenuOnOverlayClick}></div>
      )}

      {/* About Section (Default Landing Section) */}
      <section id="about" className="section">
        <div className="image-section">
          <img className="image" src={samuImage} alt="Samu"></img>
        </div>
        <div className="text-section">
          <h4>
            <TypeAnimationComponent />
          </h4>
          <p>
            Hi, I’m Samu – a passionate and experienced software developer with
            over 8 years of programming experience and 3 years of hands-on work
            in real-world production environments. I thrive in dynamic teams and
            take pride in building scalable, maintainable, and forward-thinking
            solutions. Over the years, I’ve contributed to a wide range of
            projects, including a major product I maintained for an S&P 500
            company. That role taught me the value of accountability, clean
            architecture, and delivering real value under high expectations.
            I’ve had the opportunity to work both on the ground floor of new
            ideas and to improve legacy systems — something I find equally
            rewarding. My technical toolkit includes a wide array of modern
            technologies such as TypeScript, Angular, JavaScript, Java, Python,
            and many others listed throughout this site. Whether it's front-end
            frameworks or back-end architecture, I enjoy diving deep and
            bridging the gap between systems and user experiences. Academically,
            I hold a Bachelor’s degree in Business Information Systems, which
            gives me a strong foundation not only in tech but also in
            understanding the business drivers behind every project. I believe
            the best software is built when technical excellence aligns with
            real-world impact. I'm an easygoing, reliable team player with a
            strong inner drive to constantly learn, adapt, and grow. I’m
            motivated by challenges and excited by the opportunity to help shape
            the next generation of digital solutions — ones that are
            sustainable, scalable, and meaningful. Thanks for stopping by — I’d
            love to connect and see how I can contribute to your team’s success.
          </p>

          <div id="button_p" className="ac_btn btn">
            <DownloadIcon className="vertical-align-middle" />
            Download CV
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
          </div>
        </div>
      </section>

      <hr />

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <ul className="projects-list">
          <Card />
        </ul>
      </section>

      <hr />

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

      <hr />

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
