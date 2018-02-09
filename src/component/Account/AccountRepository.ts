import {observable} from "mobx";

export class AccountRepository {

  @observable public accounts: Address[] = [];

}

export type Address = string;
