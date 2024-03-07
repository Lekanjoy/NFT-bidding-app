"use client";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
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
  setIsOpen: Dispatch<SetStateAction<boolean>>
};

const NFTAnalytics = ({
  params,
  analyticsData,
  setAnalyticsData,
  setIsOpen
}: NFTAnalyticsProp) => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  const [currentLikeCount, setCurrentLikeCount] = useState(0);

  //  Handles favorite color functionality
  const [favoriteColor, setFavoriteColor] = useState(
    localStorage.getItem(`favoriteColor_${params.id}`) ?? "white"
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
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default NFTAnalytics;
