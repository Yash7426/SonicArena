import Image from "next/image";
import Btn from "../ui-home/btn";

const Land = () => {
  return (
    <div className="flex flex-col items-center gap-6 min-h-screen justify-center bg-black text-center px-6">
      <Image src="/images/sonic.svg" alt="logo" width={150} height={150} />
      <p className="text-white font-bmps text-[150px] leading-none">
        SONIC<span className="text-[#EE1C25]">ARENA</span>
      </p>
      <p className="text-white text-lg max-w-3xl">
        Step into GameXchange Arena Plus and experience the thrill of strategic card battles! Challenge real players in high-stakes PvP matches or sharpen your skills against AI-powered bots that adapt and evolve with every game.
      </p>
      <div className="flex gap-6">
        <Btn text="Player vs Player" color="#EE1C25" bdabba="#000000" tcol="#ffffff" path="/playmode/play" />
        <Btn text="Player vs Bot" color="#EE1C25" bdabba="#000000" tcol="#ffffff" path="/betmode/matches" />
      </div>
    </div>
  );
};

export default Land;
