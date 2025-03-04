import Image from "next/image";
type NFTSData = {
    id: number;
    name:string;
    imageURL?:string;
    date:Date;
  };
  
  type RewardProps = {
    nfts?: NFTSData[];
  };
  
  const Rewards = ({nfts = [] }: RewardProps) => {
    if (nfts.length === 0) return null;
  
    return (
      <section className="flex flex-col gap-y-7 bg-black text-white px-[5vw] font-poppins">
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 font-bmps">
            My Rewards <span className="text-red-500 gap-2"><Image src="/images/heart.svg" alt="heart" width={28} height={28}/></span>
          </h2>
          <p className="text-gray-400 mb-4">
          All your rewards earn through the tweets are stored here
          </p>
        </div>

        <h3 className="font-bmps text-lg font-bold flex items-center gap-2">
            <div className="text-white flex gap-2"><Image src="/images/bedroom_baby.svg" width={25} height={25} alt="NFT"/>NFTs</div>
        </h3>
        <div className="border border-[#ffffff] border-dashed">
          <div className="grid grid-cols-4 text-red-500 font-bold border-b border-[#ffffff] border-dashed p-5">
            <span>No.</span>
            <span>Name</span>
            <span>Date</span>
            <span>NFT ID</span>
          </div>
          {nfts.map((nft, index) => (
            <div
              key={nft.id}
              className="grid grid-cols-4 items-center border-b border-[#ffffff] border-dashed p-5"
            >
              <div className="">{index + 1}.</div>
              <div className="">{nft.name}
              </div>
              <div className="">{new Date(nft.date).toLocaleDateString()}</div>
              <div className="">{nft.id}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Rewards;
  