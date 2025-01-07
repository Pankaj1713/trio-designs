import React, { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#A28140]"
      : "hover:text-[#A28140]";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-black md:text-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 py-5">
        <div className="text-xl font-bold text-white">
          <Link to="/">Trio Designs Logo</Link>
        </div>

        <div className="hidden md:flex gap-x-8">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="about-us" className={getLinkClass("/about-us")}>
            About Us
          </Link>
          <Link to="our-clients" className={getLinkClass("/our-clients")}>
            Our Clients
          </Link>
          <Link to="products" className={getLinkClass("/products")}>
            Products
          </Link>
          <Link to="gallery" className={getLinkClass("/gallery")}>
            Gallery
          </Link>
          <Link to="contact-us" className={getLinkClass("/contact-us")}>
            Contact Us
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button ref={buttonRef} onClick={toggleMenu} className="text-xl ">
            <IoMenu className="text-white"/>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4"
        >
          <div className="flex flex-col items-start gap-y-4 px-4">
            <Link
              to="/"
              className={getLinkClass("/")}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about-us"
              className={getLinkClass("/about-us")}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="our-clients"
              className={getLinkClass("/our-clients")}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Clients
            </Link>
            <Link
              to="products"
              className={getLinkClass("/products")}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="contact-us"
              className={getLinkClass("/contact-us")}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
