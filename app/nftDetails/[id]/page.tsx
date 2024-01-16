"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTypedSelector } from "@/store/store";
import Link from "next/link";
import { TiEyeOutline } from "react-icons/ti";
import { FaRegHeart, FaRegClock } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { generateCountdown } from "@/utils/func";

const NFTDetails = ({ params }: { params: { id: string } }) => {
  const { nftItems } = useTypedSelector((store) => store.nft);

  const findNFTDetails = nftItems.find(
    (result) => result.order_hash === params.id
  );

  const [favorite, setFavorite] = useState("");
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite ? "red" : "");
  }, [isFavorite]);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
    setFavoriteCount((prevState) =>
      isFavorite ? prevState - 1 : prevState + 1
    );
  };

  const [views, setViews] = useState(0); //This will be gotten from the database later on
  useEffect(() => {
    const storedViews = localStorage.getItem("pageViewCount");
    setViews(storedViews ? parseInt(storedViews) : 0);

    setViews((prevViews) => prevViews + 1);
    localStorage.setItem("pageViewCount", views.toString());
  }, []);

const endDateString = findNFTDetails?.closing_date
const countdownMessage = endDateString !== undefined ? generateCountdown(endDateString) : 'Error getting sale time left';

const currentPrice = findNFTDetails !== undefined ? parseInt(findNFTDetails.current_price) / 1e18 : 'Error getting price';
const imgUrl = findNFTDetails !== undefined ? findNFTDetails?.maker_asset_bundle.assets[0].image_url : '';
const nftName = findNFTDetails !== undefined ? findNFTDetails?.maker_asset_bundle.assets[0].name : 'Error getting title name';

  return (
    <section className="flex flex-col gap-4 justify-between px-4 py-3 pb-10 mt-[60px] lg:w-[calc(100% - 80px)] lg:ml-[80px] lg:flex-row l">
      <div className="w-full bg-sidebar rounded-xl p-4 flex-grow lg:w-2/5">
        <Image
          src={imgUrl}
          alt={nftName}
          width={200}
          height={200}
          className="min-w-full h-full rounded-[21px] "
        />
      </div>
      <div className="flex flex-col gap-y-6 lg:w-3/5">
        <div className="flex flex-col gap-y-3">
          <p className="text-2xl font-semibold lg:text-3xl">
            {nftName}
          </p>
          <p className="text-xs lg:text-sm lg:w-3/4">
            {/* {findNFTDetails?.maker_asset_bundle.assets[0].description} */}
          </p>
        </div>
        <div className="flex gap-y-1 flex-col">
          <h2 className="font-bold text-xl lg:text-2xl">#2841</h2>
          <p>
            Owned by{" "}
            <Link href={""} className="text-[#6F4FF2]">
              {findNFTDetails?.maker.user}
            </Link>{" "}
          </p>
        </div>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-1">
            <TiEyeOutline size={25} />
            <p>{views} views</p>
          </div>
          <div className="flex items-center gap-x-1 ">
            <FaRegHeart color={favorite} onClick={toggleFavorite} className='cursor-pointer'/>
            <p>{favoriteCount} favorites</p>
          </div>
        </div>
        <div className="w-full bg-sidebar flex flex-col rounded-xl border">
          <div className="flex gap-x-2 items-center border-b p-4">
            <FaRegClock />
            <p>{countdownMessage} </p>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-col gap-y-3">
              <p>Current Price</p>
              <p className="text-3xl font-semibold">
                {currentPrice} ETH
              </p>
            </div>
            <div className="w-full flex items-center justify-between mt-5 gap-x-2 lg:gap-x-5">
              <Button
                size={"xl"}
                className="bg-[#6F4FF2] text-white w-full hover:bg-[#8972e6]"
              >
                Buy now
              </Button>
              <Button
                variant={"ghost"}
                size={"xl"}
                className="flex items-center bg-[rgba(225,_225,_225,_0.1)] gap-x-2 border shadow-md  w-full"
              >
                <IoPricetagOutline size={20} />
                <p>Make offer</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTDetails;
