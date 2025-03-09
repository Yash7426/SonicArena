import Image from "next/image";

type MatchProps = {
  matches?: MatchData[];
};

const Match = ({ matches = [] }: MatchProps) => {
  if (matches.length === 0) return null;

  return (
    <section className="flex flex-col gap-y-7 bg-black text-white px-[5vw] font-poppins">
      <div>
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 font-bmps">
          Matches{" "}
          <span className="text-red-500 gap-2">
            <Image src="/images/heart.svg" alt="heart" width={28} height={28} />
          </span>
        </h2>
        <p className="text-gray-400 mb-4">
          Bet on the live matches going on to earn the SONIC crypto.
        </p>
      </div>
      <div className="border border-[#ffffff] border-dashed">
        <div className="grid grid-cols-4 text-red-500 font-bold border-b border-[#ffffff] border-dashed p-5">
          <span>No.</span>
          <span>Name</span>
        </div>
        {matches.map((match, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center border-b border-[#ffffff] border-dashed p-5"
          >
            <div className="">{index + 1}.</div>
            <div className="flex gap-x-1 items-center justify-center">
              <div className="w-[120px] truncate">{match.teamA}</div>{" "}
              <div className="text-3xl font-bold">vs</div>
              <div className="w-[120px] truncate"> {match.teamB}</div>
            </div>
            <button className="text-white underline">VIEW LIVE</button>
            <button className="bg-white text-black px-2 py-1 font-bold w-fit mx-auto">
              MAKE BET
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Match;
