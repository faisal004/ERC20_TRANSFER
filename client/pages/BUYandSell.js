import React, { useContext, useState } from "react";
import { TranferContext } from "@/context/TransferContext";
import { shortenAddress } from "@/constants/shortenAddress";
import BUYSELLTRANSACTIONS from "./BUYSELLTRANSACTIONS";

const BUYandSell = () => {
  const {
    currentAccount,

    buyToken,
    handleChangeOFbuy,
    formDataForBUY,
    sellToken,
    contractBalance,
    isLoading,
  } = useContext(TranferContext);
  const handleSubmit = (e) => {
    const { amount } = formDataForBUY;
    e.preventDefault();
    if (!amount) return;
    buyToken();
  };
  const handleSubmitForsell = (e) => {
    const { amount } = formDataForBUY;
    e.preventDefault();
    if (!amount) return;
    sellToken();
  };
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const maxmktcanbeSold = contractBalance * 1000;
  //console.log(maxmktcanbeSold);

  const handleChangeConvert = (e) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    setResult(newAmount * 0.001); // or any calculation you want to perform
  };
  return (
    <div>
      {currentAccount ? (
        <div className=" bg-gradient-to-r from-black to-blue-900 h-screen items-center justify-center md:flex flex-row space-x-10">
          <div className="space-y-4">
            <div className="w-full max-w-sm p-4  border rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
              <h5 className="text-lg font-mono font-medium text-gray-900 dark:text-white">
                Converter
              </h5>
              <div>
                <label
                  className="block mb-2  py-1  text-sm font-mono  font-medium text-white"
                  htmlFor="amount"
                >
                  Enter amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  className="bg-gray-300"
                  onChange={handleChangeConvert}
                />
                <br />
                <label
                  className="block mb-2 text-sm font-mono py-1 font-medium text-white"
                  htmlFor="result"
                >
                  Ether to send/receive:
                </label>
                <input
                  type="text"
                  id="result"
                  name="result"
                  value={result}
                  disabled
                />
              </div>
            </div>
            <div className="w-full max-w-sm p-4  border  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
              <h5 className="text-lg font-mono font-medium text-white">
                Contract Balance - {contractBalance} ether
              </h5>
            </div>
          </div>
          <div className="w-full max-w-sm p-4  border  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-mono font-medium text-white">
                BUY MKT{" "}
              </h5>

              <div>
                <label
                  htmlFor="amount"
                  className="block mb-2 text-sm font-mono  font-medium text-white"
                >
                  ENTER AMOUNT YOU WANT TO BUY
                </label>
                <input
                  name="amount"
                  type="number"
                  placeholder="number"
                  onChange={(e) => handleChangeOFbuy(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              {isLoading ? (
                <button
                  type="submit"
                  className="font-mono  w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="font-mono  w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  BUY
                </button>
              )}
            </form>
          </div>
          <div className="w-full max-w-sm p-4  border  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-white font-mono ">
                SELL MKT{" "}
              </h5>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white font-mono "
                >
                  ENTER AMOUNT YOU WANT TO SELL
                </label>
                <input
                  name="amount"
                  type="number"
                  placeholder="number"
                  onChange={(e) => handleChangeOFbuy(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
                <span className="text-green-300  text-sm font-mono">
                  You can sell max {maxmktcanbeSold}
                </span>
              </div>
              {isLoading ? (
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-mono "
                >
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmitForsell}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-mono "
                >
                  SELL
                </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <h3 className=" text-white text-4xl bg-gradient-to-r from-black to-blue-900 h-screen items-center justify-center md:flex flex-row space-x-10">
          Connect your account to access Functionalities.
        </h3>
      )}
      <BUYSELLTRANSACTIONS />
    </div>
  );
};

export default BUYandSell;
