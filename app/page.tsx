"use client";
import { useEffect } from "react";
import { getAllNFTs } from "@/features/NFTs/nftSlice";
import Dashboard from "@/components/Dashboard";
import { useAppDispatch, useTypedSelector } from "@/store/store";

const Home = () => {
  const dispatch = useAppDispatch();;
  const { hasRunInitially } = useTypedSelector((store) => store.nft);

  useEffect(() => {
    if (hasRunInitially === false) {
      dispatch(getAllNFTs());
    }
  }, [dispatch, hasRunInitially]);


  return (
    <main className="relative px-4 py-3 mt-[60px] lg:w-[calc(100% - 80px)] lg:ml-[100px]">
      <Dashboard />
    </main>
  );
};

export default Home;
