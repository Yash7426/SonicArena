import Image from "next/image";

type BetsData = {
    id: number;
    teamA: string;
    teamB: string;
    scoreA?: number;
    scoreB?: number;
    amount:number;
    date:Date;
    status: "won" | "lost" | "draw";
  };
  
  type BetProps = {
    bets?: BetsData[];
  };
  
  const Bets = ({ bets = [] }: BetProps) => {
    if (bets.length === 0) return null;
  
    return (
      <section className="flex flex-col gap-y-7 bg-black text-white px-[5vw] font-poppins">
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 font-bmps">
            My Bets <span className="text-red-500 gap-2"><Image src="/images/heart.svg" alt="heart" width={28} height={28}/></span>
          </h2>
          <p className="text-gray-400 mb-4">
            Bet on the live matches going on to earn the SONIC crypto.
          </p>
        </div>
        <div className="border border-[#ffffff] border-dashed">
          <div className="grid grid-cols-[10%_35%_20%_20%_10%]  text-red-500 font-bold border-b border-[#ffffff] border-dashed p-5">
            <span>No.</span>
            <span>Name</span>
            <span>Result</span>
            <span>Amount</span>
            <span>Date</span>
          </div>
          {bets.map((bet, index) => (
            <div
              key={bet.id}
              className="grid grid-cols-[10%_35%_20%_20%_10%]  items-center border-b border-[#ffffff] border-dashed p-5"
            >
              <div className="">{index + 1}.</div>
              <div className="">
                {bet.teamA} vs {bet.teamB}
              </div>
              <div className="">{bet.status.toUpperCase()}</div>
              <div className="">{`${bet.amount}`} Token</div>
              <div className="">{new Date(bet.date).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Bets;
  