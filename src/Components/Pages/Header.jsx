import { useState } from "react";
import { FaRegBell } from "react-icons/fa";


export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col p-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white border-b border-gray-300 px-4 py-2">
        {/* Toggle Sidebar */}
        <button onClick={() => setSidebarOpen(!sidebarOpen)}></button>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <FaRegBell className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </button>
            {notifOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md p-4">
                {/* Notification 1 */}
                <div className="flex items-center mb-3 border-b border-gray-200 pb-3">
                  <img
                    src="/images/avatar-1.png"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-3 cursor-pointer"
                  />
                  <div>
                    <h2 className="text-md ">New order received</h2>
                    <p className="text-md">Order #12345 has been placed</p>
                    <p className="text-md text-gray-500 p-2">5 minutes ago</p>
                  </div>
                </div>

                {/* Notification 2 */}
                <div className="flex items-center mb-3 border-b border-gray-200 pb-3">
                  <img
                    src="/images/avatar-2.png"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-3 cursor-pointer"
                  />
                  <div>
                    <h2 className="text-md">Payment processed</h2>
                    <p className="text-md">Invoice #98765 has been paid</p>
                    <p className="text-md text-gray-500 p-2">30 minutes ago</p>
                  </div>
                </div>

                {/* Notification 3 */}
                <div className="flex items-center mb-3 border-b border-gray-200 pb-3">
                  <img
                    src="/images/avatar-3.png"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-3 cursor-pointer"
                  />
                  <div>
                    <h2 className="text-md">Stock alert</h2>
                    <p className="text-md">Product #554433 is low on stock</p>
                    <p className="text-md text-gray-500 p-2">1 hour ago</p>
                  </div>
                </div>

                <p className="text-md text-[#e66239] cursor-pointer mt-2 text-center">
                  View all notifications
                </p>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <img
                src="/images/avatar-1.png"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 border border-gray-300">
                <div className="flex items-center mb-4">
                  <img
                    src="/images/avatar-1.png"
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-3 "
                  />
                  <div className="border-b border-gray-300 pb-2 w-full">
                    <h2 className="text-md text-[#373d3f]">Shrina Tesla</h2>
                    <p className="text-md text-[#373d3f]">@imshrina</p>
                  </div>
                </div>
                {["Home", "Inbox", "Chat", "Activity", "Account Settings"].map(
                  (item, i) => (
                    <h3
                      key={i}
                      className="text-md mb-2 cursor-pointer hover:text-[#e66239] text-[#525252]"
                    >
                      {item}
                    </h3>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-4xl ml-2">Dashboard</h1>
        <p className="text-lg p-2 ">Your main content goes here…</p>
      </main>
    </div>
  );
}
