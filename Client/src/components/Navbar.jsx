import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import comingsoon from "../images/images/eth-comingsoon.gif";
import GradientBtn from "./GradientBtn";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="bg-[black] sticky top-0 z-50">
      <nav className="w-full  z-50 container mx-auto flex md:justify-between justify-between items-center md:px-20 p-4">
        <div className="flex items-center cursor-pointer">
          <img
            src={comingsoon}
            alt="logo"
            className="w-20 cursor-pointer border border-transparent rounded-md"
          />
          <label className="text-white text-lg font-normal">web3-ethereum</label>F
        </div>

        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}

          <GradientBtn className="capitalize" title="Login" />
        </ul>
        <div className="flex relative md:hidden ">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => (
                  <NavBarItem
                    key={item + index}
                    title={item}
                    classprops="my-2 text-lg"
                  />
                )
              )}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
