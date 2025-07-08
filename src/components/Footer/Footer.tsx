import React from "react";
import "./Footer.scss";
import { SocialIcon } from "react-social-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Reach out to me</h3>
          <p>Samu Willman</p>
          <p>samu.willman.work@gmail.com</p>
          <p>+1 (123) 456-7890</p>
        </div>

        <div className="socials">
          <h3>Socials</h3>
          <SocialIcon url="www.github.com" />
          <SocialIcon url="www.github.com" />
          <SocialIcon url="www.github.com" />
          <SocialIcon url="www.linkedin.com" />
          <SocialIcon url="www.github.com" />
          <SocialIcon url="www.facebook.com" />
        </div>
      </div>

      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Samu Willman. All rights reserved.
          Source code: Github@Fusier
        </p>
      </div>
    </footer>
  );
};

export default Footer;
