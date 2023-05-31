const { ethers } = require("hardhat");

async function main() {
  const usdt = await ethers.getContractAt(
    "TetherToken",
    "0xdAC17F958D2ee523a2206206994597C13D831ec7"
  );
  const balance = await usdt.balanceOf(
    "0x1dC545546370f9D342CAdA675622225D987B71b6"
  );
  console.log(balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
