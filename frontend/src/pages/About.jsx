import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewletterBox from "../components/NewletterBox";

const About = () => {
  return (
    <div>
      {/* ABOUT US Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 px-4">
        <img
          className="w-full md:max-w-[450px] rounded shadow"
          src={assets.about_img}
          alt="About Us"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At <strong>STARINNIGS OVERSES PRIVATE LIMITED</strong>, we believe
            fashion is more than just clothing — it’s a way to express identity,
            confidence, and creativity. Located in the heart of Ghaziabad, our
            brand is dedicated to delivering stylish, high-quality pieces that
            reflect modern elegance and timeless design.
          </p>

          <p>
            With a focus on innovation, craftsmanship, and customer
            satisfaction, our team works tirelessly to bring the latest trends
            to your wardrobe while ensuring a seamless shopping experience.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to inspire confidence through fashion by offering
            premium products that blend style, comfort, and quality. We aim to
            become a leading force in the fashion industry by building strong
            connections with our customers and exceeding their expectations.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="text-xl py-4 flex justify-center border-t">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 px-4 gap-6">
        {/* Quality Assurance */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-md shadow-sm">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We are committed to providing the finest quality in every piece.
            From fabric to finishing, every detail is carefully inspected to
            meet the highest standards.
          </p>
        </div>

        {/* Convenience */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-md shadow-sm">
          <b>Convenience</b>
          <p className="text-gray-600">
            Enjoy an easy and hassle-free shopping experience with secure
            payments, fast delivery, and responsive support — all at your
            fingertips.
          </p>
        </div>

        {/* Customer Service */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-md shadow-sm">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our customers are at the heart of everything we do. From order to
            delivery, we’re here to assist, guide, and ensure you're satisfied
            at every step.
          </p>
        </div>
      </div>

      <NewletterBox />
    </div>
  );
};

export default About;
