"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/assets/avatar.svg";
import { Button } from "@/components/ui/button";
import { formatCountdown, shortenAddress } from "@/utils/func";
import { nftPropType } from "@/types/types";

const NFTCard = ({ nft }: nftPropType) => {
  const [countdown, setCountdown] = useState(
    formatCountdown(nft.expiration_time)
  );

  // Convert price from wei to ether
  const price = parseInt(nft.current_price) / 1e18;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(formatCountdown(nft.expiration_time));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [nft.expiration_time]);

  return (
    <div className="w-full flex p-5 flex-col bg-sidebar rounded-[21px] ">
      <div className="w-full h-[200px]">
        <Image
          src={nft.maker_asset_bundle.assets[0].image_url}
          alt={nft.maker_asset_bundle.assets[0].name}
          width={200}
          height={200}
          className="min-w-full h-full rounded-[21px] "
        />
      </div>
      <div className="flex gap-x-1 items-center mt-2 cursor-pointer lg:gap-x-2">
        {nft.maker.profile_img_url ? (
          <Image
            className="maker-avatar w-[25px] h-[25px] rounded-full"
            src={nft.maker.profile_img_url}
            alt={`Avatar of ${nft.maker.address}`}
            width={25}
            height={25}
          />
        ) : (
          <Image src={avatar} alt="Placeholder avatar" width={25} height={25} />
        )}
        <p className="text-sm font-bold">{shortenAddress(nft.maker.address)}</p>{" "}
      </div>
      <div className="w-full flex flex-col justify-between mt-4 ">
        <h3 className="my-3 font-bold">
          {nft.maker_asset_bundle.assets[0].name}
        </h3>
        <div className="flex justify-between items-stretch">
          <div className="flex flex-col gap-y-3">
            <p className="text-sm">Auction Time</p>
            <span className="invisible">----</span>
            <p className="text-[#6C7AA0] animate-pulse">{countdown}</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-sm">Price</p>
            <p className="text-[#6C7AA0] invisible">----</p>
            <span className="text-[#6F4FF2] text-sm">
              {price.toFixed(3)} ETH
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-5 gap-x-5">
          <Button className="bg-[#6F4FF2] text-white w-full hover:bg-[#8972e6]">
            Place a Bid
          </Button>
          <Link className="w-full" href={`/nftDetails/${nft.order_hash}`}>
            <Button className="bg-[#DC3546] text-white w-full hover:bg-[#f95565]">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
