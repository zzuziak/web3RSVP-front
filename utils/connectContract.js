import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
  const contractAddress = "0xE029Ef62e47E394BC852EFf633eB5aa4A223ECa6";
  const contractABI = abiJSON.abi;
  let rsvpContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      // checking for eth pbject in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      rsvpContract = new ethers.Contract(contractAddress, contractABI, signer);
    } else {
      console.log("Ethereum object doesn't exist");
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }

  return rsvpContract;
}

export default connectContract;