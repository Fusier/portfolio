import React, { useEffect, useState } from "react";
import "./Home-page.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import TypeAnimationComponent from "../../components/TypeAnimation/TypeAnimation";
import samuImage from "../../assets/samu.jpg";
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
    <div className="homepage">
      {/* Navigation Bar */}
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
