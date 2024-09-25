import React from 'react';
import './Home-page.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';

const HomePage: React.FC = () => {

  return (
    <div className="homepage">
    {/* Navigation Bar */}
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">My Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>

    {/* About Section (Default Landing Section) */}
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer with expertise in building scalable web applications.
        I specialize in React, TypeScript, and Node.js. I enjoy creating open-source projects
        and continuously learning new technologies.
      </p>
    </section>

    <hr/>

    {/* Projects Section */}
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <ul className="projects-list">
        <li>
          <h3>Project One</h3>
          <p>A full-stack application built using React and Node.js.</p>
        </li>
        <li>
          <h3>Project Two</h3>
          <p>An eCommerce platform built using TypeScript and Express.js.</p>
        </li>
        <li>
          <h3>Project Three</h3>
          <p>A mobile-friendly website using modern CSS techniques.</p>
        </li>
      </ul>
    </section>

    <hr/>

{
    //<section id="preferred" className="preferred-section">
      //  <h2>Preferred technologies:</h2>

    //</section>
}
      <hr/>

    {/* Contact Section */}
    <section id="form" className="form-section">
        <h2>Contact Me</h2>
        <p>If you’d like to get in touch, feel free to reach out via the form below:</p>

        {/* Contact Form */}
        <ContactForm />
      </section>

    <section id="Footer" className="Footer-section">
      <Footer/>
        
    </section>

  </div>
  );
};

export default HomePage;