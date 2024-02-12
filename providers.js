import 'dotenv/config';
import { ethers } from "ethers";



 

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// console.log("current block numder", await provider.getBlockNumber());

// console.log("atg.eth is", await provider.resolveName("atg.eth"));

// console.log(
//       "0xc4ac4174aa9a93d9eef02621ce8205c75d003de5 is",
//       await provider.lookupAddress("0xc4ac4174aa9a93d9eef02621ce8205c75d003de5")
//     );

const vitalikBalance = await provider.getBalance( "vitalik.eth");
let sanfordBalance = await provider.getBalance( "sanfordstout.eth");

sanfordBalance = sanfordBalance.add(ethers.utils.parseEther("5000"))

if (vitalikBalance.gt(sanfordBalance)){
    console.log("vitalik has more eth than sanford")
}else{
    console.log("sanford has more eth than vitalik")
}

console.log(" vitalik.eth has", ethers.utils.formatEther(vitalikBalance), "ETH");
console.log(" sanfordstout has", ethers.utils.formatEther(sanfordBalance), "ETH");

// console.log("1.5 eth is", ethers.utils.formatEther (ethers.utils.parseEther( "1.5")));