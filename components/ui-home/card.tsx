import Image from "next/image";

interface CardProps {
  head: string;
  desc: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ head, desc, img }) => {
  return (
    <div className="flex flex-col gap-[20px] border border-dashed border-[#EE1C25] w-[21%] h-[350px] text-center justify-center items-center p-[40px]">
      <Image src={img} alt="Icon" width={70} height={70} />
      <h1 className="font-bmps text-[20px] text-[#EE1C25]">{head}</h1>
      <p className="font-poppins text-[14px] text-white">{desc}</p>
    </div>
  );
};

export default Card;
