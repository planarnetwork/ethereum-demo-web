import {AccountRepository} from "./AccountRepository";
import Web3 from "web3";

export function updateAccountListFactory(web3: Web3, accountRepository: AccountRepository)  {

  async function apply() {
    try {
      accountRepository.accounts = await web3.eth.getAccounts();
    } catch (err) {
      console.error(err);
    }
  }

  return apply;
}
