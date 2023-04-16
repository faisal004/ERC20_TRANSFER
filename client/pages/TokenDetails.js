import React, { useContext } from "react";
import { TranferContext } from "@/context/TransferContext";
import { shortenAddress } from "@/constants/shortenAddress";

const Middle = () => {
  const {
    NoOfToken,
    TokenOwner,
    currentAccount,
    tokenName,
    TokenSymbol,
    accountBalance,
   
  } = useContext(TranferContext);

  return (
    <div className=" w-full items-center justify-center  px-5 py-24 mx-auto text-white bg-gradient-to-r from-black to-blue-900 font-mono h-screen">
      {currentAccount ? (
        <div className="flex flex-row items-center justify-center space-x-40">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-4xl font-mono font-medium text-white dark:text-white">
              IMPORTANT DETAILS{" "}
            </h5>

            <ul role="list" className="space-y-5 my-7 ">
              <li className="flex space-x-3">
                <span className="text-lg font-mono leading-tight text-white">
                  Token Symbol - {TokenSymbol}
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-lg font-mono leading-tight text-white ">
                  Token Name - {tokenName}
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-lg font-mono leading-tight text-white ">
                  Number of token held by Connected Account
                  <span className="text-lg  leading-tight font-semibold text-white ">
                    - {accountBalance}
                  </span>
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-lg font-mono leading-tight text-white ">
                  Number of token deployed - {NoOfToken}
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-lg font-mono leading-tight text-white ">
                  Token Owner Address -- {shortenAddress(TokenOwner)}
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-sm font-mono leading-tight text-white underline">
                  You can Buy OR Sell MKT token at an exchange rate of 1 MKT =
                  0.001 Ether
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-lg font-mono font-medium text-white dark:text-white">
              This is DAPP.Here you can transfer Ethers and ERC20 custom made MKT tokens.{" "}
              <br/>
              Here you can also BUY and SELL MKT tokens at an exchange rate of 1 MKT= 0.001 Ether.
              <br/>
              Owner of the contract cannot BUY tokens.
            </h5>
          </div>
        </div>
      ) : (
        <h3 className="text-white text-3xl text-center my-2 font-serif">
          Connect your account to see the Token Details
        </h3>
      )}
    </div>
  );
};

export default Middle;
