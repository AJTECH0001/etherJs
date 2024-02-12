import "dotenv/config";
import { ethers } from "ethers";

// const wallet = ethers.Wallet.createRandom();

// console.log("address" , wallet.address);
// console.log("private key" , wallet.privateKey);
// console.log("mnnemonic" , wallet.mnemonic.phrase);

// printing addre

// let path, myWallet;

// for (let i = 0; i < 5; i++) {

//     path: "m/44'/60'/0'/0/${i}",
//     myWallet = ethers.Wallet.fromMnemonic(wallet.mnemonic.phrase, path)
//     console.log(`Address ${i}: ` + myWallet.address);
//     console.log(`privateKey ${i}: ` + myWallet.privateKey);

// }

// getting address of a privateKey

const sepoliainfuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const mainnetinfuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const sepoliaprovider = new ethers.providers.JsonRpcProvider(sepoliainfuraUrl);
const mainnetprovider = new ethers.providers.JsonRpcProvider(mainnetinfuraUrl);


const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, sepoliaprovider);


const myBalance = await sepoliaprovider.getBalance(signer.address);

console.log("rinkeby balance ", ethers.utils.formatEther(myBalance));

const sanfordsouth = await mainnetprovider.resolveName("0x99eABb1B214Ac6Bb0fcFbcA4A426BcEBcc03C3DD");

console.log("sending eth to", sanfordsouth)

const tx = await signer.sendTransaction({
  to: sanfordsouth,
  value: myBalance.div(ethers.BigNumber.from(10)),  // send half the rinkeby funds to Sanford South
});

console.log("TX SENT" , tx );

await tx.wait();

console.log("TX CONFIRMED");



// const signature = await wallet.signMessage("hello world");
// console.log("sign message", signature);

// const signerAddress = ethers.utils.verifyMessage("hello world", signature);
// console.log("sign message signature ", signerAddress);
