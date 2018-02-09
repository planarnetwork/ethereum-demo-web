
import * as memoize from "memoized-class-decorator";
import {AccountRepository} from "../component/Account/AccountRepository";
import {updateAccountListFactory} from "../component/Account/UpdateAccountList";
import {deployFlowRepositoryContractFactory} from "../component/Flow/DeployFlowRepositoryContract";
import Web3 from "web3";

declare var web3; // sometimes declared globally by metamask

export class Container {

  @memoize
  public get web3() {
    if (typeof web3 !== "undefined") {
      return new Web3(web3.currentProvider);
    }
    else {
      return new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  }

  @memoize
  public get accountRepository(): AccountRepository {
    return new AccountRepository();
  }

  @memoize
  public get updateAccountList(): Function {
    return updateAccountListFactory(this.web3, this.accountRepository);
  }

  @memoize
  public get deployFlowRepositoryContract(): Function {
    return deployFlowRepositoryContractFactory(this.web3);
  }
}
