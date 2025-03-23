"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-5 py-3">
      <div className="container text-center">
        <div className="footer-content">
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/henriqueluza"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-github"></i> henriqueluza
            </a>
          </p>
          <p>
            <a href="mailto:henriqueluza@gmail.com" className="footer-link">
              <i className="fas fa-envelope"></i> henriqueluza@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
