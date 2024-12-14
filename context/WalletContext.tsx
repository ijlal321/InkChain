"use client";

import React, { createContext, useState, useContext } from "react";
import Web3 from "web3";

interface WalletContextType {
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0]; // Get the first account
        setAccount(address);
        console.log("Wallet connected:", address);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("No Ethereum wallet found. Please install MetaMask.");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    console.log("Wallet disconnected");
  };

  return (
    <WalletContext.Provider value={{ account, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
