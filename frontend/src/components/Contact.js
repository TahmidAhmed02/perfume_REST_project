import React from "react";
import './css/Contact.css'

export default function Contact() {
  return (
    <div className="img">
      <section className="contactSection">

        <h2 id="contactHeader">Contact Us</h2>

        <p className="contactPara">If you have any questions, feel free to reach us through the following:</p>
        <p className="contactPara">(* Not real Contacts *)</p>

        <address className="contactContainer">
          <strong className="contactTitle">Phone: <a className="href" href="tel:+123456789">+44 791 2838813</a></strong>
          <strong className="contactTitle">Email: <a className="href" href="mailto:info@example.com">dubaiAroma@outlook.com</a></strong>
          <strong className="contactTitle">Address: <span className="href">100 Commercial Road, London, England, E1 1NU</span></strong>
        </address>

      </section>
    </div>
  );
}

