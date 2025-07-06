import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Style isn’t just what you wear — it’s how you express yourself.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Private Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <strong>Phone:</strong> +91 7240794868
            </li>
            <li>
              <strong>Email:</strong> communication@starinnigs1.com
            </li>
            <li>
              <strong>Address:</strong>
              <br />
              HARSHA CITY MALL FF-105 P,
              <br />
              SHAKTI KHAND-2, Makanpur,
              <br />
              Ghaziabad, Uttar Pradesh, India – 201014
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 forever.com-ALL Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
