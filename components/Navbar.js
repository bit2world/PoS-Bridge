import React from "react";

const Navbar = (props) => {
  return (
    <nav className="flex justify-between items-center px-7 py-4 shadow-2xl">
      <p className="text-lg"><span className="text-2xl font-bold">CandleLabs</span>&nbsp;&nbsp;BRIDGE</p>
      <button className="p-2 rounded-full bg-purple-200">{props.account}</button>
    </nav>
  );
};

export default Navbar;