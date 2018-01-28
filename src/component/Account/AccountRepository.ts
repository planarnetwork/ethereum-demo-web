import {observable} from "mobx";

export class AccountRepository {

  @observable public accounts: Account[] = [];

}

export type Account = string;
