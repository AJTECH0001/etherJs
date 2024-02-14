import { BigNumber, ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

const mainnetProvider = getProvider(true);
const sepoliaSigner = getSigner();

const myBalance = await sepoliaSigner.getBalance();

console.log(" Mybalance", ethers.utils.formatEther(myBalance));

const sandfordAddress = await mainnetProvider.resolveName("sanfordstout.eth");

console.log("Sending ETH to", sandfordAddress);



console.log("My balance", ethers.utils.formatEther(myBalance));



const tx = await sepoliaSigner.sendTransaction({
  to: sandfordAddress,
  value: myBalance.div(BigNumber.from(10)),
});

console.log("TX SENT!", tx.hash);

await tx.wait();

console.log("TX MINED!");