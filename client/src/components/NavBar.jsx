import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-richYellow">
      <div className="my-56 flex flex-col items-center px-2 gap-4 font-saira text-3xl font-bold text-richBlue-100">
        <Link to={"/"}>
          <button className="hover:text-blue-600">
            <FaHome />
          </button>
        </Link>

        <Link to={"/books"} className="hover:text-blue-600">
          <IoLibrary />
        </Link>

        <Link to={"/profile"}>
          <button className="hover:text-blue-600">
            <FaUser />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
