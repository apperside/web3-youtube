import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const Header = ({ search }) => {
  return (
    <header className="w-full flex justify-between h-20 items-center border-b p-4 border-[#202229]">
      <div className=" w-1/3    ">
        <img
          width={80}
          src={"https://i.ibb.co/JHn1pjz/logo.png"}
          alt="YouTube Logo"
        />
      </div>
      <div className=" w-1/3 flex justify-center items-center">
        {search ? (
          <input
            type="text"
            onChange={(e) => search(e.target.value)}
            placeholder="Type to search"
            className=" border-0 bg-transparent focus:outline-none text-white"
          />
        ) : null}
      </div>
      <div className=" w-1/3 flex justify-end">
        <AiOutlinePlusCircle
          onClick={() => {
            window.location.href = "/upload";
          }}
          size="30px"
          className="mr-8 fill-whiteIcons dark:fill-white cursor-pointer"
        />
      </div>
    </header>
  );
};
