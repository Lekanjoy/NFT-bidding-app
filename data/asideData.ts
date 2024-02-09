import { MdDashboard } from "react-icons/md";
import { BiDna } from "react-icons/bi";
import { GrLike } from "react-icons/gr";
import { BsCollection } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IconType } from "react-icons";

interface IasideData {
  id: number;
  name: string;
  urlPath: string;
  icon: IconType;
}

export const asideData: IasideData[] = [
  {
    id: 0,
    name: "Dashboard",
    urlPath: "/",
    icon: MdDashboard,
  },
  {
    id: 1,
    name: "Bids",
    urlPath: "/bids",
    icon: BiDna,
  },
  {
    id: 2,
    name: "Liked",
    urlPath: "/liked",
    icon: GrLike,
  },
  {
    id: 3,
    name: "Collection",
    urlPath: "/collection",
    icon: BsCollection,
  },
  {
    id: 4,
    name: "Profile",
    urlPath: "/profile",
    icon: CgProfile,
  },
  {
    id: 5,
    name: "Settings",
    urlPath: "/settings",
    icon: IoMdSettings,
  },
];
