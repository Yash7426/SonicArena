"use client";

import { IoWalletOutline } from "react-icons/io5";
import WalletModal from "../modal/wallet-modal";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Wallet Modal */}
      <WalletModal isOpen={open} onClose={() => setOpen(false)} />

      <footer className="absolute bottom-0 font-bmps flex items-center justify-between w-full h-12 px-4 bg-red-600 text-white text-sm font-semibold">
        {/* Top-Left Black Square */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-black" />
        {/* Bottom-Left Black Square */}
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-black" />

        {/* Top-Right Black Square */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-black" />
        {/* Bottom-Right Black Square */}
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-black" />

        {/* Left Section */}
        <span>+ How to Play?</span>

        {/* Middle Section (Wallet) */}
        <div 
          className="flex items-center gap-1 cursor-pointer font-bmps" 
          onClick={() => setOpen(true)} // Open modal on click
        >
          <IoWalletOutline size={16} />
          <span>WALLET</span>
        </div>

        {/* Right Section */}
        <span><Link href={"/betmode/matches"}>@ Switch to Bet Mode</Link></span>
      </footer>
    </>
  );
}
