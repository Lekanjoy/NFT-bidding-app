"use client";
import { useState } from "react";
import NFTCard from "../NFTCard";
import { Skeleton } from "@/components/ui/skeleton";
import { nanoid } from "@reduxjs/toolkit";
import { useTypedSelector } from "@/store/store";

interface trendCatProps {
  id: number;
  text: string;
}

const Trending = () => {
  const trendCategories: trendCatProps[] = [
    { id: 0, text: "All" },

    { id: 1, text: "Artwork" },

    { id: 2, text: "Books" },
  ];

  const [selectedCat, setSelectedCat] = useState(0);
  const { nftItems, loading } = useTypedSelector((store) => store.nft);

  return (
    <section className="">
      <div className="flex justify-between items-center mb-[50px]">
        <h3 className="text-lg font-semibold lg:text-xl">Trending</h3>
        <ul className="flex  items-center gap-x-1 text-sm lg:gap-x-3 lg:text-base">
          {trendCategories.map((trendCat, index) => {
            return (
              <li
                onClick={() => setSelectedCat(index)}
                key={trendCat.id}
                className={`px-1 rounded-[6px] cursor-pointer ${
                  selectedCat === index ? "bg-[#6F4FF2] text-white" : "bg-none"
                } `}
              >
                {trendCat.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-3">
        {loading
          ? [...Array(20)].map((_) => (
              <Skeleton
                key={nanoid()}
                className="w-[100px] h-[20px] rounded-full"
              />
            ))
          : nftItems.map((nft) => {
              return <NFTCard key={nft.id} nft={nft} />;
            })}
      </div>
    </section>
  );
};

export default Trending;
