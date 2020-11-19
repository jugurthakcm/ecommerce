import React from 'react';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <div className="footer__links">
        <a href="/">About</a>
        <a href="/">Store locator</a>
        <a href="/">Faq</a>
        <a href="/">News</a>
        <a href="/">Contact us</a>
      </div>
      <div className="footer__copyright">
        <p>© Developed by KACIMI Jugurtha. {date.getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
