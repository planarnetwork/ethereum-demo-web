
import {Address} from "../Account/AccountRepository";
import Web3 from "web3";
import {FlowRepository} from "@planar/ethereum-demo";
import {FlowRepositoryRepository} from "./FlowRepositoryRepository";

// @workaround: https://github.com/ethereum/web3.js/pull/1366/files
declare module "web3/types" {
  export interface Contract {
    setProvider: (provider: any) => void;
  }
}

export function deployFlowRepositoryContractFactory(flowRepositoryRepository: FlowRepositoryRepository,
                                                    web3: Web3): DeployFlowRepositoryContract {

  async function apply(address: Address): Promise<void> {
    const contract = new web3.eth.Contract(FlowRepository.abi);
    const deployedContract = await contract.deploy({
      data: FlowRepository.bytecode,
      arguments: []
    }).send({
      gas: 1000000,
      from: address
    });

    deployedContract.setProvider(web3.currentProvider); // @workaround: https://github.com/ethereum/web3.js/issues/1253

    flowRepositoryRepository.flowRepository = deployedContract;
  }

  return apply;
}

export type DeployFlowRepositoryContract = (address: Address) => Promise<void>;
