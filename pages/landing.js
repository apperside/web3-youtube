import { Router } from "next/router";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Landing() {
  const router = useRouter();
  // Creating a function to connect user's wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      // Checking if user have Metamask installed
      if (!ethereum) {
        // If user doesn't have Metamask installed, throw an error
        alert("Please install MetaMask");
        return;
      }

      // If user has Metamask installed, connect to the user's wallet
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // At last save the user's wallet address in browser's local storage
      localStorage.setItem("walletAddress", accounts[0]);

      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Creating a hero component with black background and centering everything in the screen */}
      <section className="dark relative bg-black flex flex-col h-screen justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                It is YouTube, but{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Decentralized
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  A YouTube Clone built on top of Polygon network, allow users
                  to create, share and watch videos, without worrying about
                  their privacy.
                </p>
                <b>
                  <p
                    className=" text-amber-500 my-3 text-underlined"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    ACTUALLY WORKING ON POLYGON TESTNET (MUMBAY NETWORK)
                  </p>
                </b>
                <p className="text-amber-500 my-3 underline">
                  <Link
                  target={"_blank"}
                    href={
                      "https://blog.suhailkakar.com/building-a-full-stack-web3-youtube-clone-with-next-ipfs-the-graph-solidity-and-polygon#heading-deploying-smart-contract-on-polygon"
                    }
                  >
                    Click here to read how to to add mumbai test network on
                    metamask
                  </Link>
                </p>
                <button
                  className="items-center  bg-white rounded-full font-medium color-green p-4 shadow-lg"
                  onClick={() => {
                    // Calling the connectWallet function when user clicks on the button
                    connectWallet();
                  }}
                >
                  <span className="text-white dark:text-black">
                    Connect wallet
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
