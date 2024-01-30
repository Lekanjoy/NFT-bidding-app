import Image from "next/image";
import NFT from "@/public/assets/NFT.png";
import avatar from "@/public/assets/avatar.svg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col gap-y-4 mb-[50px] lg:flex-row lg:gap-x-4">
      <div className="relative text-white p-5 bg-[url('/discover.png')] bg-no-repeat bg-center rounded-[21px] bg-cover flex flex-col justify-between w-full min-h-[210px] after:absolute after:w-full after:h-full after:bg-[rgba(111,_79,_242,_0.50)] after:top-0 after:left-0 after:rounded-[21px] lg:h-[230px]">
        <p className="font-semibold text-2xl z-[1] lg:w-3/4">
          Discover, Collect, Sell and Create your NFT
        </p>
        <p className="text-sm mb-[10px] z-[1] w-4/5 lg:mb-5">
          Digital marketplace for crypto collectibles and non fungable tokens
        </p>
        <div className="flex gap-x-5 z-[1] w-4/5 lg:w-3/4">
          <Button className="bg-[#6F4FF2] text-white w-full hover:bg-[#8972e6]">
            Explore
          </Button>
          <Button className="bg-[#DC3546] text-white w-full hover:bg-[#f95565]">
            Create
          </Button>
        </div>
      </div>
      <div className="w-full flex p-5 flex-col bg-sidebar rounded-[21px] lg:flex-row lg:gap-x-3 lg:h-[230px]">
        <div className="w-full h-[200px] lg:w-2/5 lg:h-full">
          <Image src={NFT} alt="" className="w-full h-full" />
        </div>
        <div className="w-full flex flex-col justify-between mt-4 lg:w-3/5 lg:mt-0">
          <div className="flex gap-x-1 items-center lg:gap-x-4">
            <Image src={avatar} alt="" width={25} height={25} />
            <p className="text-sm font-bold">John Abraham</p>
            <p className="w-2 h-2 rounded-full bg-green-600 ml-2"></p>
          </div>
          <h3 className="my-3 font-bold">Bored Ape</h3>
          <div className="flex justify-between  lg:w-full">
            <div className="flex flex-col gap-y-3">
              <p className='text-sm'>Auction Time</p>
              <p className="text-[#6C7AA0]">3h 1m 50s</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className='text-sm'>
                Current Bid:{" "}
                <span className="text-[#6F4FF2] text-sm">0.05 ETH</span>
              </p>
              <p className="text-[#6C7AA0]">0.15 ETH</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between mt-5 gap-x-5">
            <Button className="bg-[#6F4FF2] text-white w-full hover:bg-[#8972e6]">
              Place a Bid
            </Button>
            <Button className="bg-[#DC3546] text-white w-full hover:bg-[#f95565]">
              Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
