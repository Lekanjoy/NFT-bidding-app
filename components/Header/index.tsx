import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Search, BellRing } from "lucide-react";
import avatar from "@/public/assets/avatar.svg";
import logo from "@/public/assets/Logo (1).svg";
import Image from "next/image";

 const Header = () => {
  return (
    <header className="z-10 w-full fixed left-0 top-0 pr-2 flex justify-between items-center">
      <div className="flex gap-x-3 lg:gap-x-12">
        <div className="relative bg-sidebar flex justify-center items-center p-2 lg:w-[80px] after:absolute after:bg-sidebar after:w-full after:h-[6px] after:right-0 after:-bottom-[6px]">
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
        <BellRing size="20px" />
        <Image src={avatar} alt="Avatar of user" width={25} height={25} />
      </div>
    </header>
  );
};

export default Header;