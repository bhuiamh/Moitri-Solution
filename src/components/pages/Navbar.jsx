import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-black bg-opacity-5 px-5">
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
              <a className="text-xl font-bold font-mono text-[#38aefc] hover:text-[#102330]">
                Home
              </a>
            </li>
            <li>
              <a className="text-xl font-bold font-mono text-[#38aefc] hover:text-[#102330]">
                Service
              </a>
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
              <a className="text-xl font-bold font-mono text-[#38aefc] hover:text-[#102330]">
                Blog
              </a>
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
            <a className="text-xl font-bold font-mono text-[#38aefc] hover:text-[#102330]">
              Home
            </a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="text-xl font-bold font-mono text-[#38aefc] hover:text-[#102330]">
                Service
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
            <a className="text-xl font-bold font-mono text-[#38aefc] hover:text-[#102330]">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="text-xl font-bold font-mono text-[#38aefc] hover:text-[#102330]">
          About Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
