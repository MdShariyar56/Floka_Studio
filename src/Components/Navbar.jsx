import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 px-4 md:px-10 ">
      <div className="navbar-start">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.ibb.co/FbrpcSSm/logo.png"
            alt=""
            className="w-26"
          />
        </div>
      </div>

      <div className="navbar-center  hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 font-medium text-base-content/80 space-x-60">
          <li>
            <a className="hover:text-primary transition">Home</a>
          </li>
          <li>
            <a href="#page" className="hover:text-primary transition">Pages</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-primary transition">Portfolio</a>
          </li>
          <li>
            <a href="#blog" className="hover:text-primary transition">Blog</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <div className="hidden md:flex items-center text-sm text-base-content/70">
          <a
            href="mailto:info@floka.com"
            className="hover:text-primary font-medium border-r pr-4 border-base-content/20"
          >
            info@floka.com
          </a>
        </div>

        <label className=" swap swap-rotate">
          <input type="checkbox" className="theme-controller" value="dark" />

          <div className="swap-off grid grid-cols-2 gap-1 place-items-center  ">
            <CiLight size={25} />
          </div>

          <div className="swap-on grid grid-cols-2 gap-1 place-items-center ">
            <MdLightMode size={25} color="yellow" />
          </div>
        </label>

        <div
          className="lg:hidden text-xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-base-100 shadow-md lg:hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 font-medium">
          <li>
            <a className="hover:text-primary">Home</a>
          </li>
          <li>
            <a href="#page" className="hover:text-primary">Pages</a>
          </li>
          <li>
            <a href="#portfolio"  className="hover:text-primary">Portfolio</a>
          </li>
          <li>
            <a href="#blog" className="hover:text-primary">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
