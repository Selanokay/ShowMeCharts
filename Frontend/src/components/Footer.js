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
      <section className="footer-info d-flex justify-content-center">
        <section className="footer-info-left text-center">
          <section className="footer-info__name">
            <h4>ShowMeCharts</h4>
          </section>
          <section className="footer-info__returns">
            Returns Policy <br /> Delivery
          </section>
        </section>
        <section className="footer-info-center text-center">
          <section className="footer-info__email">projectgraphing@gmail.com</section>
          <section className="footer-info__terms">
          </section>
        </section>
        <section className="footer-info-right text-center">
          <section className="footer-info__number">99999999999</section>
        </section>
      </section>
      <hr className="footer-separator" />
    </section>
  );
}

export default Footer;
