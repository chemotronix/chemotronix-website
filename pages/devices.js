import { useRouter } from "next/router";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { ConnectButton, showBalance } from "@rainbow-me/rainbowkit";
import Dark from "../images/dark.png"
import Image from "next/image";
import { useAccount, useDisconnect, useBalance } from "wagmi";
import Link from "next/link";

import { useState } from "react";


export default function Devices() {

    const [deviceID, setDeviceID] = useState("ipvhcsd78");
    const [availableCredit, setAvailableCredit] = useState("25000");
    const [usedCredit, setUsedCredit] = useState("5000");
    const [emissions, setEmissions] = useState("300");

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const router = useRouter();
    const { name } = router.query;

  return (
    <div>
      <Head>
        <title>Devices</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="flex bg-transparent text-black w-[100%]" data-theme="emerald">
        <div className="flex flex-col items-cente justify-cente py-8 w-[0%] lg:w-[20%]">
            <div className="">
                <Sidebar/>
            </div>
          </div>
          <div className="lg:ml-5 w-[100%] lg:w-[80%] py-10 px-10 flex flex-col bg-[#f6f9ff]">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-5">
                    <h6 className="text-3xl font-bold mb-5">Welcome {name}! </h6>
                   </div>
                  <div className="flex flex-row gap-5">
                    <button><Image src={Dark} /></button>
                    <ConnectButton showBalance={false} />
                  </div>
                </div>

                
            <div className="flex flex-wrap">
                <div className=" rounded-lg w-[100%] px-4 py-7 lg:w-[98%] mb-10 border bg-white">
                  <h6 className="text-2xl text-center mb-10">Device 1</h6>
                    <div className="flex flex-wrap lg:flex-nowrap text-center mb-5 lg:mb-10">
                        <div className="w-[50%] lg:w-[45%] mb-10 lg:mb-0">
                            <p className="text-[#A0A0A0] mb-2">Device ID</p>
                            <p className="text-2xl">{deviceID}</p>
                        </div>
                        <div className="w-[50%] lg:w-[45%] mb-10 lg:mb-0">
                            <p className="text-[#A0A0A0] mb-2">Credit Available</p>
                            <p className="text-2xl">{availableCredit}</p>
                        </div>
                        <div className="w-[50%] lg:w-[45%]">
                            <p className="text-[#A0A0A0] mb-2">Credit Used</p>
                            <p className="text-2xl">{usedCredit}</p>
                        </div>
                        <div className="w-[50%] lg:w-[45%]">
                            <p className="text-[#A0A0A0] mb-2">Emissions</p>
                            <p className="text-2xl">{emissions}</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly">
                    <p className="text-2xl mb-5 lg:mb-0">{date}</p>
                    <Link href="/buyCredit">
                    <button
                      type="submit"
                      className="text-white bg-green-700 lg:w-[40%] h-12 rounded-lg px-12"
                      >  Buy Carbon Credit
                    </button>
                    </Link>
                    </div>
                    
                </div>

                <div className="gap-5 rounded-lg px-4 py-7 h-60 w-[100%] lg:mr-10 lg:w-[47%] border bg-white ">
                <h6 className="text-2xl">Monthly Usage Summary</h6>
                <div className="flex md:flex-row flex-col items-center gap-5">
                      
                  </div>
                </div>

                <div className="rounded-lg px-4 py-7 h-60 w-[100%] lg:w-[47%] mt-10 lg:mt-0 border bg-white">
                  <h6 className="text-2xl">AI Predictions</h6>
                  <div className="flex md:flex-row flex-col items-center gap-5">
                      
                  </div>
                </div>

                
            </div>
            </div>
      </main>
    </div>
  );
}

