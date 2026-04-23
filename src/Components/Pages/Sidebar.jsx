import { useState } from "react";
import { PiHouseLine } from "react-icons/pi";
import { LuBox } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineErrorOutline } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { PiSignOutFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [sidebarOpen] = useState(true);

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-64 bg-white border-r border-gray-300 p-2">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-15 h-8 mr-20 mt-4"
            />
          </div>
          <hr className="mb-6 " />

          {/* Main Section */}
          <h4 className="text-md mb-2 ml-3 text-[#262626]">Main</h4>
          <nav className="space-y-2">
            {/* 1 */}
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-[#fae0d7] hover:text-[#fb2c36]"
            >
              <span className="mr-2 text-2xl">
                <PiHouseLine />
              </span>
              <h1 className="text-md font-medium text-[#262626] hover:text-[#fb2c36]">
                Dashboard
              </h1>
            </a>
            {/* 2 */}
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-[#fae0d7] hover:text-[#fb2c36]"
            >
              <span className="mr-2 text-2xl">
                <LuBox />
              </span>
              <h1 className="text-md font-medium text-[#262626] hover:text-[#fb2c36]">
                Inventory
              </h1>
            </a>
            {/* 3 */}
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-[#fae0d7] hover:text-[#fb2c36]"
            >
              <span className="mr-2 text-2xl">
                <MdAdd />
              </span>
              <h1 className="text-md font-medium text-[#262626] hover:text-[#fb2c36]">
                Add Product
              </h1>
            </a>
            {/* 4 */}
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-[#fae0d7] hover:text-[#fb2c36]"
            >
              <span className="mr-2 text-2xl">
                <TbReportSearch />
              </span>
              <h1 className="text-md font-medium text-[#262626] hover:text-[#fb2c36]">
                Reports
              </h1>
            </a>
            {/* 5 */}
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-[#fae0d7] hover:text-[#fb2c36]"
            >
              <span className="mr-2 text-2xl">
                <MdOutlineErrorOutline />
              </span>
              <h1 className="text-md font-medium text-[#262626] hover:text-[#fb2c36]">
                404 Error
              </h1>
            </a>
            {/* 6 */}
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-[#fae0d7] hover:text-[#fb2c36]"
            >
              <span className="mr-2 text-2xl">
                <GrDocumentText />
              </span>
              <h1 className="text-md font-medium text-[#262626] hover:text-[#fb2c36]">
                Docs
              </h1>
            </a>
          </nav>

          {/* Account Section */}
          <h4 className="text-md mt-6 mb-2 text-[#262626]">Account</h4>
          <nav className="space-y-2">
            
            {/* 1 */}
            <Link
              to="signIn"
              className="flex items-center p-2 rounded hover:bg-[#fae0d7] hover:text-[#fb2c36]"
            >
              <span className="mr-2 text-2xl">
                <IoLogOutOutline />
              </span>
              <h1 className="text-md font-medium text-[#262626] hover:text-[#fb2c36]">
                sign in
              </h1>
            </Link>

            {/* 2 */}
            <Link
              to="signUp"
              className="flex items-center p-2 rounded hover:bg-[#fae0d7] hover:text-[#fb2c36]"
            >
              <span className="mr-2 text-2xl">
                <PiSignOutFill />
              </span>
              <h1 className="text-md font-medium text-[#262626] hover:text-[#fb2c36]">
                Sign up
              </h1>
            </Link>
          </nav>
        </aside>
      )}
 </div>
  );
}
