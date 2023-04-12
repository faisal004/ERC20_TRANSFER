const {ethers} = require("hardhat");

async function main(){
  const EthTransferContract=await ethers.getContractFactory("Transaction");
  const deployedEthTransferContract=await EthTransferContract.deploy();
  await deployedEthTransferContract.deployed();
  console.log("Eth Transfer Contract Address:", deployedEthTransferContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });