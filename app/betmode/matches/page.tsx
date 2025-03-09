"use client"

import Match from "@/components/ui-betmode/match";
import { Skeleton } from "@/components/ui/skeleton";
// import { Match } from "@/lib/db/schema";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
type MatchData = {
  id: number;
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  status: "upcoming" | "live" | "finished";
};
// const dummyMatches: MatchData[] = [
//   {
//     id: 1,
//     teamA: "Team Alpha",
//     teamB: "Team Beta",
//     scoreA: 2,
//     scoreB: 3,
//     status: "live",
//   },
//   { id: 2, teamA: "Team Gamma", teamB: "Team Delta", status: "live" },
//   {
//     id: 3,
//     teamA: "Team Omega",
//     teamB: "Team Sigma",
//     scoreA: 1,
//     scoreB: 1,
//     status: "live",
//   },
// ];

const matches = () => {

  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const userId = (session?.user as any)?.id;
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
        setMatchData(responseData.matches);
      } catch (error) {
        console.error("Error fetching matchData:", error);
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

  return <Match matches={matchData} />;
};
export default matches;
