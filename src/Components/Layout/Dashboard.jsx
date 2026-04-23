import { useState } from "react";
import Header from "../Pages/Header";
import Sidebar from "../Pages/Sidebar";
import Cards from "../UI/Cards";

export default function Dashboard() {
  
  return (
    <div >
      <Header/>
      <Sidebar/>
      <Cards/>
    </div>
  );
}
