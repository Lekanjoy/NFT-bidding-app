'use client'
import {useEffect} from 'react'
import { getAllNFTs } from "@/features/NFTs/nftSlice";
import Dashboard from "@/components/Dashboard";
import { useAppDispatch } from "@/store/store";

const Home = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllNFTs())
  }, [])

  return (
    <main className="relative px-4 py-3 mt-[60px] lg:w-[calc(100% - 80px)] lg:ml-[100px]">
      <Dashboard/>
    </main>
  );
};

export default Home;
