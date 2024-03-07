"use client";
import { useState, useEffect } from "react";
import NFTCard from "../NFTCard";
import { Skeleton } from "@/components/ui/skeleton";
import { nanoid } from "@reduxjs/toolkit";
import { getAllNFTs } from "@/features/NFTs/nftSlice";
import { useTypedSelector, useAppDispatch } from "@/store/store";

interface trendCatProps {
  id: number;
  text: string;
}

const Trending = () => {
  const trendCategories: trendCatProps[] = [
    { id: 0, text: "Ethereum" },

    { id: 1, text: "Arbitrum" },
  ];

  const dispatch = useAppDispatch();
  const { nftItems, loading, hasRunInitially} = useTypedSelector((store) => store.nft);
  const [selectedCat, setSelectedCat] = useState(0);
  const [nextPage, setNextPage] = useState('');


  useEffect(() => {
    if (hasRunInitially === false) {
      dispatch(getAllNFTs({ chain: "ethereum", nextPageToken: "" }));
    }
  }, [dispatch, hasRunInitially]);


  const fetchNextPage = () => {
    const currentChain = trendCategories[selectedCat].text.toLowerCase()
    if (nextPage) {
      dispatch(getAllNFTs({chain: currentChain, nextPageToken: nextPage}));
    }
  };

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // User has scrolled to the bottom of the page
        fetchNextPage(); // Fetch the next page
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPage]);

  useEffect(() => {
    if (nftItems?.orders?.length > 0) {
      // Update the nextPage state when new data is fetched
      setNextPage(nftItems?.next); // Assuming "next" field is the URL for the next page
    }
  }, [nftItems?.orders]); 

  // Toggle chain
  const toggleChain = (index: number) => {
    const currentChain = trendCategories[index].text.toLowerCase()
    setSelectedCat(index);
    dispatch(getAllNFTs({chain: currentChain, nextPageToken: nextPage}));
  } 

// Remove first element from fetched array which serves as initial/empty state of nftItems
  const newNftItems =  nftItems?.orders?.slice(1);

  return (
    <section className="">
      <div className="flex justify-between items-center mb-[50px]">
        <h3 className="text-lg font-semibold lg:text-xl">Trending</h3>
        <ul className="flex  items-center gap-x-1 text-sm lg:gap-x-3 lg:text-base">
          {trendCategories.map((trendCat, index) => {
            return (
              <li
                onClick={() => toggleChain(index)}
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
          ? [...Array(24)].map((_) => (
              <Skeleton
                key={nanoid()}
                className="w-full min-h-[200px] bg-sidebar rounded-xl p-3 flex flex-col justify-between gap-y-2"
              />
            ))
          :newNftItems.map((nft) => {
              return <NFTCard key={nanoid()} nft={nft} />;
            })}
      </div>
    </section>
  );
};

export default Trending;
