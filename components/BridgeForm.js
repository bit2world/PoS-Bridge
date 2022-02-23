import React, { useState } from "react";
import Web3 from "web3";
import { useAppContext } from "../context/AppContext";
import maticPoSClient from "../utils/maticPoSClient";
const config = require("../config/config.json");

const BridgeForm = ({ transactionWay }) => {
  const [amount, setAmount] = useState("");
  const account = useAppContext();
  const handleChange = (e) => {
    setAmount(e.target.value);
  }

  // POS ether functionality
  const depositERC20 = async () => {
    const weiAmount = Web3.utils.toWei(amount, "ether")
    await maticPoSClient.approveERC20ForDeposit(config.posRootERC20, 1, {
      from: account,
    });
    await maticPoSClient.depositERC20ForUser(config.posRootERC20, account, x1, {
      from: account,
    });
  };

  const burnERC20 = async () => {
    const weiAmount = Web3.utils.toWei(amount, "ether")
    await maticPoSClient
      .burnERC20(config.posChildERC20, weiAmount, {
        from: account,
      })
      .then((res) => {
        setBurnHash(res.transactionHash);
      });
  };

  return (
    <div className="w-4/5 mt-6 bg-white p-8 rounded-xl">
      <p className="text-lg font-bold">From</p>
      <div className="flex-col rounded-lg border border-gray-300">
        <div className="flex justify-center items-center border-b border-gray-3 00">
          {transactionWay == "deposit" ? "Ethereum" : "Polygon"}
        </div>
        <input className="w-full p-1 rounded-lg focus:outline-none" placeholder="Input amount here" onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <p className="text-lg font-bold">To</p>
        <p className="text-center rounded-lg border border-gray-300">
          {transactionWay == "deposit" ? "Polygon" : "Ethereum"}
        </p>
      </div>
      <div className="flex p-2 justify-center">
        <button
          className="rounded-lg bg-purple-400 px-10 py-1"
          onClick={transactionWay == "deposit" ? depositERC20 : burnERC20}
        >
          Transfer
        </button>
      </div>
    </div>
  )
}

export default BridgeForm;