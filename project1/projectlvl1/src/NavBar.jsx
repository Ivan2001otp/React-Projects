import React from "react";
import DropdownTag from './Dropdown'

const NavBar = () => {
  return (
    <div className="w-screen bg-red-500 p-5">
      <div className="flex">
        <div className="flex-none w-14 font-extrabold text-2xl text-yellow-100">Redis</div>
        <div className="flex-auto"></div>
        <ul className="flex justify-noraml text-xl font-bold gap-12">
            <li>
                <DropdownTag/>
            </li>
          <li
            className="text-xl text-gray-50 hover:text-black hover:font-extrabold hover:text-xs"
          >Home</li>
          <li className="text-xl text-gray-50 hover:text-black hover:font-extrabold hover:text-xs">Services</li>
          <li className="text-xl text-gray-50 hover:text-black hover:font-extrabold hover:text-xs">About-Us</li>
          <li className="mr-3 text-xl text-gray-50 hover:text-black hover:font-extrabold hover:text-xs">Contact-Us</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
