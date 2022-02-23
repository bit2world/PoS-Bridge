import { createContext, useContext, useEffect, useState } from 'react';

import getWeb3 from "../utils/web3";
const AppContext = createContext();

const AppProvider = (props) => {
  useEffect(() => {
    loadBlockchainData();
  }, [])
  const [Networkid, setNetworkid] = useState(0);
  const [account, setAccount] = useState("");

  const loadBlockchainData = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();

    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();

    setNetworkid(networkId);
  };

  return (
    // this is the provider providing state
    <AppContext.Provider value={[account, setAccount, Networkid, setNetworkid]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export function useAppContext() {
  return useContext(AppContext);
}