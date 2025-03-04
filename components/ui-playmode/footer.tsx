import Link from "next/link";
import Image from "next/image";
import Btn from "../ui-home/btn";

const DFooter = () => {
  return (
    <header className="p-2 bg-black text-white flex items-center py-6 px-6 md:px-10 absolute top-0 w-full">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex flex-row gap-3 items-center">
        <Image src={"/images/sonic.svg"} alt="SonicArena Logo" width={30} height={30} />
        <h1 className="font-bmps text-xl" >SONICARENA</h1></Link>
      </div>
      <nav className="ml-auto flex items-center gap-6 text-sm font-mono">
      <Btn text={"PLAY"} color={"#EE1C25"} bdabba={"#000000"} tcol="#ffffff" path="playmode/play"/>
        <Link href="/playmode/rewards" className="font-bmps">REWARDS</Link>
        <Link href="/playmode/history" className="font-bmps">HISTORY</Link>
        <Link href="/playmode/profile" className="font-bmps">PROFILE</Link>
      </nav>
    </header>
  );
};

export default DFooter;