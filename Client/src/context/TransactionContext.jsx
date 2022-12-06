import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants.js";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setconnectedAccount] = useState();
  const [formData, setformData] = useState({
    address: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const [isLoading, setisLoading] = useState(false);
  const [transactionCount, settransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, settransactions] = useState([]);
  const handleChange = (e, name) => {
    setformData((prevsate) => ({ ...prevsate, [name]: e.target.value }));
    // console.log(name)
  };

  const getAllTrasaction = async () => {
    try {
      if (!ethereum) {
        alert("Please install metamsk");
        window.open("https://metamask.io");
      } else {
        const transactionContract = getEthereumContract();
        const availableTransctions =
          await transactionContract.getAllTrasaction();

        const struccturedTransactions = availableTransctions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );
        settransactions(struccturedTransactions);
        console.log(struccturedTransactions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ************connect wallet*********
  const CheckIfWalletConnexted = async () => {
    try {
      if (!ethereum) {
        alert("Please install metamsk");
        window.open("https://metamask.io");
      } else {
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length) {
          setconnectedAccount(accounts[0]);
          getAllTrasaction();
        } else {
          console.log("No accounts found");
        }
        // console.log(accounts);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Nop ethereum object.");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert("Please install metamsk");
        window.open("https://metamask.io");
      } else {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setconnectedAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Nop ethereum object.");
    }
  };
  // ************connect wallet end*********

  const sendtransaction = async () => {
    try {
      if (!ethereum) {
        alert("Please install metamsk");
        window.open("https://metamask.io");
      } else {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setconnectedAccount(accounts[0]);
        const { addressTo, amount, keyword, message } = formData;
        const transactionContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: connectedAccount,
              to: addressTo,
              gas: "0x5208", //21000 GWEI
              value: parsedAmount._hex, //ex. 0.0001
            },
          ],
        });
        const transactionHash = await transactionContract.addToBlockchain(
          addressTo,
          parsedAmount,
          message,
          keyword
        );
        setisLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        setisLoading(false);
        console.log(`Success - ${transactionHash.hash}`);
        const taransactionCount =
          await transactionContract.getTrasactionCount();
        settransactionCount(taransactionCount.toNumber());
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  const checkIfTransactionExist = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactionCount = await transactionContract.getTrasactionCount();
      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  useEffect(() => {
    CheckIfWalletConnexted();
    checkIfTransactionExist();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        formData,
        setformData,
        handleChange,
        sendtransaction,
        isLoading,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
