"use client"

import Bets from "@/components/ui-betmode/bets";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
type BetsData = {
  id: number;
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  amount: number;
  date: Date;
  status: "won" | "lost" | "draw";
};
// const dummyBets: BetsData[] = [
//   {
//     id: 1,
//     teamA: "Thunder Wolves",
//     teamB: "Crimson Hawks",
//     amount: 50,
//     date: new Date(),
//     status: "won",
//   },
//   {
//     id: 2,
//     teamA: "Shadow Panthers",
//     teamB: "Blazing Foxes",
//     amount: 75,
//     date: new Date(),
//     status: "lost",
//   },
//   {
//     id: 3,
//     teamA: "Iron Giants",
//     teamB: "Storm Breakers",
//     amount: 100,
//     date: new Date(),
//     status: "draw",
//   },
//   {
//     id: 4,
//     teamA: "Frost Titans",
//     teamB: "Ember Phoenix",
//     amount: 200,
//     date: new Date(),
//     status: "won",
//   },
// ];

const bets = () => {

  const [betData, setBetData] = useState<BetsData[]>([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBetData = async () => {
      try {
        const userId = (session?.user as any)?.id;
        const trendingResponse = await fetch(
          `/api/bet?userId=${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );  
        const responseData = await trendingResponse.json();
        setBetData(responseData.matches);
      } catch (error) {
        console.error("Error fetching betData:", error);
      } finally {
        setLoading(false);
      }
    };
    if(session)
      fetchBetData();
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

  return <Bets bets={betData} />;
};
export default bets;
