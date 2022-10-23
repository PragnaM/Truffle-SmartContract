const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = require("./secrets.json").mnemonic;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.17",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
  chainstack: {
    deployment: {
      accounts: [
        {
          privateKeyFile:
            "//root/.ethereum/keystore/UTC--2019-08-01T07-24-17.754471456Z--73236c8d8aaee5263e8a32c71171030dd7a3e8e6",
          password: "chainstack1234!",
        },
      ],
      host: "ENDPOINT",
      port: false,
      protocol: "https",
      type: "rpc",
    },
    dappConnection: [
      "$WEB3", // uses pre existing web3 object if available (e.g in Mist)
      "ws://localhost:8546",
      "http://localhost:8545",
    ],
    gas: "auto",
  },
};
