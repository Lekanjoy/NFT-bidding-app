export type nftType = {
  order_hash: string;
  expiration_time: number;
  closing_date:string;
  maker_asset_bundle: {
    assets: [
      {
        name: string;
        image_url: string;
      }
    ];
  };
  maker: {
    profile_img_url: string;
    address: string;
    user:string;
  };
  current_price: string;
};

export type nftPropType = {
  nft: nftType
};


export type ownerDataType = {
    tokenId:string;
    image:{
      cachedUrl:string
    };
    contract: {
      name:string;
      openSeaMetadata:{
        floorPrice:string;
      }
    };
    collection:{
      slug:string;
    }
}