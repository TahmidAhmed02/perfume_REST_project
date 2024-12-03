import React from "react";
import './css/About.css'

export default function About() {
  return (
    <div className="all">
      <section className="aboutSection">
        <h1 className="title">ABOUT US</h1>
          <p className="para">
             Welcome to <strong>Dubai Aroma</strong>, your premier destination for high-quality clothing and exquisite perfumes. We pride ourselves on serving both retail and wholesale customers with a wide range of products that cater to modesty, elegance, and authenticity. Our mission is to provide clothing and fragrances that embraces timeless fashion and luxury.
          </p>
      </section>

      <section className="aboutVision">
        <h2 className="title">Our Vision</h2>
        <p className="para">
          At <strong>Dubai Aroma</strong>, our vision is to provide the best clothing and fragrances available on the market for individuals and businesses
        </p>
      </section>

      <section className="aboutValues">
        <h2 className="values">Our Values</h2>
        <ul className="para">
          <li><strong>Quality:</strong> We offer products crafted from the finest materials, ensuring durability and comfort.</li>
          <li><strong>Effeciency:</strong> Our business ensures that there is always someone at hand to help you with your enquiries and deliveries</li>
          <li><strong>Inclusivity:</strong> We celebrate diversity and aim to serve customers of all backgrounds and needs.</li>
        </ul>
      </section>
    </div>
  );
}

