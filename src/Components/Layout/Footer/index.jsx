import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
