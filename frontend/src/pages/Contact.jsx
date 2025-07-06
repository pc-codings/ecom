import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewletterBox from "../components/NewletterBox";

const Contact = () => {
  return (
    <div className="text-center text-2xl pt-10 border-t">
      <Title text1={"CONTACT"} text2={"US"} />

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 px-4">
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-md"
          src={assets.contact_img}
          alt="Contact"
        />

        <div className="flex flex-col justify-center items-start gap-6 text-left">
          <p className="font-semibold text-xl text-gray-700">Company Name</p>
          <p className="text-gray-600">STARINNIGS OVERSES PRIVATE LIMITED</p>

          <p className="font-semibold text-xl text-gray-700">Address</p>
          <p className="text-gray-600">
            HARSHA CITY MALL FF-105 P, SHAKTI KHAND-2, <br />
            Makanpur, Ghaziabad, Uttar Pradesh, 201014, India
          </p>

          <p className="font-semibold text-xl text-gray-700">Contact</p>
          <p className="text-gray-600">
            Tel: (+91) 7240794868 <br />
            Email: communication@starinnigs1.com
          </p>

          <p className="font-semibold text-xl text-gray-700">
            Careers at Starinnigs
          </p>
          <p className="text-gray-600">Learn more about us</p>
          <button className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewletterBox />
    </div>
  );
};

export default Contact;
