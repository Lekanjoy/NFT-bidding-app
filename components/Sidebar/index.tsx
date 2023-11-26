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
    <aside className="w-[250px] Z-50 bg-sidebar flex flex-col justify-between h-[91vh] pt-4  p-2 fixed left-0 top-[58px] lg:w-[80px] ">
      <div className="flex flex-col gap-y-6 lg:items-center">
        <div className="flex items-center gap-x-2">
          <Image src={DashBoard} alt="DashBoard" />
          <p className="text-sm lg:hidden">Dashboard</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={bid} alt="bid" />
          <p className="text-sm lg:hidden">Bids</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={heart} alt="heart" />
          <p className="text-sm lg:hidden">Liked</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={Collection} alt="Collection" />
          <p className="text-sm lg:hidden">Collections</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={profile} alt="profile" />
          <p className="text-sm lg:hidden">Profile</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={setting} alt="setting" />
          <p className="text-sm lg:hidden">Settings</p>
        </div>
      </div>

      <Image src={signOut} alt="signOut" className="pb-5 lg:pb-10" />
    </aside>
  );
};

export default SideBar;
