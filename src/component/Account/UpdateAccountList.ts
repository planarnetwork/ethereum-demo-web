import {AccountRepository} from "./AccountRepository";

export function updateAccountListFactory(web3: any, accountRepository: AccountRepository)  {
  return async () => {
    accountRepository.accounts = await web3.eth.getAccounts();
  };
}
