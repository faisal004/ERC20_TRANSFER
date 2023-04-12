import React, { useContext } from "react";
import { TranferContext } from "@/context/TransferContext";
import { shortenAddress } from "@/constants/shortenAddress";


const TransactionsCard = ({addressTo, addressFrom, timestamp, amount}) => {
  return (
    <div
      className="bg-black m-4 flex flex-1  2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    min-w-full
    flex-col p-3 rounded-md hover:shadow-2xl"
    >
       <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white font-mono text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white font-mono text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white font-mono text-base">Amount: {amount} ETH</p>
         
        </div>
        
        <div className="bg-white p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-black font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const TransactionDetails = () => {
  const { walletConnected, currentAccount,transactions } = useContext(TranferContext);
  return (
    <div className="flex w-full h-screen justify-center items-center 2xl:px-20 bg-gradient-to-r from-black to-blue-900">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2 font-mono">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2 font-serif">
            Connect your account to see the latest transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {[ ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
