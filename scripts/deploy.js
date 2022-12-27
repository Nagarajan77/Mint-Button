const hre = require("hardhat");

async function main() {

  const MintExample = await hre.ethers.getContractFactory("MintExample");
  const mintExample = await MintExample.deploy("Minter","MINT");

  await mintExample.deployed();

  console.log("MintExample deployed to:", mintExample.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
