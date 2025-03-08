import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import "../App.css";

function Navigation() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <nav className="container h-[8vh] bg-lightblue flex items-center justify-between px-15 lg:px-0">
        <h1 className="text-3xl font-semibold font-mont text-gray-900 tracking-widest">
          SECTS
        </h1>

        <ul className="flex items-center justify-center">
          <li>
            <Link
              to="/"
              className="text-black py-3 px-6 text-base hover:rounded-lg hover:bg-blue-300 transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-black py-3 px-6 text-base hover:rounded-lg hover:bg-blue-300 transition-all duration-200"
            >
              About
            </Link>
          </li>

          {/* Features with Dropdown */}
          <li className="relative group">
            <Link
              to="#"
              className="flex items-center gap-2 text-black py-3 px-6 text-base hover:rounded-lg hover:bg-blue-300 transition-all duration-200"
            >
              Features
              <IoIosArrowDropdown />
            </Link>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 w-max mt-2 p-3 z-15 bg-blue-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 divide-y divide-gray-400 translate-y-2 group-hover:translate-y-0">
              <li>
                <Link
                  to="#"
                  className="block px-6 py-3 hover:bg-blue-300 text-base text-black transition-all"
                >
                  Bill Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-6 py-3 hover:bg-blue-300 text-base text-black transition-all"
                >
                  Energy Consumption Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-6 py-3 hover:bg-blue-300 text-base text-black transition-all"
                >
                  Save Energy (Optimization Suggestions)
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to=""
              className="text-black py-3 px-6 text-base hover:rounded-lg hover:bg-blue-300 transition-all duration-200"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="login"
              className={`text-gray-100 ml-5 py-3 px-6 base bg-cta-blue rounded-lg font-semibold hover:bg-blue-400  transition-all duration-200`}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
