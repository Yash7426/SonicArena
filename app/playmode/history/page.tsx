"use client"

import History from "@/components/ui-playmode/history";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
type HistoryData = {
    playerid: number;
    playername:string
    date:Date;
    status: "won" | "lost" | "draw";
    winpercentage:number;
  };

  // const historyData: HistoryData[] = [
  //   {
  //     playerid: 1,
  //     playername: "BOT",
  //     date: new Date("2025-02-23"),
  //     status: "won",
  //     winpercentage: 74,
  //   },
  //   {
  //     playerid: 2,
  //     playername: "HitHuman",
  //     date: new Date("2025-02-23"),
  //     status: "won",
  //     winpercentage: 74,
  //   },
  //   {
  //     playerid: 3,
  //     playername: "BOT",
  //     date: new Date("2025-02-23"),
  //     status: "won",
  //     winpercentage: 74,
  //   },
  //   {
  //     playerid: 4,
  //     playername: "BOT",
  //     date: new Date("2025-02-23"),
  //     status: "won",
  //     winpercentage: 74,
  //   },
  //   {
  //     playerid: 5,
  //     playername: "BOT",
  //     date: new Date("2025-02-23"),
  //     status: "lost",
  //     winpercentage: 74,
  //   },
  // ];
      

const history = () => {

  // correct code
    const [historyData, setHistoryData] = useState<HistoryData[]>([]);
    const { data: session } = useSession();
    const [loading, setLoading] = useState<boolean>(true);
    const [winPercentage, setWinPercentage] = useState<number>(0);

    useEffect(() => {
      const fetchHistory = async () => {
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
          let Win = 0;
          for(let i=0;i<responseData.length;i++){
            if(responseData[i].winner_id==userId) Win++;
          }
          if(responseData.length>0){
            setWinPercentage((Win/responseData.length)*100)
          }
          setHistoryData(responseData.matches);
        } catch (error) {
          console.error("Error fetching historyData:", error);
        } finally {
          setLoading(false);
        }
      };
      if(session)
        fetchHistory();
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

    

  return <History winPercentage={74} history={historyData} />;
};
export default history;
