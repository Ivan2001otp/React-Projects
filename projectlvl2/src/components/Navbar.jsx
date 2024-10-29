import React from "react";
import DropDownTag from './DropDown'

const Navbar = () => {


  return (
    <div className="w-screen mt-6 place-items-center">
      <div className="bg-gray-100 w-3/5 h-16 mt-4 top-0 place-center rounded-xl shadow-lg z-50 fixed">
        <div className="place-items-center rounded-md">
          {/* texts */}
          <ul className="flex p-3 space-x-8">
            <li className="text-3xl font-mono font-semibold hover:text-purple-700">Jamie</li>
            <li className="mt-1.5 text-slate-800 font-bold cursor-pointer hover:text-purple-800 hover:underline hover:underline-offset-4 hover:decoration-gray-700">
                <DropDownTag/>
            </li>
            <li className="mt-1.5 text-slate-800 font-bold cursor-pointer hover:text-yellow-600 hover:underline hover:underline-offset-4 hover:decoration-gray-700">
              Pricing
            </li>
            <li className="mt-1.5 text-slate-800 font-bold cursor-pointer hover:text-yellow-600 hover:underline hover:underline-offset-4 hover:decoration-gray-700">
              About
            </li>
            <li className="mt-1.5 text-slate-800 font-bold cursor-pointer hover:text-yellow-600 hover:underline hover:underline-offset-4 hover:decoration-gray-700">
              Blog
            </li>
            <div></div>

            <div>
              <button className="p-2 bg-slate-300 text-slate-700 rounded-xl font-semibold mr-2">
                Book demo
              </button>
              <button className="p-2 px-4  bg-slate-950 text-gray-100 rounded-xl font-semibold">
                Try now
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
