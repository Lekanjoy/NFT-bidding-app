"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import signOut from "@/public/assets/sign-out.svg";
import Image from "next/image";
import { asideData } from "@/data/asideData";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] Z-[500] bg-sidebar flex flex-col justify-between h-[91vh] animate-in ease-in-out duration-500 pt-4  p-2 fixed left-0 top-[58px] lg:w-[80px] ">
      <div className="flex flex-col gap-y-6 lg:items-center">
        {asideData.map((data) => {
          const { id, svgPath, urlPath, name } = data;
          return (
            <Link key={id} href={urlPath} className="flex items-center gap-x-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // viewBox="0 0 68 68"
              >
                <path
                  d={svgPath}
                  fill={pathname === urlPath ? "#6F4FF2" : "#65646A"}
                />
              </svg>
              <p className="text-sm lg:hidden">{name}</p>
            </Link>
          );
        })}
      </div>

      <div className="lg:flex lg:items-center lg:justify-center">
        <Image src={signOut} alt="signOut" className="pb-5 lg:pb-10" />
      </div>
    </aside>
  );
};

export default SideBar;
