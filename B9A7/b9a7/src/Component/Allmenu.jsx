import React from "react";
import Menu from "./Menu";

const Allmenu = ({ menus }) => {
  return (
    <div className="w-7/12 grid grid-cols-2 gap-5">
      {menus.map((menuinfo, index) => (
        <Menu key={index} menuinfo={menuinfo}></Menu>
      ))}
    </div>
  );
};


export default Allmenu;
