import Bets from "@/components/ui-betmode/bets";
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
const dummyBets: BetsData[] = [
  {
    id: 1,
    teamA: "Thunder Wolves",
    teamB: "Crimson Hawks",
    amount: 50,
    date: new Date(),
    status: "won",
  },
  {
    id: 2,
    teamA: "Shadow Panthers",
    teamB: "Blazing Foxes",
    amount: 75,
    date: new Date(),
    status: "lost",
  },
  {
    id: 3,
    teamA: "Iron Giants",
    teamB: "Storm Breakers",
    amount: 100,
    date: new Date(),
    status: "draw",
  },
  {
    id: 4,
    teamA: "Frost Titans",
    teamB: "Ember Phoenix",
    amount: 200,
    date: new Date(),
    status: "won",
  },
];

const bets = () => {
  return <Bets bets={dummyBets} />;
};
export default bets;
