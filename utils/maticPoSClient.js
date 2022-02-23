const MaticPOSClient = require('@maticnetwork/maticjs').MaticPOSClient;
const config = require('../config/config.json');

let maticPosClient;

let parentProvider;
let maticProvider;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running
  parentProvider = window.ethereum;
  maticProvider = window.ethereum;
}
const maticPoSClient = new MaticPOSClient({
  network: config.NETWORK,
  version: config.VERSION,
  parentProvider: parentProvider,
  maticProvider: maticProvider,
});

export default maticPoSClient;
