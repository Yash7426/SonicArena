import Rewards from "@/components/ui-playmode/rewards";
type NFTSData = {
  token_id: number;
  nft_address: string;
  name: string;
  imageURL?: string;
  date: Date;
};
const dummyNFTs: NFTSData[] = [
    {
      token_id: 1,
      nft_address: "0xF1C91bA4dafdf1B0ae31C1f81E137087396a98f0E",
      name: "Crypto Monkey",
      imageURL: "https://via.placeholder.com/150",
      date: new Date("2024-03-01"),
    },
    {
      token_id: 2,
      nft_address: "0xF1C91bA4d30ae31C1f81E137087396a98f0E",
      name: "Cyber Ape",
      imageURL: "https://via.placeholder.com/150",
      date: new Date("2024-02-15"),
    },
    {
      token_id: 3,
      nft_address: "0xF1C91bA4d3181B0ae31C1f81E137087396a98f0",
      name: "Pixel Panther",
      imageURL: "https://via.placeholder.com/150",
      date: new Date("2024-01-20"),
    },
    {
      token_id: 4,
      nft_address: "0xFafefFE351B0ae31C1f81E137087396a98f0E",
      name: "Block Bear",
      imageURL: "https://via.placeholder.com/150",
      date: new Date("2023-12-10"),
    },
  ];  

const rewards = () => {
  return <Rewards nfts={dummyNFTs} />;
};
export default rewards;
