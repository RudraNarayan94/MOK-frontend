import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-[80px] backdrop-blur- bg-[#181C22] flex items-center justify-between py-7 px-10 text-slate-300 font-mono ">
        <div className="flex items-center justify-center cursor-pointer gap-2 ">
          <img className="h-[30px] " src="keyboard-shortcut.1024x1020.png" alt="logo" />
          <h4 className="text-[orange] text-xl font-bold">m.o.k</h4>
        </div>
        <div className="w-[45%]">
          <ul className="flex justify-between cursor-pointer">
            <li className="hover:uppercase hover:underline hover:text-[orange] "><Link to='/'>Home</Link></li>
            <li className="hover:uppercase hover:underline hover:text-[orange]"><Link to='/practice'>Practice</Link></li>
            <li className="hover:uppercase hover:underline hover:text-[orange]">Multiplayer</li>
            <li className="hover:uppercase hover:underline hover:text-[orange]">Tips</li>
          </ul>
        </div>
        <div className="flex gap-8">
            <button className="hover:underline hover:text-[orange]"><Link to='/signup'>Register</Link></button>
            <button className="underline text-[orange] hover:underline-offset-2">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
