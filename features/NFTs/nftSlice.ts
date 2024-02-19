import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nftType } from "@/types/types";

const apiKey = process.env.NEXT_PUBLIC_OPEN_SEA_KEY as string;

export const getAllNFTs = createAsyncThunk(
  "nft/getAllNFTs",
  ({ chain, nextPageToken }: { chain: string, nextPageToken?: string }) => {
    // This makes sure the apiKey is loaded / returns true before the fetch runs
    if (!apiKey) {
      alert("Internal Server Error");
      console.error("Error in getting all apiKey");
      return;
    }

    let endpoint =
      `https://api.opensea.io//api/v2/orders/${chain}/seaport/listings?limit=24`;

    if (nextPageToken !== '') {
      // If nextPageToken is provided, append it to the URL
      endpoint += `&cursor=${nextPageToken}`;
    }

    return axios
      .get(endpoint, {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-key": apiKey,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        console.error("Error in getting all NFTs", err);
      });
  }
);

type initialStateType = {
  nftItems: nftType;
  loading: boolean;
  hasRunInitially: boolean;
  error: string;
};

const initialState: initialStateType = {
  nftItems: {
    next: "",
    orders: [
      {
        order_hash: "",
        expiration_time: 0,
        closing_date: "",
        maker_asset_bundle: {
          assets: [
            {
              name: "",
              image_url: "",
            },
          ],
        },
        maker: {
          profile_img_url: "",
          address: "",
          user: "",
        },
        current_price: "",
      },
    ],
  },
  loading: false,
  hasRunInitially: false,
  error: "",
};

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllNFTs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllNFTs.fulfilled, (state, action) => {
      state.loading = false;
      state.hasRunInitially = true;
      state.nftItems.next = action.payload.next; // Update next page token if available
      state.nftItems.orders.push(...action.payload.orders); // Append new orders to existing orders
    });
    builder.addCase(getAllNFTs.rejected, (state, action) => {
      state.loading = false;
      state.hasRunInitially = false;
      state.nftItems = {
        next: "",
        orders: [
          {
            order_hash: "",
            expiration_time: 0,
            closing_date: "",
            maker_asset_bundle: {
              assets: [
                {
                  name: "",
                  image_url: "",
                },
              ],
            },
            maker: {
              profile_img_url: "",
              address: "",
              user: "",
            },
            current_price: "",
          },
        ],
      };
      state.error = action.error?.message ?? "An unknown error occurred";
    });
  },
});

export default nftSlice.reducer;
