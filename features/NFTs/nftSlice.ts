import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nftType } from "@/types/types";

export const getAllNFTs = createAsyncThunk("nft/getAllNFTs", () => {
  return fetch(
    "https://api.opensea.io//api/v2/orders/ethereum/seaport/listings?limit=50",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-api-key": "fc531dabb75748a88a20daf32103eac1",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error in getting all NFTs", err);
    });
});


type initialStateType = {
  nftItems: nftType[];
  loading: boolean;
  error: string | undefined;
};

const initialState: initialStateType = {
  nftItems: [],
  loading: false,
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
      state.nftItems = action.payload.orders;
    });
    builder.addCase(getAllNFTs.rejected, (state, action) => {
      state.loading = false;
      state.nftItems = [];
      state.error = action.error?.message || "An unknown error occurred";
    });
  },
});

export default nftSlice.reducer;
