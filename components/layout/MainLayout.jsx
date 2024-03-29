"use client";
import React, { useContext } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { SiHelpscout, SiSinglestore } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);
  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <Navbar />
      <div className="flex justify-start items-start">
        {/*<aside className="bg-white rounded-lg w-60 p-4"> */}
        <aside
          className={`bg-[#9ae998] rounded-lg overflow-hidden transition-all duration-200 h-screen ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg lg:h-100vh lg:p-4 border-solid border-4 border-black `}
        >
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <GrProjects className="mr-2" />
              <h3 className="flex-1">Projects</h3>
              <FaAngleRight />
            </li>
            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <FaCheck className="mr-2" />
                <h3 className="flex-1">Singular</h3>
                <FaAngleRight />
              </div>
              <ul className="ml-8 mt-4">
                <li className="flex justify-center items-center gap-3">
                    <SiSinglestore />
                    <Link href="/singular/selectbox">Select Box</Link>
                    

                </li>
              </ul>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaCheckDouble className="mr-2" />
              <h3 className="flex-1">Complex</h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <SiHelpscout className="mr-2" />
              <Link href="/about">About us</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FiPhoneCall className="mr-2" />
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1 border-solid border-black border-4 bg-[#FFD73B] h-screen">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
