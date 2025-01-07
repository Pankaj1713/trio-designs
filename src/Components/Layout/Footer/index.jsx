import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#121618] text-white py-12 mt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-4xl font-semibold pb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            At Trio Clothing, we believe that fashion is more than just clothing
            – it’s a reflection of individuality and confidence. Our mission is
            to provide high-quality, stylish, and comfortable apparel that fits
            seamlessly into your lifestyle. Whether you're dressing for work, a
            night out, or casual weekends, we craft pieces that inspire.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-semibold pb-4">Quick Links</h2>
          <ul className="text-gray-400 space-y-3">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/our-clients" className="hover:text-white transition">
                Our Clients
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl font-semibold pb-4">Contact</h2>
          <p className="text-gray-400 leading-relaxed">
            Trio Clothing Pvt Ltd. <br /> A35 Sector 65, Noida <br />
          </p>
          <p className="text-gray-400 mt-4">Email: hello@triosdesigns.com</p>
          <p className="text-gray-400">Phone: +91 9810047539</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12">
        <p>
          &copy; {new Date().getFullYear()} Trio Clothing Pvt Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
