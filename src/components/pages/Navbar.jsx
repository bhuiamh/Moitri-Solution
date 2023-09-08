import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar bg-black bg-opacity-10 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-80"
          >
            <li>
              <Link
                className="text-xl font-bold text-[#38aefc] font-mono hover:text-[rgb(16,35,48)]"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <NavLink
                className={`${
                  location.pathname !== "/service"
                    ? "text-[#38aefc]"
                    : "text-[rgb(16,35,48)]"
                } text-xl font-bold text-[#38aefc] font-mono hover:text-[rgb(16,35,48)]`}
                to="/service"
              >
                Service
              </NavLink>
              <ul className="p-2 my-3 rounded bg-black bg-opacity-5">
                <li>
                  <a className="text-[17px]">TAX Consultancy</a>
                </li>
                <li>
                  <a className="text-[17px]">VAT Consultancy </a>
                </li>
                <li>
                  <a className="text-[17px]">Financial Consultancy </a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                className={`${
                  location.pathname !== "/blog"
                    ? "text-[#38aefc]"
                    : "text-[rgb(16,35,48)]"
                } text-xl font-bold text-[#38aefc] font-mono hover:text-[rgb(16,35,48)]`}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <img
          className="w-40 hover:bg-slate-400 p-3 rounded-lg"
          alt="Icon"
          src="/icon.png"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={
                "text-xl font-bold text-[#38aefc] font-mono hover:text-[rgb(16,35,48)]"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="text-xl font-bold font-mono text-[#38aefc] hover:text-[#102330]">
                <NavLink
                  className={`${
                    location.pathname !== "/service"
                      ? "text-[#38aefc]"
                      : "text-[rgb(16,35,48)]"
                  } text-xl font-bold text-[#38aefc] font-mono hover:text-[rgb(16,35,48)]`}
                  to="/service"
                >
                  Service
                </NavLink>
              </summary>
              <ul className="p-2 w-80 bg-black bg-opacity-10">
                <li>
                  <a className="text-[17px]">TAX Consultancy</a>
                </li>
                <li>
                  <a className="text-[17px]">VAT Consultancy </a>
                </li>
                <li>
                  <a className="text-[17px]">Financial Consultancy </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink
              className={`${
                location.pathname !== "/blog"
                  ? "text-[#38aefc]"
                  : "text-[rgb(16,35,48)]"
              } text-xl font-bold text-[#38aefc] font-mono hover:text-[rgb(16,35,48)]`}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink
          className={`${
            location.pathname !== "/about"
              ? "text-[#38aefc]"
              : "text-[rgb(16,35,48)]"
          } text-xl font-bold text-[#38aefc] font-mono hover:text-[rgb(16,35,48)]`}
          to="/about"
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
