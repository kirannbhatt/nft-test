const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const LegalNFT = await hre.ethers.getContractFactory("legalNFT");
  const legalNFT = await LegalNFT.deploy();

  await legalNFT.deployed();

  console.log("LegalNFT deployed to:", legalNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
