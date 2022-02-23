import React, { useEffect, useState } from "react";
import BridgeForm from "./BridgeForm";
import ToggleBtn from "./ToggleBtn";

const BridgeTokenCard = () => {
	const [transactionWay, setTransactionWay] = useState("deposit");
	const toggle = async (way) => {
		setTransactionWay(way);
		if (way == "withdraw") {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
			});
		} else {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
			});
		}
	}
	return (
		<div className="h-full grow flex flex-col items-center p-10 bg-gradient-to-r from-purple-200 to-indigo-100">
			<div className="w-4/5 flex p-2 rounded-xl bg-indigo-50">
				<ToggleBtn
					addStyles={transactionWay == "deposit" ? "bg-white" : "bg-indigo-50"}
					clickHandler={() => toggle("deposit")}
				>
					Deposit
				</ToggleBtn>
				<ToggleBtn
					addStyles={transactionWay == "withdraw" ? "bg-white" : "bg-indigo-50"}
					clickHandler={() => toggle("withdraw")}
				>
					Withdraw
				</ToggleBtn>
			</div>
			<BridgeForm
				transactionWay={transactionWay}
			/>
		</div>
	)
}

export default BridgeTokenCard;