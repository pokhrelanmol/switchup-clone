import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="h-20 mix-blend-darken shadow-md flex justify-around items-center  ">
      <div className="cursor-pointer">
        <Link to="/">
          <img
            className=" h-10 sm:h-14 cursor-pointer object-contain"
            src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/SU-logo-polished-d/original.png?1628697059"
            alt="Logo"
          />
        </Link>
      </div>
      {/* navlinks */}
      {show ? (
        <ul className="flex flex-col md:flex-row pt-48   md:p-0 ">
          <li className=" group relative cursor-pointer pl-24  text-base tracking-wide ">
            <Link to="/" className="flex">
              Bootcamps Ranking
              <svg
                className="fill-current text-gray-500"
                xmlns="http:// www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M7 10l5 5 5-5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </Link>
            <div className="group-hover:block  absolute hidden z-10 ">
              <ul className=" w-72 shadow-md px-6 py-6 bg-gray-100">
                <li className="py-1">
                  <NavLink to="/" className="  links ">
                    Best Online Bootcamps
                  </NavLink>
                </li>
                <li className="py-1">
                  <NavLink to="/" className="links">
                    Best Coding Bootcamps
                  </NavLink>
                </li>
                <li className="py-1">
                  <NavLink to="/" className="links">
                    Best Data Science Bootcamps
                  </NavLink>
                </li>
                <li className="py-1">
                  <NavLink to="/" className="links">
                    Best Web Design Bootcamps
                  </NavLink>
                </li>
                <li className="py-1">
                  <NavLink to="/" className="links">
                    Best Cybersecurity Bootcamps
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="  group relative dropdown px-4 cursor-pointer text-base tracking-wide ">
            <Link to="/" className="flex">
              Search Bootcamps
              <svg
                className="fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M7 10l5 5 5-5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </Link>
            <div className="group-hover:block dropdown-menu absolute hidden ">
              <ul className="top-0 w-72  bg-white shadow px-6 py-6">
                <li className="py-1">
                  <NavLink to="/" className="links">
                    Compare Bootcamps
                  </NavLink>
                </li>
                <li className="py-1">
                  <NavLink to="/" className="links">
                    By Location
                  </NavLink>
                </li>
                <li className="py-1">
                  <NavLink to="/" className="links">
                    By Subject
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="links px-4 ">
            <NavLink to="/">Blog</NavLink>
          </li>
          <li className="links px-4 ">
            <NavLink to="/">Write Review</NavLink>
          </li>
        </ul>
      ) : (
        ""
      )}
      <i
        onClick={() => setShow(!show)}
        className="fas fa-bars visible pr-10 text-lg md:invisible"
      ></i>
    </div>
  );
};

export default Nav;
