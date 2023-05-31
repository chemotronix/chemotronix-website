import { useRouter } from "next/router";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import TransactionsTable from "../components/TransactionsTable";
import { ConnectButton, showBalance } from "@rainbow-me/rainbowkit";
import Dark from "../images/dark.png"
import Image from "next/image";
import { useAccount, useDisconnect, useBalance } from "wagmi";
import Link from "next/link";

import { useState } from "react";


export default function Dashboard() {

  const account = useAccount().address;
  const balance = useBalance().balance;


  // const { data, isError, isLoading } = useBalance({
  //   address: account,
  // })
 
  // if (isLoading) return <div>Fetching balance…</div>
  // if (isError) return <div>Error fetching balance</div>

  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <Head>
        <title>Dashboard</title>
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
                <div className="flex flex-row pl-10 flex-wrap items-cente justify-between gap-5 rounded-lg px-4 py-7 lg:mr-10 lg:w-[47%] border bg-white ">
                    <div className="w-[45%]">
                      <p className="text-[#A0A0A0]">Wallet Balance</p>
                      <p className="text-2xl"> <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div>
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button">
                    0.00
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button >
                    {account.displayBalance
                      ? ` ${account.displayBalance}`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom></p>
                    </div>
                    <div className="w-[45%]">
                      <p className="text-[#A0A0A0]">No. of Devices</p>
                      <p className="text-2xl">0</p>
                    </div>
                    <div className="w-[45%]">
                      <p className="text-[#A0A0A0]">Carbon Credits</p>
                      <p className="text-2xl">0</p>
                    </div>
                    <div className="w-[45%]">
                      <p className="text-[#A0A0A0]">Wallet ID</p>
                      <p className="text-2xl">NIL</p>
                    </div>
                    <Link href="/buyCredit">
                    <button
                      type="submit"
                      className="text-white bg-green-700 flex justify-center lg:w-[95%] h-12 rounded-lg px-12  items-center"
                      > Buy Carbon Credit
                    </button>
                    </Link>
                </div>

                <div className="rounded-lg px-4 py-7 h-60 w-[100%] lg:w-[47%] mt-10 lg:mt-0 border bg-white">
                  <h6 className="text-2xl">Monthly Usage Summary</h6>
                  <div className="flex md:flex-row flex-col items-center gap-5">
                      
                  </div>
                </div>

                <div className="rounded-lg w-[100%] px-4 py-7 lg:w-[98%] mt-10 border bg-white">
                  <h6 className="text-2xl">Credit Transaction / Usage</h6>
                  <div className="flex">
                    <TransactionsTable />
                  </div>
                </div>
            </div>
            </div>
      </main>
    </div>
  );
}
