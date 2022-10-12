import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="">
      <div className="navbar  bg-gradient-to-r from-stone-900 via-slate-900 to-stone-900">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-3xl font-bold text-white">
            Quiz Munia
          </a>
        </div>

        <div className="navbar-end lg:flex ">
          <div className="dropdown dropdown-end">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/" className="text-xl font-bold text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chart" className="text-xl font-bold text-black">
                  Chart
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-xl font-bold text-black">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="menu menu-horizontal p-0 hidden lg:flex">
              <li>
                <Link to="/" className="text-xl font-bold text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chart" className="text-xl font-bold text-white">
                  Chart
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-xl font-bold text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


{/* <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div> */}