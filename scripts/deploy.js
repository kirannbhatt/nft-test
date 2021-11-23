async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ZNFT = await ethers.getContractFactory("zegalNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const znft = await ZNFT.deploy();
  console.log("Contract deployed to address:", znft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
