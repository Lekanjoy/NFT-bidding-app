"use client";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { supabase } from "@/supabase";
import { TiEyeOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { PostgrestResponse } from "@supabase/supabase-js";

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
  views: number;
  setViews: Dispatch<SetStateAction<number>>;
  favoriteCount: number;
  setFavoriteCount: Dispatch<SetStateAction<number>>;
};

const NFTAnalytics = ({
  params,
  analyticsData,
  setAnalyticsData,
  views,
  setViews,
  favoriteCount,
  setFavoriteCount,
}: NFTAnalyticsProp) => {
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

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      await getAnalytics();
      const matchingAnalytics = analyticsData?.find(
        (analytic) => params.id === analytic.order_hash
      );
      //   Modify currently viewed NFT view count
      if (matchingAnalytics) {
        const { data, error }: PostgrestResponse<IanalyticsData> =
          await supabase
            .from("nftitems")
            .update({ viewcount: matchingAnalytics?.viewcount + 1 })
            .eq("order_hash", params.id)
            .select();

        if (data && data[0]) setViews(data[0].viewcount);
        if (data && data[0]) setFavoriteCount(data[0].likecount);
      } else {
        await insertAnalytics();
        await getAnalytics(); // Refresh the analytics data after inserting
        const updatedAnalytics = analyticsData?.find(
          (analytic) => params.id === analytic.order_hash
        );

        const viewCount = updatedAnalytics?.viewcount as number;
        const likeCount = updatedAnalytics?.likecount as number;
        setViews(viewCount);
        setFavoriteCount(likeCount);
      }
    };
    fetchAnalyticsData();
  }, [views]);

  //   Modify currently viewed NFT like count
  const incrementLikeCount = async () => {
    toggleFavorite();
    const { data, error }: PostgrestResponse<IanalyticsData> = await supabase
      .from("nftitems")
      .update({
        likecount: favoriteCount < 1 ? favoriteCount + 1 : favoriteCount - 1,
      })
      .eq("order_hash", params.id)
      .select();
    if (data) setFavoriteCount(data[0].likecount);
  };

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
      <div className="flex items-center gap-x-1">
        <TiEyeOutline size={25} />
        <p>
          {views} view{views > 1 ? "s" : ""}
        </p>
      </div>
      <div className="flex items-center gap-x-1 ">
        <FaRegHeart
          color={favoriteColor}
          onClick={incrementLikeCount}
          className="cursor-pointer"
        />
        <p>
          {favoriteCount} favorite{favoriteCount > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default NFTAnalytics;
