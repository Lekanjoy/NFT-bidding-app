import Image from "next/image";
import TrendingCard from "../TrendingCard";
import artworkIcon from "@/public/assets/artworkIcon.svg";
import auctionIcon from "@/public/assets/auctionIcon.svg";
import creatorIcon from "@/public/assets/creatorIcon.svg";
import chartScatter from "@/public/assets/chart.png";
import chartPie from "@/public/assets/Chart (1).png";

const TrendingCharts = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-4 my-[50px] lg:grid-cols-3">
      <div className=" flex flex-col gap-y-4 w-full">
        <h3 className="text-lg font-semibold lg:text-xl">Trending Bids</h3>
        <TrendingCard
          icon={artworkIcon}
          total="24K"
          text="Artworks"
          change="+168.001%"
          changeColor="#50BB25"
          iconColor="#6F4FF2"
        />
        <TrendingCard
          icon={auctionIcon}
          total="89"
          text="Auction"
          change="-168.001%"
          changeColor="#DC3546"
          iconColor="#DC3546"
        />
        <TrendingCard
          icon={creatorIcon}
          total="82K"
          text="Creators"
          change="+168.001%"
          changeColor="#50BB25"
          iconColor="#50BB25"
        />
      </div>

      <div className="flex flex-col gap-4 h-full">
        <h3 className="text-lg font-semibold lg:text-xl">ETH Price</h3>
        <div className="bg-sidebar flex justify-center items-center p-4 rounded-2xl flex-grow">
          <Image src={chartScatter} alt="Chart" />
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <h3 className="text-lg font-semibold lg:text-xl">Statistics</h3>
        <div className="bg-sidebar flex flex-col justify-center items-center p-4 rounded-2xl">
          <Image src={chartPie} alt="Chart" />
          <div className="flex justify-between gap-x-4">
            <div className="flex items-center gap-x-1">
              <p className="bg-[#6F4FF2] w-4 h-4 rounded-full"></p>
              <p className="text-sm text-[#68676E]">Artwork Sold</p>
            </div>
            <div className="flex items-center gap-x-1">
              <p className=" border border-white w-4 h-4 rounded-full"></p>
              <p className="text-sm text-[#68676E]">Artwork Canceled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCharts;
