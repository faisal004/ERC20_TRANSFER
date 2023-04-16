const {ethers} = require("hardhat");

async function main(){
  const ERC20TranferContract=await ethers.getContractFactory("ERC20Transfer");
  const deployedERC20TransferContract=await ERC20TranferContract.deploy(100000);
  await deployedERC20TransferContract.deployed();
  console.log("ERC20 Transfer Contract Address:", deployedERC20TransferContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });