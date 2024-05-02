import React from "react";

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-separator" />
      <section className="footer-social-media text-center">
        <a href="/" target="_blank" rel="noopener noreferrer">
          Home
        </a>
      </section>
      <section className="footer-info d-flex justify-content-center mb-4">
        <section className="footer-info-left text-center me-4">
          <section className="footer-info__name">
            <h4 className="mb-0">ShowMeCharts</h4>
          </section>
        </section>
        <section className="footer-info-center text-center ms-4">
          <section className="footer-info__email">
            Contact Us: projectgraphing@gmail.com
          </section>
        </section>
      </section>
    </section>
  );
}

export default Footer;
