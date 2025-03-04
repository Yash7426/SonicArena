import Rewards from "@/components/ui-betmode/rewards";
type NFTSData = {
  id: number;
  name: string;
  imageURL?: string;
  date: Date;
};
const dummyNFTs: NFTSData[] = [
  {
    id: 1,
    name: "Crypto Monkey",
    imageURL: "@/images/logo.svg",
    date: new Date("2024-03-01"),
  },
  {
    id: 2,
    name: "Sonic Warrior",
    imageURL: "@/images/logo.svg",
    date: new Date("2024-02-15"),
  },
];

const rewards = () => {
  return <Rewards balance={10} nfts={dummyNFTs} />;
};
export default rewards;
