"use client";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { supabase } from "@/supabase";
import { PostgrestResponse } from "@supabase/supabase-js";
import { TiEyeOutline } from "react-icons/ti";
import { IanalyticsData } from ".";

type ViewsCounterProps = {
  params: {
    id: string;
  };
  setCurrentLikeCount: Dispatch<SetStateAction<number>>;
  setFavoriteCount: Dispatch<SetStateAction<number>>;
  analyticsData: IanalyticsData[] | null;
  setAnalyticsData: Dispatch<SetStateAction<IanalyticsData[] | null>>;
};

const ViewsCounter = ({
  setCurrentLikeCount,
  setFavoriteCount,
  params,
  analyticsData,
  setAnalyticsData,
}: ViewsCounterProps) => {
  const [views, setViews] = useState(0);

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
      setCurrentLikeCount(matchingAnalytics?.likecount || 0);
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

  return (
    <div className="flex items-center gap-x-1">
      <TiEyeOutline size={25} />
      <p>
        {views} view{views > 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default ViewsCounter;
