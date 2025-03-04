"use client";
import Image from "next/image";
import { FaGoogle, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="bg-black text-white flex flex-col font-mono px-[5vw]">
      {/* Profile Section */}
      <h2 className="text-xl font-bold flex items-center gap-2 font-bmps text-[30px]">
        Profile <span className="text-red-500">♦</span>
      </h2>
      <div className="border border-dotted p-4 rounded-lg max-w-5xl mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-400 rounded-full" />
            <div>
              <p className="text-[20px] font-bold">AVIRAL HATWAL</p>
              <p className="text-gray-400 text-[20px]">
                Joined on <span className="text-white">11/02/2025</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="border px-3 py-1 rounded text-[20px] hover:bg-gray-800">
              Change Username
            </button>
            <button className="border px-3 py-1 rounded text-[20px] hover:bg-gray-800">
              Change Profile Picture
            </button>
          </div>
        </div>

        <div className="mt-4 border-t border-dotted pt-3 flex justify-between text-[20px]">
          <div>
            <p className="font-bold">User Id</p>
            <p className="text-gray-400 break-all">cm6zfcfeu01571lp599h41o6f</p>
          </div>
          <div>
            <p className="font-bold">Connected Wallet</p>
            <p className="text-gray-400 break-all">
              G4FHvz5DCwHzDViPxhUx97Yu6isKEZgSRociADyhZCVF
            </p>
          </div>
        </div>
      </div>

      {/* Connected Profile Section */}
      <h2 className="text-xl font-bold flex items-center gap-2 mt-6 font-bmps text-[30px]">
        Connected Profile <span className="text-red-500">♣</span>
      </h2>
      <div className="border border-dotted p-4 rounded-lg w-fit mt-2">
        <div className="grid grid-cols-2 gap-5 text-[20px]">
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-2=">
              <FaTwitter className="text-gray-400" />
              <div>
                <p className="font-bold">Twitter</p>
                <p className="text-gray-400">Not Connected</p>
              </div>
            </div>
            <button className="border px-3 py-1 rounded hover:bg-gray-800">
              Connect
            </button>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-2">
              <FaGoogle className="text-gray-400" />
              <div>
                <p className="font-bold">Google</p>
                <p className="text-gray-400">bikramnarayan96@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              <div>
                <p className="font-bold">Email</p>
                <p className="text-gray-400">Not Connected</p>
              </div>
            </div>
            <button className="border px-3 py-1 rounded hover:bg-gray-800">
              Connect
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-400" />
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-gray-400">Not Connected</p>
              </div>
            </div>
            <button className="border px-3 py-1 rounded hover:bg-gray-800">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
