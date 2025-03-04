import Match from "@/components/ui-betmode/match";
type MatchData = {
  id: number;
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  status: "upcoming" | "live" | "finished";
};
const dummyMatches: MatchData[] = [
  {
    id: 1,
    teamA: "Team Alpha",
    teamB: "Team Beta",
    scoreA: 2,
    scoreB: 3,
    status: "live",
  },
  { id: 2, teamA: "Team Gamma", teamB: "Team Delta", status: "live" },
  {
    id: 3,
    teamA: "Team Omega",
    teamB: "Team Sigma",
    scoreA: 1,
    scoreB: 1,
    status: "live",
  },
];

const matches = () => {
  return <Match matches={dummyMatches} />;
};
export default matches;
