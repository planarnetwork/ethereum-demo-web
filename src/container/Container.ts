
import * as memoize from "memoized-class-decorator";
import {AccountRepository} from "../component/Account/AccountRepository";
import {updateAccountListFactory} from "../component/Account/UpdateAccountList";
const Web3 = require("web3");

declare var web3;

export class Container {

  @memoize
  public get web3() {
    if (typeof web3 !== "undefined") {
      return new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      return new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  }

  @memoize
  public get accountRepository(): AccountRepository {
    return new AccountRepository();
  }

  @memoize
  public getUpdateAccountList(): Command {
    return updateAccountListFactory(this.web3, this.accountRepository);
  }

}

export type Command = () => any;