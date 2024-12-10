import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg rounded-b-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h2 className="text-3xl font-extrabold text-yellow-400">
          My Website
        </h2>
        <nav className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-yellow-300 transition-colors duration-300 ${
                isActive ? "underline font-semibold text-yellow-300" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `text-white hover:text-yellow-300 transition-colors duration-300 ${
                isActive ? "underline font-semibold text-yellow-300" : ""
              }`
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-white hover:text-yellow-300 transition-colors duration-300 ${
                isActive ? "underline font-semibold text-yellow-300" : ""
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/createuser"
            className={({ isActive }) =>
              `text-white hover:text-yellow-300 transition-colors duration-300 ${
                isActive ? "underline font-semibold text-yellow-300" : ""
              }`
            }
          >
            Create User
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
