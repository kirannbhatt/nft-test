require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  networks: {
    // ropsten: {
    //   url: "https://eth-ropsten.alchemyapi.io/v2/nZ6A387mpP8dKW22Yq-nl6W7ETWGQdQ3",
    //   accounts: [
    //     "80182edab35ac7fac68757a468fdbb8e88fc4aa6fb1c30bb932db60b31ac0ae0",
    //   ],
    // },
    rinkeby: {
      // need funds on account got intrinsic transaction cost
      url: "https://eth-rinkeby.alchemyapi.io/v2/D7Ydu4K58RYHJdGFr5ftQXT5g8v6SPBB",
      accounts: [
        "80182edab35ac7fac68757a468fdbb8e88fc4aa6fb1c30bb932db60b31ac0ae0",
      ],
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: "1NJ277C2K86RYDIG5IVGTWQ8T6FFF1UFJM",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
