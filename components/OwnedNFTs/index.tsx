"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { nanoid } from "@reduxjs/toolkit";
import { ownerDataType } from "@/types/types";

type OwnedNFTsProps = {
  ownerData: (params: string, nextPage?: string) => Promise<ownerDataType>;
  params: string;
}


const OwnedNFTs = ({ ownerData, params }: OwnedNFTsProps) => {

  const initialState = {
    pageKey: "",
    ownedNfts: [
      {
        tokenId: "",
        image: {
          cachedUrl: "",
        },
        contract: {
          name: "",
          openSeaMetadata: {
            floorPrice: "",
          },
        },
        collection: {
          slug: "",
        },
      },
    ],
  };

  const [ownerNfts, setOwnerNfts] = useState<ownerDataType>(initialState);
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await ownerData(params);
      setOwnerNfts(data);
    }
    getData();
  }, []);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // User has scrolled to the bottom of the page
        ownerData(params, nextPage).then((data: ownerDataType) => {
          // Update existing data without destroying the previous
          setOwnerNfts((prev) => ({
            pageKey: data.pageKey,
            ownedNfts: [...prev.ownedNfts, ...data.ownedNfts],
          }));
        });
      }
    };

    window.addEventListener("scroll", handleScroll); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPage]);
  
  useEffect(() => {
    if (ownerNfts?.ownedNfts?.length > 0) {
      // Update the nextPage state when new data is fetched
      setNextPage(ownerNfts?.pageKey);
    }
  }, [ownerNfts?.ownedNfts]);

  console.log(ownerNfts.ownedNfts)

  //TODO: Add skeleton

  return (
    <>
      {ownerNfts?.ownedNfts?.map((data) => (
        <div
          key={data.tokenId + nanoid()}
          className="flex flex-col gap-y-3 bg-sidebar pb-4 rounded-md hover:scale-95 duration-300 ease-in-out lg:cursor-pointer"
        >
          <Image
            src={data.image.cachedUrl}
            alt="NFT collected/owned"
            width={200}
            height={200}
            className="w-full max-h-[300px] rounded-md"
          />
          <div className=" font-semibold px-4">
            <p>{data.contract.name}</p>
            <p className="">{data.collection.slug}</p>
          </div>
          <div className="mt-4 px-4 text-gray-500 justify-end">
            Floor Price: {data.contract.openSeaMetadata.floorPrice} WETH
          </div>
        </div>
      ))}
    </>
  );
};

export default OwnedNFTs;
