const { networkConfig } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  log("-----deploy script------");
  const ZegalNFT = await deploy("zegalNFT", {
    from: deployer,
    log: true,
  });

  log(`-- NFT contract deployed to ${ZegalNFT.address}`);
  let legalDocURI = "https://zegal.com/kiran-testing";

  const zegalNFTContract = await ethers.getContractFactory("zegalNFT");
  const accounts = await hre.ethers.getSigners();
  const signer = accounts[0];
  const zegalNFT = new ethers.Contract(
    ZegalNFT.address,
    zegalNFTContract.interface,
    signer
  );
  const networkName = networkConfig[chainId]["name"];
  log(
    `Verify with:\n npx hardhat verify --network ${networkName} ${zegalNFT.address} `
  );

  let txResponse = await zegalNFT.create(legalDocURI);
  let txReceipt = await txResponse.wait(1);
  log(`NFT created!`);
  log(`TokenURI ${await zegalNFT.tokenURI(0)}`);
};
