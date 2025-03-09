"use client";
import React, { useState } from "react";

interface BetModalProps {
  isOpen: boolean;
  onClose: () => void;
  player1: string;
  player2: string;
}

const BetModal: React.FC<BetModalProps> = ({
  isOpen,
  onClose,
  player1,
  player2,
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState("playerOne");
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  return (
    <div className="font-bmps fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-md">
      <div className="border border-[#ff0000] bg-black text-white w-[450px] py-4 relative border-dashed flex flex-col gap-3">
        <div className="flex items-center justify-center mb-4 border-dashed p-2 border-b-2 border-[#ff0000]">
          <h2 className="uppercase text-center">MAKE BET</h2>
          <button
            onClick={onClose}
            className="text-[16px] font-semibold text-white hover:text-red-500 absolute right-4"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-5 mb-3">
            <span className="uppercase text-sm">Player one : {player1}</span>
            <input
              type="radio"
              name="player"
              value="playerOne"
              checked={selectedPlayer === "playerOne"}
              onChange={() => setSelectedPlayer("playerOne")}
              className="accent-[#ff0000]"
            />
          </div>

          <div className="flex items-center justify-center gap-5 mb-3">
            <span className="uppercase text-sm">Player two : {player2}</span>
            <input
              type="radio"
              name="player"
              value="playerTwo"
              checked={selectedPlayer === "playerTwo"}
              onChange={() => setSelectedPlayer("playerTwo")}
              className="accent-[#ff0000]"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="uppercase text-sm">Amount :</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-24 bg-black border border-white text-white p-1 focus:outline-none focus:border-[#ff0000]"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => {
              console.log("Player:", selectedPlayer, "Amount:", amount);
              onClose();
            }}
            className="bg-[#ff0000] px-4 py-2 uppercase tracking-widest text-sm hover:bg-red-600"
          >
            Confirm Bet
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetModal;
