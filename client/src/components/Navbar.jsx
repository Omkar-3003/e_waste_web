import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "/logo.svg";
import profilePhoto from "../assets/images/profile.png";

const Navbar = () => {
  const [colorChange, setColorchange] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange("bg-white shadow-md");
    } else {
      setColorchange("");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <header
      className={
        "sticky top-0 z-50 text-gray-600 body-font test-nav " + colorChange
      }
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="logo" />
          <span className="ml-3 text-xl">Green Vault</span>
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="mr-5 hover:text-green-600">
            About
          </Link>
          <Link to="/edumpers" className="mr-5 hover:text-green-600">
            E-Dumpers
          </Link>
          <Link to="/blogs" className="mr-5 hover:text-green-600">
            Blogs
          </Link>
          <Link to="/points" className="mr-5 hover:text-green-600">
            Points
          </Link>
          <Link to="/recycle" className="mr-5 hover:text-green-600">
            Recycle
          </Link>
        </nav>

        {/* Login Button */}
        <button
          className="inline-flex items-center bg-gray-100 border-0 py-2 px-5 focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0"
          onClick={() => navigate("/login")} // Navigate to login page on click
        >
          Login
        </button>

        {/* Profile Icon */}
        <img
          className="w-10 h-10 rounded-full ml-4"
          src={profilePhoto}
          alt="Rounded avatar"
        />
      </div>
    </header>
  );
};

export default Navbar;
