require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/vsaN_X6cJnfukLXBME8f1ZaZ-s_dwjCR",
      accounts: ["b593212bc644cb0413d19f43aece326469f821f727c5bb40a1bf499b899d8e99"],
    },
  },
};
