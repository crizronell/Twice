import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { NavData } from "./NavData";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav
        className="flex justify-between items-center box-border h-16 bg-white text-black shadow-md "
        role="navigation"
      >
        <div className="animate-bounce ml-10 ">
          <Link to="/" className="text-2xl sm:text-xl font-bold font-sans">
            TWICE
          </Link>
        </div>
        <div className="cursor-pointer z-20" onClick={toggle}>
          {!open ? (
            <MenuIcon className="w-6 md:hidden" />
          ) : (
            <XIcon className="w-6 md:hidden" />
          )}
        </div>
        <div className=" md:block hidden ">
          <ul className="flex">
            {NavData.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-[8rem] flex justify-around text-md font-mono hover:text-slate-600 "
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div
        className={` bg-slate-200  w-full fixed top-0 text-xl  font-mono z-10
            ${
              open
                ? " translate-y-100 ease-in duration-300"
                : " -translate-y-full ease-in-out duration-300"
            }
            
           
          `}
      >
        <ul className="flex flex-col justify-around items-center h-screen   ">
          {NavData.map((item) => {
            return (
              <li
                key={item.id}
                onClick={toggle}
                className="hover:text-slate-600 "
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
