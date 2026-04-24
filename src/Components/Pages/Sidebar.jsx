import { useState } from "react";
import { PiHouseLine } from "react-icons/pi";
import { LuBox } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineErrorOutline } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { PiSignOutFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [sidebarOpen] = useState(true);

  const activeLink = "flex items-center p-2 rounded bg-[#fae0d7] text-[#fb2c36]";
  const normalLink = "flex items-center p-2 rounded hover:bg-[#fae0d7] hover:text-[#fb2c36] text-[#262626]";

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-64 bg-white border-r border-gray-300 p-2">
          {/* Logo */}
          <div className="flex px-4 py-4 mb-2">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
          <hr className="mb-4 border-gray-200" />

          {/* Main Section */}
          <h4 className="text-md mb-2 ml-3 text-[#262626]">Main</h4>
          <nav className="space-y-2">
            {/* 1 */}
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="mr-2 text-2xl">
                <PiHouseLine />
              </span>
              <h1 className="text-md font-medium">
                Dashboard
              </h1>
            </NavLink>
            {/* 2 */}
            <NavLink
              to="/inventory"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="mr-2 text-2xl">
                <LuBox />
              </span>
              <h1 className="text-md font-medium">
                Inventory
              </h1>
            </NavLink>
            {/* 3 */}
            <NavLink
              to="/add-product"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="mr-2 text-2xl">
                <MdAdd />
              </span>
              <h1 className="text-md font-medium">
                Add Product
              </h1>
            </NavLink>
            {/* 4 */}
            <NavLink
              to="/reports"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="mr-2 text-2xl">
                <TbReportSearch />
              </span>
              <h1 className="text-md font-medium">
                Reports
              </h1>
            </NavLink>
            {/* 5 */}
            <NavLink
              to="/404"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="mr-2 text-2xl">
                <MdOutlineErrorOutline />
              </span>
              <h1 className="text-md font-medium">
                404 Error
              </h1>
            </NavLink>
            {/* 6 */}
            <NavLink
              to="/docs"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="mr-2 text-2xl">
                <GrDocumentText />
              </span>
              <h1 className="text-md font-medium">
                Docs
              </h1>
            </NavLink>
          </nav>

          {/* Account Section */}
          <h4 className="text-md mt-6 mb-2 text-[#262626]">Account</h4>
          <nav className="space-y-2">

            {/* 1 */}
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="mr-2 text-2xl">
                <IoLogOutOutline />
              </span>
              <h1 className="text-md font-medium">
                sign in
              </h1>
            </NavLink>

            {/* 2 */}
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="mr-2 text-2xl">
                <PiSignOutFill />
              </span>
              <h1 className="text-md font-medium">
                Sign up
              </h1>
            </NavLink>
          </nav>
        </aside>
      )}
    </div>
  );
}
