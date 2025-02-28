import React from 'react'
import Card from './card'

const Features = () => {
  return (
    <div className='py-[15vh]'>
      <p className='text-[25px] font-bmps text-white px-[5vw]'>FEATURES</p>
      <div className='flex flex-wrap px-[5vw] gap-[50px] justify-center items-center pt-[10vh]'>
        <Card head={"Next-Level PvP Battles"} desc={"Engage in high-intensity, real-time card duels powered by cutting-edge AI and adaptive gameplay."} img={"/images/game.png"}/>
        <Card head={"AI-Driven Training Mode"} desc={"Challenge smart AI bots that learn, adapt, and push your skills to the limit."} img={"/images/pixelated-alien.png"}/>
        <Card head={"DeFi-Powered Betting"} desc={"Place crypto wagers with seamless on-chain transactions, backed by real-time predictive analytics."} img={"/images/bet.png"}/>
        <Card head={"NFT-Based Assets"} desc={"Own, trade, and showcase unique in-game collectibles stored securely on the blockchain."} img={"/images/blink.png"}/>
        <Card head={"Built for Speed & Security"} desc={"Running on the Sonic blockchain, ensuring lightning-fast transactions and a tamper-proof gaming experience."} img={"/images/speaker.png"}/>
        <Card head={"Next-Level PvP Battles"} desc={"Engage in high-intensity, real-time card duels powered by cutting-edge AI and adaptive gameplay."} img={"/images/game.png"}/>
      </div>
    </div>
  )
}

export default Features
