import Image from 'next/image'
import NFT from '@/public/assets/NFT (1).png'
import { Button } from "@/components/ui/button";

const NFTCard = () => {
  return (
    <div className="w-full flex p-5 flex-col bg-sidebar rounded-[21px] ">
      <div className="w-full h-[200px]">
        <Image src={NFT} alt="" className="w-full h-full" />
      </div>
      <div className="w-full flex flex-col justify-between mt-4 ">
        <h3 className="my-3 font-bold">Liquid Wave</h3>
        <div className="flex justify-between items-stretch">
          <div className="flex flex-col gap-y-3">
            <p className='text-sm'>Auction Time</p>
            <span className="invisible">----</span>
            <p className="text-[#6C7AA0] ">3h 1m 50s</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className='text-sm'>Current Bid</p>
            <span className="text-[#6F4FF2] text-sm">0.05 ETH</span>
            <p className="text-[#6C7AA0]">0.15 ETH</p>
          </div>
        </div>
        <div className="w-full mt-5 ">
          <Button className="bg-[#6F4FF2] text-white w-full hover:bg-[#8972e6]">
            Place a Bid
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NFTCard