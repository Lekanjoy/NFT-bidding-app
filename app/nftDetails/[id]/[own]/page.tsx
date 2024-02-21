import Image from "next/image";
import axios from "axios";
import { shortenAddress, formatDate } from "@/utils/func";
import OwnedNFTs from "@/components/OwnedNFTs";

async function getOwnerData(address: string, pageKey?: string) {
  "use server";
  const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;

  if (!apiKey) {
    alert("Internal Server Error");
    console.error("Error in getting all apiKey");
    return;
  }

  const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTsForOwner/`;
  const pageSize = 12;
  const config = {
    method: "get",
    url:
      pageKey !== "" && typeof pageKey === "string"
        ? `${baseURL}?owner=${address}&pageSize=${pageSize}&pageKey=${pageKey}`
        : `${baseURL}?owner=${address}&pageSize=${pageSize}`,
  };

  const res = await axios(config);

  if (res.status !== 200) {
    throw new Error("Failed to fetch owner data");
  }
  return res.data;
}

async function getAccount(address: string) {
  const apiKey = process.env.NEXT_PUBLIC_OPEN_SEA_KEY as string;

  if (!apiKey) {
    alert("Internal Server Error");
    console.error("Error in getting all apiKey");
    return;
  }
  const options = {
    method: "GET",
    url: `https://api.opensea.io/api/v2/accounts/${address}`,
    headers: { accept: "application/json", "x-api-key": apiKey },
  };

  const res = await axios(options);

  if (res.status !== 200) {
    throw new Error("Failed to fetch owner data");
  }

  return res.data;
}

const NFTOwner = async ({ params }: { params: { own: string } }) =>  {
  const accountData = await getAccount(params.own);

  return (
    <section className="relative flex flex-col gap-y-4 justify-between px-4 py-3 pb-10 mt-[100px] lg:w-[calc(100% - 80px)] lg:ml-[80px]">
      {accountData?.banner_image_url !== "" ? (
        <Image
          src={accountData?.banner_image_url}
          height={200}
          width={300}
          alt="Banner"
          className="relative min-w-full rounded-md h-[200px]"
        />
      ) : (
        <div className="relative min-w-full px-4 py-6 rounded-md bg-sidebar min-h-[200px]"></div>
      )}
      {accountData?.profile_image_url !== "" ? (
        <Image
          src={accountData?.profile_image_url}
          alt="Profile"
          width={150}
          height={150}
          className="absolute z-[100] top-[90px] left-8 w-[150px] h-[150px] rounded-full"
        />
      ) : (
        <p className="absolute top-[90px] left-8 w-[150px] h-[150px] rounded-full bg-gray-400  border-4 border-sidebar"></p>
      )}
      <div className="w-fit flex flex-col gap-y-1 mt-5 px-4">
        <p className="font-sembold text-2xl ">
          {accountData?.username || "UnNamed"}
        </p>
        <div className="flex flex-col">
          <p className="italic text-lg cursor-pointer">
            {shortenAddress(accountData?.address)}
          </p>
          <p className="text-slate-500">
            Joined {formatDate(accountData?.joined_date)}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 px-4 mt-12">
        <div className="flex gap-x-3 mb-5">
          <p className="px-3 py-1 bg-sidebar rounded">Collected</p>
          <p className="px-3 py-1  rounded">Liked</p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          <OwnedNFTs ownerData={getOwnerData} params={params.own} />
        </div>
      </div>
    </section>
  );
};

export default NFTOwner;
