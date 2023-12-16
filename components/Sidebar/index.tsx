import Link from 'next/link'
import DashBoard from "@/public/assets/DashBoard.svg";
import bid from "@/public/assets/bid.svg";
import heart from "@/public/assets/heart.svg";
import Collection from "@/public/assets/Collection.svg";
import profile from "@/public/assets/Profile.svg";
import setting from "@/public/assets/setting.svg";
import signOut from "@/public/assets/sign-out.svg";
import Image from "next/image";

const SideBar = () => {

  return (
    <aside className="w-[250px] Z-[500] bg-sidebar flex flex-col justify-between h-[91vh] animate-in ease-in-out duration-500 pt-4  p-2 fixed left-0 top-[58px] lg:w-[80px] ">
      <div className="flex flex-col gap-y-6 lg:items-center">
        <Link href="/" className="flex items-center gap-x-2">
          <Image className='' src={DashBoard} alt="DashBoard" />
          <p className="text-sm lg:hidden">Dashboard</p>
        </Link>
        <Link href='/bids' className="flex items-center gap-x-2">
          <Image src={bid} alt="bid" />
          <p className="text-sm lg:hidden">Bids</p>
        </Link>
        <Link href='liked' className="flex items-center gap-x-2">
          <Image src={heart} alt="heart" />
          <p className="text-sm lg:hidden">Liked</p>
        </Link>
        <Link href='collection' className="flex items-center gap-x-2">
          <Image src={Collection} alt="Collection" />
          <p className="text-sm lg:hidden">Collections</p>
        </Link>
        <Link href='profile' className="flex items-center gap-x-2">
          <Image src={profile} alt="profile" />
          <p className="text-sm lg:hidden">Profile</p>
        </Link>
        <Link href='settings' className="flex items-center gap-x-2">
          <Image src={setting} alt="setting" />
          <p className="text-sm lg:hidden">Settings</p>
        </Link>
      </div>

      <div className="lg:flex lg:items-center lg:justify-center">
        <Image src={signOut} alt="signOut" className="pb-5 lg:pb-10" />
      </div>
    </aside>
  );
};

export default SideBar;
