"use client";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { supabase } from "@/supabase";
import { TiEyeOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { PostgrestResponse } from "@supabase/supabase-js";
import FavoriteCounter from "./FavoriteCounter";
import ViewsCounter from "./ViewsCounter";

export interface IanalyticsData {
  order_hash: string;
  viewcount: number;
  likecount: number;
}

type NFTAnalyticsProp = {
  params: {
    id: string;
  };
  analyticsData: IanalyticsData[] | null;
  setAnalyticsData: Dispatch<SetStateAction<IanalyticsData[] | null>>;
};

const NFTAnalytics = ({
  params,
  analyticsData,
  setAnalyticsData,
}: NFTAnalyticsProp) => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  // Get all viewed NFT in database
  async function getAnalytics() {
    let { data, error }: PostgrestResponse<IanalyticsData> = await supabase
      .from("nftitems")
      .select("*");
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setAnalyticsData(data);
    }
  }

  // Add currently viewed NFT to database
  async function insertAnalytics() {
    const { data, error }: PostgrestResponse<IanalyticsData> = await supabase
      .from("nftitems")
      .insert([{ order_hash: params.id, viewcount: 0, likecount: 0 }])
      .select();
  }

  const [currentLikeCount, setCurrentLikeCount] = useState(0);

  //  Handles favorite color functionality
  const [favoriteColor, setFavoriteColor] = useState(
    localStorage.getItem(`favoriteColor_${params.id}`) || "white"
  );

  useEffect(() => {
    localStorage.setItem(`favoriteColor_${params.id}`, favoriteColor);
  }, [favoriteColor, params.id]);

  const toggleFavorite = () => {
    if (favoriteColor == "red") {
      setFavoriteColor("white");
    } else {
      setFavoriteColor("red");
    }
  };

  return (
    <div className="flex gap-x-4">
      <ViewsCounter
        setCurrentLikeCount={setCurrentLikeCount}
        setFavoriteCount={setFavoriteCount}
        params={params}
        analyticsData={analyticsData}
        setAnalyticsData={setAnalyticsData}
      />
      <FavoriteCounter
        favoriteColor={favoriteColor}
        favoriteCount={favoriteCount}
        setFavoriteCount={setFavoriteCount}
        currentLikeCount={currentLikeCount}
        params={params}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default NFTAnalytics;
