import ContractAbi from "../smart-contract/artifacts/contracts/YouTube.sol/YouTube.json";
import { ethers } from "ethers";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "0x9b4EC0c57FcE6849E19F2cD1Ee8674E9E972efcD",
    ContractAbi.abi,
    signer
  );
  // Returning the contract
  return contract;
}
