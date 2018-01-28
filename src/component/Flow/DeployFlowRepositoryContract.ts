
import {FlowRepository} from "@planar/ethereum-demo/contract/FlowRepository";
import {Account} from "../Account/AccountRepository";

export function deployFlowRepositoryContractFactory(web3: any) {
  return (address: Account): Promise<FlowRepository> => {
    return FlowRepository.createAndValidate(web3, address);
  };
}