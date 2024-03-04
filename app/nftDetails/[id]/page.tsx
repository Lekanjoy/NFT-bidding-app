"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTypedSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { generateCountdown } from "@/utils/func";
import { FaRegClock } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import NFTAnalytics, { IanalyticsData } from "@/components/NFTAnalytics";

const NFTDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const [favoriteCount, setFavoriteCount] = useState(0);
  const [views, setViews] = useState(0);
  const [analyticsData, setAnalyticsData] = useState<IanalyticsData[] | null>(
    null
  );

  const { nftItems } = useTypedSelector((store) => store.nft);
  const findNFTDetails = nftItems?.orders?.find(
    (result) => result.order_hash === params.id
  );

  // Add current data to session storage
  const storeJson = sessionStorage.getItem("storedCurrentNFT");
  const retrievedCurrentNFT = JSON.parse(storeJson || "{}");

  useEffect(() => {
    if (findNFTDetails !== undefined) {
      sessionStorage.setItem(
        `storedCurrentNFT`,
        JSON.stringify(findNFTDetails)
      );
    }
  }, []);

  // Extracting essential data from API or sessionStorage
  const endDateString =
    findNFTDetails?.expiration_time || retrievedCurrentNFT?.expiration_time;
  const countdownMessage =
    endDateString !== undefined
      ? generateCountdown(endDateString)
      : "Error getting sale time left";
  const currentPrice =
    (findNFTDetails && parseInt(findNFTDetails?.current_price) / 1e18) ||
    parseInt(retrievedCurrentNFT?.current_price) / 1e18;
  const imgUrl =
    findNFTDetails?.maker_asset_bundle.assets[0].image_url ||
    retrievedCurrentNFT?.maker_asset_bundle.assets[0].image_url;
  const nftName =
    findNFTDetails?.maker_asset_bundle.assets[0].name ||
    retrievedCurrentNFT?.maker_asset_bundle.assets[0].name;
  const ownerDetailsRoute = `${
    findNFTDetails?.order_hash || retrievedCurrentNFT?.order_hash
  }/${findNFTDetails?.maker.address || retrievedCurrentNFT?.maker.address}`;

  return (
    <section className="relative flex flex-col gap-4 justify-between px-4 py-3 pb-10 mt-[100px] lg:w-[calc(100% - 80px)] lg:ml-[80px] lg:flex-row l">
      <Button
        size={"sm"}
        variant={"outline"}
        onClick={() => router.back()}
        className="absolute -top-[35px] w-fit bg-sidebar text-primary"
      >
        Back
      </Button>
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
        <p className="text-2xl font-semibold lg:text-3xl">{nftName}</p>
        <div className="flex gap-y-1 flex-col">
          <h2 className="font-bold text-xl lg:text-2xl">
            #{findNFTDetails?.maker.user || retrievedCurrentNFT?.maker.user}
          </h2>
          <p>
            Owned by{" "}
            <Link
              href={`/nftDetails/${ownerDetailsRoute}`}
              className="text-[#6F4FF2]"
            >
              {findNFTDetails?.maker.user || retrievedCurrentNFT?.maker.user}
            </Link>{" "}
          </p>
        </div>
        <NFTAnalytics
          params={params}
          analyticsData={analyticsData}
          setAnalyticsData={setAnalyticsData}
          views={views}
          setViews={setViews}
          favoriteCount={favoriteCount}
          setFavoriteCount={setFavoriteCount}
        />
        <div className="w-full bg-sidebar flex flex-col rounded-xl border">
          <div className="flex gap-x-2 items-center border-b p-4">
            <FaRegClock />
            <p>{countdownMessage} </p>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-col gap-y-3">
              <p>Current Price</p>
              <p className="text-3xl font-semibold">{currentPrice} ETH</p>
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
