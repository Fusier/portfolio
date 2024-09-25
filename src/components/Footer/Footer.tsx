import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Social Links Section */}
      <div className="socials">
        <a href="https://github.com/Fusier" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/samu-willman" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://facebook.com/SamuWillman" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Samu Willman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
