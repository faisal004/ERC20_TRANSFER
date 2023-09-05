import React, { useContext, useState } from "react";
import { TranferContext } from "@/context/TransferContext";
import { shortenAddress } from "@/constants/shortenAddress";
import Link from "next/link";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

// const NavBarItem = ({ title, classprops }) => (
//   <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
// );

const Navbar = () => {
  const {
    connectWallet,
    walletConnected,
    address,
    currentAccount,
    currentBalance,
  } = useContext(TranferContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-black w-full flex  justify-between items-center p-4 mx-auto">
        <div className=" text-white md-flex-[0.5] flex-initial justify-center items-center w-full ">
          <Link href={"/"}>
            <span className="text-white ml-3 text-4xl font-mono">TranzaKt</span>
          </Link>
        </div>
        <div className="hidden lg:block w-full">
          <ul className="text-white md:flex font-mono list-none flex-row justify-between items-center flex-initial space-x-3">
            <Link href={"/EthTransfer"}>TransferEth</Link>
            <Link href={"/TransferERC20"}>TransferERC20</Link>
            <Link href={"/BUYandSell"}>BUY/SELL</Link>
            <Link href={"/TokenDetails"}>Details</Link>
          </ul>
        </div>
        <div className="hidden lg:block w-full text-right items-center">
          {" "}
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
              {shortenAddress(currentAccount)}
            </button>
          )}
        </div>
        <div>
        <div className="text-white lg:hidden" onClick={toggleDropdown}>
          {isOpen ? <GiCancel /> : <GiHamburgerMenu />}
        </div>
       
        </div>
      </nav>
      <div>
      {isOpen && (
        <div className="bg-black text-white p-4 absolute top-16 right-0 left-0 z-10">
          <ul className="flex flex-col space-y-2">
          <Link className="hover:bg-gray-900" href={"/EthTransfer"}>TransferEth</Link>
            <Link className="hover:bg-gray-900" href={"/TransferERC20"}>TransferERC20</Link>
            <Link className="hover:bg-gray-900" href={"/BUYandSell"}>BUY/SELL</Link>
            <Link className="hover:bg-gray-900" href={"/TokenDetails"}>Details</Link>
           
          </ul>
          <div className="mt-2"> {!walletConnected ? (
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
              {shortenAddress(currentAccount)}
            </button>
          )}</div>
          
        </div>
      )}

      </div>
    </div>
  );
};

export default Navbar;
