import React, { useEffect, useRef, useState } from "react";
import { Contract, ethers, providers, utils } from "ethers";
import { shortenAddress } from "@/constants/shortenAddress";
import Web3Modal from "web3modal";

import {
  ABI,
  EthTransferAddress,
  ERC20TransferAddress,
  ERC20_ABI,
} from "@/constants/constant";

export const TranferContext = React.createContext();

export const TransferProvider = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [holderArray, setHolderArray] = useState([]);
  const [accountBalance, setAccountBalance] = useState("");
  const [userID, setUserID] = useState("");
  const [NoOfToken, setNoOfToken] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [TokenSymbol, setTokenSymbol] = useState("");
  const [TokenOwner, setTokenOwner] = useState("");
  const [TokenOwnerBalance, setTokenOwnerBalance] = useState("");

  const [formData, setFormData] = useState({ addressTo: "", amount: "" });
  const [isLoading, setIsLoading] = useState(false);

  const web3ModalRef = useRef();
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
      getAllTransactions();
      getAllERC20Transactions();
      tokenDetails();
    } catch (err) {
      console.error(err);
    }
  };

  const sendEth = async () => {
    try {
      const { addressTo, amount } = formData;

      const signer = await getProviderOrSigner(true);
      const transactioContract = new Contract(EthTransferAddress, ABI, signer);

      const parsedAmount = ethers.utils.parseEther(amount);
      await signer.sendTransaction({ to: addressTo, value: parsedAmount });

      const transactionHash = await transactioContract.addToBlockchain(
        addressTo,
        parsedAmount
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllTransactions = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const transactioContract = new Contract(EthTransferAddress, ABI, signer);

      const availableTransactions =
        await transactioContract.getAllTransaction();
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),

          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      );
      //console.log(structuredTransactions);
      setTransactions(structuredTransactions);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllERC20Transactions = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const transactioContract = new Contract(ERC20TransferAddress, ABI, signer);

      const availableTransactions =
        await transactioContract.getAllTransaction();
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),

          amount: parseInt(transaction.amount._hex) ,
        })
      );
      console.log(structuredTransactions);
      setTransactions(structuredTransactions);
    } catch (error) {
      console.error(error);
    }
  };

  const tranferERC20Token = async () => {
    try {
      const { addressTo, amount } = formData;
      const signer = await getProviderOrSigner(true);
      const ERC20TransferContract = new Contract(
        ERC20TransferAddress,
        ERC20_ABI,
        signer
      );
      const transactionHash = await ERC20TransferContract.addToBlockchain(
        addressTo,
        BigInt(amount * 1)
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);
    } catch (error) {
      console.error(error);
    }
  };

  const tokenDetails = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const ERC20TransferContract = new Contract(
        ERC20TransferAddress,
        ERC20_ABI,
        signer
      );
      const address = await signer.getAddress();
      const TokenHolder = await ERC20TransferContract.balanceOf(address);
      setAccountBalance(TokenHolder.toNumber());
      //console.log(TokenHolder)
      const supply = await ERC20TransferContract.totalSupply();
      const TotalToken = supply.toNumber();
      setNoOfToken(TotalToken);
      const name = await ERC20TransferContract.name();
      setTokenName(name);
      const Symbol = await ERC20TransferContract.symbol();
      setTokenSymbol(Symbol);
      const ownerOfERCContract = await ERC20TransferContract.ownerOfContract();
      setTokenOwner(ownerOfERCContract);

      //console.log(ownerOfERCContract);
    } catch (error) {
      console.error(error);
    }
  };

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();

    setCurrentAccount(address);
    //console.log(signer);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 11155111) {
      window.alert("Change the network to sepolia");
      throw new Error("Change network to Sepolia");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "sepolia",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, []);

  return (
    <TranferContext.Provider
      value={{
        connectWallet,
        walletConnected,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendEth,
        currentBalance,
        transactions,

        tokenDetails,
        tranferERC20Token,

        NoOfToken,
        tokenName,
        tokenName,
        TokenSymbol,
        TokenOwner,
        TokenOwnerBalance,
        accountBalance,
      }}
    >
      {children}
    </TranferContext.Provider>
  );
};
