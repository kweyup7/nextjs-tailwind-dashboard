"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const actions = [
  { id: 1, label: "User Dashboard", route: "/users/dashboard" },
  { id: 2, label: "Transactions", route: "/users/transactions" },
  { id: 3, label: "Orders", route: "/users/orders" },
  { id: 4, label: "Friends", route: "/users/friends" },
  { id: 5, label: "Log out", route: "/auth/logout" },
];

const UserAreaSelectBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col justify-center items-center relative z-30"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="p-2 rounded-lg cursor-pointer">
          <span className="p-1 rounded-lg">
            <FaUser size={25} />
          </span>
        </div>
        <div
          className={`flex flex-col bg-white w-48 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0 "
          } transition-all duration-200 overflow-hidden absolute top-16 right-0`}
        >
          {actions.map((item) => (
            <div
              key={item}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex justify-center items-center px-2 py-1 hover:bg-orange-100 cursor-pointer `}
            >
              <Link href={item.route}>{item.label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-100 fixed inset-0 opacity-50 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default UserAreaSelectBox;
