import React from "react";
import './css/Contact.css'

export default function Contact() {
  return (
    <div>
      <section className="contactSection">

        <h2 id="contactHeader">Contact Us</h2>

        <p className="contactPara">If you have any questions, feel free to reach us through the following:</p>

        <address className="contactContainer">
          <strong className="contactTitle">Phone:</strong> <a href="tel:+123456789">+44 791 2838813</a>
          <strong className="contactTitle">Email:</strong> <a href="mailto:info@example.com">dubaiAroma@outlook.com</a>
          <strong className="contactTitle">Address:</strong> 100 Commercial Road, London, England, E1 1NU
        </address>

      </section>
    </div>
  );
}

