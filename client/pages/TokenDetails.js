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
    <section className="text-white bg-gradient-to-r from-black to-blue-900 font-mono h-screen">
      <div className="container px-5 py-24 mx-auto">
        {currentAccount ? (
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Token Symbol - {TokenSymbol}{" "}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400"></p>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Token Name - {tokenName}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400"></p>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Number of token held by Connected Account - {accountBalance}{" "}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400"></p>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Number of token deployed - {NoOfToken}{" "}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400"></p>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Token Owner Address - {shortenAddress(TokenOwner)}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400"></p>
                </a>
              </div>
            </div>
            
          </div>
        ) : (
          <h3 className="text-white text-3xl text-center my-2 font-serif">
            Connect your account to see the Token Details
          </h3>
        )}
      </div>
    </section>
  );
};

export default Middle;
