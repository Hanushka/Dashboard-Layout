import { LuClipboardList } from "react-icons/lu";
import { FaArrowsRotate } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";

export default function Cards() {
  return (
    <div className="p-6 pt-4 space-y-8">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-[#fae0d7] rounded-lg p-4 flex items-center ">
          <div className="bg-[#e66239] p-3 rounded-md mr-4">
            <LuClipboardList className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-md">Total Sales</h2>
            <h1 className="text-4xl font-bold mt-5">$25,000</h1>
            <p className="text-md text-[#e66239]">
              +5% since last
              <br /> month
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#ccf1f8] rounded-lg p-4 flex items-center">
          <div className="bg-[#00c951] p-3 rounded-md mr-4">
            <FaArrowsRotate className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-md ">Total Purchase</h2>
            <h1 className="text-4xl font-bold mt-5">$18,000</h1>
            <p className="text-md text-[#00c951]">
              +22% since last
              <br />
              month
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#ccf4dc] rounded-lg p-4 flex items-center">
          <div className="bg-[#00b8db] p-3 rounded-md mr-4">
            <BsCurrencyDollar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-md">Total Expenses</h2>
            <h1 className="text-4xl font-bold mt-5">$9,000</h1>
            <p className="text-md text-[#00b8db]">
              +10% since last
              <br /> month
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#fcefcc] rounded-lg p-4 flex items-center">
          <div className="bg-[#f0b100] p-3 rounded-md mr-4">
            <TbFileInvoice className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-md ">Invoice Due</h2>
            <h1 className="text-4xl font-bold mt-5">$25,000</h1>
            <p className="text-md text-[#f0b100]">
              +35% since last
              <br /> month
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-3xl font-bold">$25,458</h1>
              <h2 className="text-lg mt-3">Total Profit</h2>
            </div>
            <div>
              <TbFileInvoice className="h-10 w-10 text-[#e66239]" />
            </div>
          </div>
          <hr className="my-2 border border-gray-200 mt-10" />
          <div className="flex justify-between items-center">
            <p className="text-md">
              <span className="text-[#00c951] ">+35%</span>{" "}
              <span className="text-[#404040]">vs Last Month</span>
            </p>
            <h4 className="text-md underline text-[#e66239] cursor-pointer">
              View
            </h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-3xl font-bold">$45,458</h1>
              <h2 className="text-lg mt-3">Total Payment Returns</h2>
            </div>
            <div>
              <TbFileInvoice className="h-10 w-10 text-[#e66239]" />
            </div>
          </div>
          <hr className="my-2 border border-gray-200 mt-10" />
          <div className="flex justify-between items-center">
            <p className="text-md">
              <span className="text-[#fb2c36]">-20%</span>{" "}
              <span className="text-[#404040]">vs Last Month</span>
            </p>
            <h4 className="text-md underline text-[#e66239] cursor-pointer">
              View
            </h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-3xl font-bold">$34,458</h1>
              <h2 className="text-lg mt-3">Total Expenses</h2>
            </div>
            <div>
              <TbFileInvoice className="h-10 w-10 text-[#e66239]" />
            </div>
          </div>
          <hr className="my-2 border border-gray-200 mt-10" />
          <div className="flex justify-between items-center">
            <p className="text-md">
              <span className="text-[#f0b100]">-20%</span>{" "}
              <span className="text-[#404040]">vs Last Month</span>
            </p>
            <h4 className="text-md underline text-[#e66239] cursor-pointer">
              View
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
