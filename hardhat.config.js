require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/wXNAnIuCQrb6t29V5Aj74epB3mGI5tAh",
        blockNumber: 17369984,
      },
    },
  },
};
