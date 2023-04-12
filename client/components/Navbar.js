import React, { useContext } from "react";
import { TranferContext } from "@/context/TransferContext";
import { shortenAddress } from "@/constants/shortenAddress";
import Link from "next/link";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const { connectWallet,
    walletConnected,address,currentAccount ,currentBalance} = useContext(TranferContext);
   
    
    

  return (
    
    <div>
      <nav className="bg-black w-full flex  justify-between items-center p-4">
        <div className=" text-white md-flex-[0.5] flex-initial justify-center items-center w-32">
          <Link href={"/"}><span className="text-white ml-3 text-4xl font-mono">TranzaKt</span></Link>
        </div>
        <ul className="text-white md:flex font-mono list-none flex-row justify-between items-center flex-initial space-x-3">
        <Link href={"/EthTransfer"}>TransferEth</Link>
        <Link href={"/TransferERC20"}>TransferERC20</Link>
      <Link href={"/TokenDetails"}>TokenDetails</Link>
    </ul>
        {!walletConnected ? (
          <button
            type="button"
            onClick={connectWallet}
            className="inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 rounded-lg text-base font-bold  font-mono mt-4 md:mt-0"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            type="button"
            className="inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 rounded-lg text-base font-bold  font-mono mt-4 md:mt-0"
          >
            {" "}
         {shortenAddress(currentAccount) }
          
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
