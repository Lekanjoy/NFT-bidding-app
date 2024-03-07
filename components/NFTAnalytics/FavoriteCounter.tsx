'use client'
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { supabase } from "@/supabase";
import { PostgrestResponse } from "@supabase/supabase-js";
import { FaRegHeart } from 'react-icons/fa';
import { useAccount } from 'wagmi';
import { IanalyticsData } from ".";

 interface IuserLikedStatus {
    id: number;
    userid: string;
    order_hash: string;
    isliked: boolean;
  }

  type FavoriteCounterProps = {
    params: {
      id: string;
    };
    favoriteCount: number;
    setFavoriteCount: Dispatch<SetStateAction<number>>;
    favoriteColor: string;
    currentLikeCount: number;
    toggleFavorite: () => void;

  };
  

const FavoriteCounter = ({favoriteCount, setFavoriteCount, favoriteColor, currentLikeCount, params, toggleFavorite}:FavoriteCounterProps) => {
   // Get if user exist/ wallet connected
   const { address } = useAccount();
  
   //   Modify currently viewed NFT like count
   const [likeTracker, setLikeTracker] = useState(0);
   const handleUpvote = async () => {
     // Fix scenario in which wwallet is not connected and use tries to like an NFT
     if (!address) {
       alert("Please connect your wallet"); //TODO: change to more UX friendly alert modal
       return;
     };
 
     toggleFavorite();
 
     try {
       // Check if the Current user has already liked  this NFT
       const {
         data: userVote,
         error: voteError,
       }: PostgrestResponse<IuserLikedStatus> = await supabase
         .from("likeddata")
         .select("*")
         .eq("order_hash", params.id)
         .eq("userid", address)
         .select();
 
       let newLikeCount = likeTracker;
 
       if (
         userVote === null ||
         userVote === undefined ||
         userVote.length === 0
       ) {
         // Current user hasn't liked, so favorite the NFT
         newLikeCount += 1;
         await supabase
           .from("likeddata")
           .insert([{ userid: address, order_hash: params.id, isliked: true }]);
       } else {
         // User has already liked, so remove their favorite count
         newLikeCount -= 1;
         await supabase.from("likeddata").delete().eq("id", userVote[0].id);
       }
       // Update the favorite count in the database
       const { data, error }: PostgrestResponse<IanalyticsData> = await supabase
         .from("nftitems")
         .update({
           likecount: currentLikeCount + newLikeCount,
         })
         .eq("order_hash", params.id)
         .select();
       // Update the state after the database operation
       setLikeTracker(newLikeCount);
       if (data) setFavoriteCount(data[0].likecount);
     } catch (error) {
       console.error("Error upvoting post");
     }
   };


  return (
    <div className="flex items-center gap-x-1 ">
        <FaRegHeart
          color={favoriteColor}
          onClick={handleUpvote}
          className="cursor-pointer"
        />
          {favoriteCount} favorite{favoriteCount > 1 ? "s" : ""}
        </div>
  )
}

export default FavoriteCounter