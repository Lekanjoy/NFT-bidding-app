'use client'
// import { Metadata } from "next";
import { getAllNFTs } from "@/features/NFTs/nftSlice";
import Dashboard from "@/components/Dashboard";
import { useAppDispatch } from "@/store/store";

// export const metadata: Metadata = {
//   title: "NFT-List-Bid",
//   description: "Bid for your favorite arts from different collections",
// };
 
const Home = () => {
  const dispatch = useAppDispatch();
  dispatch(getAllNFTs())

  return (
    <main className="relative px-4 py-3 mt-[60px] lg:w-[calc(100% - 80px)] lg:ml-[100px]">
      <Dashboard/>
    </main>
  );
};

export default Home;
