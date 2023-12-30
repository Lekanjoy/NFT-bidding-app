"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PiSignOutBold } from "react-icons/pi";
import { asideData } from "@/data/asideData";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] Z-[500] bg-sidebar flex flex-col justify-between h-[91vh] animate-in ease-in-out duration-500 pt-4  p-2 fixed left-0 top-[58px] lg:w-[80px] ">
      <div className="flex flex-col gap-y-6 lg:items-center">
        {asideData.map((data) => {
          const { id, urlPath, name } = data;
          return (
            <Link key={id} href={urlPath} className="flex items-center gap-x-2">
              <data.icon
                size={25}
                color={pathname === urlPath ? "#6F4FF2" : "#65646A"}
              />
              <p className="text-sm lg:hidden">{name}</p>
            </Link>
          );
        })}
      </div>

      <div className="lg:flex lg:items-center lg:justify-center">
        <PiSignOutBold size={25} color={'#65646A'} />
      </div>
    </aside>
  );
};

export default SideBar;
