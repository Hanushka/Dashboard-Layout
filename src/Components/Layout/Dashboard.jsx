import { useState } from "react";
import Header from "../Pages/Header";
import Sidebar from "../Pages/Sidebar";
import Cards from "../UI/Cards";

export default function Dashboard() {

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Cards />
        </main>
      </div>
    </div>
  );
}
