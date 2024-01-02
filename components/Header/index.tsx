"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Search, BellRing } from "lucide-react";
import { IoIosNotificationsOutline } from "react-icons/io"
import avatar from "@/public/assets/avatar.svg";
import logo from "@/public/assets/Logo (1).svg";
import Image from "next/image";
import SideBar from "../Sidebar";
import ConnectButton from "../ConnectBtn";

const Header = () => {
  const [showAsideNav, setShowAsideNav] = useState(false);

  return (
    <header className="z-10 w-full fixed left-0 top-0 pr-2 flex justify-between gap-x-4 items-center">
      <div className="flex gap-x-3 lg:gap-x-12"> 
        <div
          onClick={() => setShowAsideNav(!showAsideNav)}
          className="relative bg-sidebar flex justify-center items-center p-2 cursor-pointer lg:w-[80px] after:absolute after:bg-sidebar after:w-full after:h-[6px] after:right-0 after:-bottom-[6px]"
        >
          <Image src={logo} alt="Logo" />
        </div>
        <div className="relative pt-3 ">
          <Search className="absolute top-[20px] left-2" />
          <Input
            type="search"
            placeholder="Search Here"
            className="pl-12 bg-sidebar"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-2 pt-3">
        <ThemeToggle />
        <IoIosNotificationsOutline size={25}/>
        {/* <Image src={avatar} alt="Avatar of user" width={25} height={25} /> */}
        <ConnectButton/>
      </div>
      {/* Mobile Nav */}
      <div className="contents lg:hidden">{showAsideNav && <SideBar />}</div>

      {/* Desktop Nav */}
      <div className="hidden lg:contents">
        <SideBar />
      </div>
    </header>
  );
};

export default Header;
