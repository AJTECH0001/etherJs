import { ethers } from "ethers";
import { getProvider } from "./utils.js";

import ajtechAbi from "./abi/ajtechAbi.js";


const address = "0x957488fD9E25cD8A60B06E5585704C60B35d8027";

const sepoliaProvider = getProvider();

const AJTECHNFT = new ethers.Contract(address, ajtechAbi, sepoliaProvider);

const mintPrice = await AJTECHNFT.name();

console.log("ajtech mint price is", mintPrice )