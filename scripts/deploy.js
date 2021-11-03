const { ethers } = require("hardhat");

module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId
}) => {
  const { deploy, log} = deployments;
  const { deployer } = await getNamedAccounts()
  const chainId = await getChainId()

  log("-----deploy script------")
  const ZegalNFT = await deploy("zegalNFT", {
    from: deployer,
    log: true
  })

  log(`-- NFT contract deployed to ${ZegalNFT.address}`)
  let legalDocURI = "https://zegal.com/kiran-testing"

  const zegalNFTContract = await ethers.getContractFactory("zegalNFT")
}