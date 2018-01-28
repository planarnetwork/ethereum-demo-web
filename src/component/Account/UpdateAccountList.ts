import {AccountRepository} from "./AccountRepository";

export function updateAccountListFactory(web3: any, accountRepository: AccountRepository)  {
  return async () => {
    try {
      accountRepository.accounts = await web3.eth.getAccounts();
    } catch (err) {
      console.error(err);
    }
  };
}
