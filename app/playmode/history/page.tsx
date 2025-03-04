import History from "@/components/ui-playmode/history";
type HistoryData = {
    playerid: number;
    playername:string
    date:Date;
    status: "won" | "lost" | "draw";
    winpercentage:number;
  };

  const historyData: HistoryData[] = [
    {
      playerid: 1,
      playername: "BOT",
      date: new Date("2025-02-23"),
      status: "won",
      winpercentage: 74,
    },
    {
      playerid: 2,
      playername: "HitHuman",
      date: new Date("2025-02-23"),
      status: "won",
      winpercentage: 74,
    },
    {
      playerid: 3,
      playername: "BOT",
      date: new Date("2025-02-23"),
      status: "won",
      winpercentage: 74,
    },
    {
      playerid: 4,
      playername: "BOT",
      date: new Date("2025-02-23"),
      status: "won",
      winpercentage: 74,
    },
    {
      playerid: 5,
      playername: "BOT",
      date: new Date("2025-02-23"),
      status: "lost",
      winpercentage: 74,
    },
  ];
      

const history = () => {
  return <History winPercentage={74} history={historyData} />;
};
export default history;
