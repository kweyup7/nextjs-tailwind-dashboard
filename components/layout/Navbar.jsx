"use client";
import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import UserAreaSelectBox from "./UserAreaSelectBox";

const Navbar = () => {
  const { toggle } = useContext(MenuContext);
  return (
    <div className="bg-[#C3FF3E] flex justify-between items-center px-4 h-28 border-solid border-4 border-black">
      <div>
        <DiAndroid color="black" size={`100px`} />
      </div>
      <div className="flex justify-center items-center gap-4">
        <div onClick={toggle} className="lg:hidden">
          <FaBars className="cursor-pointer" />
        </div>
        <div>
          <UserAreaSelectBox />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
