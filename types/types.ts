export type nftType = {
  id: string;
  expiration_time: number;
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
  };
  current_price: number;
};

export type nftPropType = {
  nft: {
    id: string;
    expiration_time: number;
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
    };
    current_price: number;
  };
};
