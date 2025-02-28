import React from "react";

interface BtnProps {
  color?: string;
  bdabba?: string;
  text: string;
  tcol: string;
}

const Btn: React.FC<BtnProps> = ({ color, bdabba, text, tcol }) => {
  return (
    <div
      className={`text-[16px] relative font-bmps py-2 px-4 w-fit`}
      style={{ backgroundColor: color , color: tcol }}
    >
      <div className="w-[6px] h-[6px] absolute top-0 left-0" style={{ backgroundColor: bdabba }} />
      <div className="w-[6px] h-[6px] absolute top-0 right-0" style={{ backgroundColor: bdabba }} />
      <div className="w-[6px] h-[6px] absolute bottom-0 left-0" style={{ backgroundColor: bdabba }} />
      <div className="w-[6px] h-[6px] absolute bottom-0 right-0" style={{ backgroundColor: bdabba }} />

      {text}
    </div>
  );
};

export default Btn;
