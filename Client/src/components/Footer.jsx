import React from "react";

import logo from "../images/images/logo.png";
const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Footer = () => (
  <div className="gradient-bg-footer">
    <div className="w-full flex md:justify-center justify-between items-center flex-col px-20 container mx-auto">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        <ul className="text-white flex sm:flex-row gap-5 sm:mt-0 my-4 list-none flex-col justify-between items-center flex-initial">
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">
          Come join us and hear for the unexpected miracle
        </p>
        <p className="text-white text-sm text-center font-medium mt-2">
          info@kryptomastery.com
        </p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@kryptomastery2022</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  </div>
);

export default Footer;
