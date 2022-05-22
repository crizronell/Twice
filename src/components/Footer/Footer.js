import React from "react";
import { FooterData } from "./FooterData";
import * as AiIcons from "react-icons/ai";

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <footer
        className="flex justify-center items-center box-border h-[8rem] bg-white text-black shadow-md relative "
        role="navigation"
      >
        <div className="flex mb-5 ">
          {FooterData.map((item) => {
            return (
              <div className="px-4" key={item.id}>
                <a
                  className=" text-2xl sm:text-1xl"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icons}
                </a>
              </div>
            );
          })}
        </div>
        <div className="absolute top-[4.5rem] ">
          <hr className="w-[14rem] border-2 border-black"></hr>
          <div className="w-[14rem] flex justify-between items-center mt-1 ">
            <div className="text-3xl sm:text-2xl ">
              <AiIcons.AiFillCopyrightCircle />
            </div>
            <div className="text-xl sm:text-md font-mono ">
              CopyRight<span className="font-bold">{getYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
