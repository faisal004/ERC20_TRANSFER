import React, { useContext } from "react";
import { TranferContext } from "@/context/TransferContext";
import { shortenAddress } from "@/constants/shortenAddress";

const BUYandSell = () => {
  const {
    NoOfToken,
    TokenOwner,
    currentAccount,
    tokenName,
    TokenSymbol,
    accountBalance,
    buyToken
  } = useContext(TranferContext);
  const handleSubmit=(e) =>{
buyToken()
  }
  return (
    <div>
    {currentAccount?
    (<div className=" bg-gradient-to-r from-black to-blue-900 h-screen items-center justify-center md:flex flex-row space-x-10">
      

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-mono font-medium text-gray-900 dark:text-white">
            BUY MKT{" "}
          </h5>

          <div>
            <label
              htmlFor="amount"
              className="block mb-2 text-sm font-mono  font-medium text-gray-900 dark:text-white"
            >
              ENTER AMOUNT YOU WANT TO BUY
            </label>
            <input
              type="number"
              name="amount"
              id="password"
              placeholder="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="font-mono  w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            BUY
          </button>
        </form>
      </div>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white font-mono ">
            SELL MKT{" "}
          </h5>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-mono "
            >
              ENTER AMOUNT YOU WANT TO SELL
            </label>
            <input
              type="number"
              name="amount"
              id="password"
              placeholder="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-mono "
          >
            SELL
          </button>
        </form>
      </div>
    </div>):(
          <h3 className=" text-white text-4xl bg-gradient-to-r from-black to-blue-900 h-screen items-center justify-center md:flex flex-row space-x-10">
            Connect your account to see the Token Details
          </h3>
        )}

    </div>
    
    
  );
};

export default BUYandSell;
