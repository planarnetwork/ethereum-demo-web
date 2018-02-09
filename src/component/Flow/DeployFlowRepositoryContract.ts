
import {Account} from "../Account/AccountRepository";
import {Contract} from "web3/types";
import Web3 from "web3";
import {FlowRepository} from "@planar/ethereum-demo";

export function deployFlowRepositoryContractFactory(web3: Web3): DeployFlowRepositoryContract {

  async function apply(address: Account): Promise<Contract> {
    const contract = new web3.eth.Contract(FlowRepository.abi);

    return contract.deploy({data: FlowRepository.bytecode, arguments: []}).send({ gas: 1000000, from: address });
  }

  return apply;
}

export type DeployFlowRepositoryContract = (address: Account) => Promise<Contract>;
