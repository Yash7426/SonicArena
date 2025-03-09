"use client"

import Rewards from "@/components/ui-betmode/rewards";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
type NFTSData = {
  id: number;
  name: string;
  imageURL?: string;
  date: Date;
};
// const dummyNFTs: NFTSData[] = [
//   {
//     id: 1,
//     name: "Crypto Monkey",
//     imageURL: "@/images/logo.svg",
//     date: new Date("2024-03-01"),
//   },
//   {
//     id: 2,
//     name: "Sonic Warrior",
//     imageURL: "@/images/logo.svg",
//     date: new Date("2024-02-15"),
//   },
// ];

const rewards = () => {

  const [nftdata, setNftdata] = useState<NFTSData[]>([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [walletBalance, setWalletBalance] = useState<number>(0);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const userId = (session?.user as any)?.id;
        setWalletBalance((session?.user as any)?.balance);
        const trendingResponse = await fetch(
          `/api/match?userId=${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );  
        const responseData = await trendingResponse.json();
        setNftdata(responseData.matches);
        
      } catch (error) {
        console.error("Error fetching nftdata:", error);
      } finally {
        setLoading(false);
      }
    };
    if(session)
      fetchRewards();
  }, [session]);
  if (loading)
    return (
      <div className="flex flex-col space-y-3 h-[50vh] w-[50%] items-center justify-center mx-auto">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    );
  return <Rewards balance={walletBalance} nfts={nftdata} />;
};
export default rewards;
