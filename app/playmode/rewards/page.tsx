import Rewards from "@/components/ui-playmode/rewards";
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
      imageURL: "https://via.placeholder.com/150",
      date: new Date("2024-03-01"),
    },
    {
      id: 2,
      name: "Sonic Warrior",
      imageURL: "https://via.placeholder.com/150",
      date: new Date("2024-02-15"),
    },
    {
      id: 3,
      name: "Galactic Ape",
      imageURL: "https://via.placeholder.com/150",
      date: new Date("2024-01-20"),
    },
    {
      id: 4,
      name: "Pixel Samurai",
      imageURL: "https://via.placeholder.com/150",
      date: new Date("2023-12-10"),
    },
  ];  

const rewards = () => {
  return <Rewards nfts={dummyNFTs} />;
};
export default rewards;
