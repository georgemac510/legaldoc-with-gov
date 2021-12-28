const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraURL = 'https://rinkeby.infura.io/v3/376f051255db444596b482dbf36e186c'

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infuraURL),
      network_id: 4,          // Rinkeby's network id
      gas: 5500000,        
    },
  },
  compilers: {
    solc: {
      version: "0.8.2",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
