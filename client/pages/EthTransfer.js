import React, { useContext } from "react";
import { TranferContext } from "@/context/TransferContext";
import TransactionDetails from "./TransactionDetails";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-xl p-2 outline-none bg-blue-900 text-white border-none text-sm"
  />
);
const EthTransfer = () => {
  const {
    connectWallet,
    formData,
    setFormData,
    handleChange,
    sendEth,
    isLoading,
  } = useContext(TranferContext);
  const handleSubmit = (e) => {
    const { addressTo, amount } = formData;
    e.preventDefault();
    if (!addressTo || !amount) return;
    sendEth();
  };

  return (
    <div className="w-full h-full  pt-7 flex flex-col space-y-36 items-center justify-center bg-gradient-to-r from-black to-blue-900">
      <div className="flex font-mono text-white text-4xl ">
        Send Ethers to your friends
      </div>
      <div className="flex flex-col w-1/2 ">
        <Input
          placeholder="Address To"
          name="addressTo"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          handleChange={handleChange}
        />
        <span className="h-[1px] w-full bg-gray-400 my-4"></span>
{isLoading?(<button
          type="button"
          
          className="inline-flex font-mono justify-center w-1/4 bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 rounded-lg text-base font-bold mt-4 md:mt-0"
        >
          Loading..
        </button>):(<button
          type="button"
          onClick={handleSubmit}
          className="inline-flex font-mono justify-center w-1/4 bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 rounded-lg text-base font-bold mt-4 md:mt-0"
        >
          SEND
        </button>)}
        
      </div>
      <TransactionDetails />
    </div>
  );
};

export default EthTransfer;
