import Image from "next/image";
import { SideBar } from "./components/Sidebar";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <div className="bg-gray-200 w-ful h-screen">
      <SideBar />
      <NavBar />
    </div>
  );
}
