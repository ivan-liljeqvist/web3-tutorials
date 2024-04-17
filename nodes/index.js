import { ethers } from "ethers";

let provider = new ethers.JsonRpcProvider("https://site1.moralis-nodes.com/base/75c92462de064975bb523f0f3c30f7b3")

let block = await provider.getBlockNumber();

console.log(block);

let vitalikAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

let balance = await provider.getBalance(vitalikAddress);

console.log(ethers.formatEther(balance));

let txCount = await provider.getTransactionCount(vitalikAddress);

console.log(txCount);