import * as React from "react";
import {observer} from "mobx-react";
import {Account} from "./AccountRepository";

function accountList(props: AccountListProps) {
  return props.accounts.length === 0 ? "" : (
    <ul>
      {props.accounts.map(accountRow)}
    </ul>
  );
}

function accountRow (account: Account) {
  return <li>{account}</li>;
}

export interface AccountListProps {
  accounts: Account[];
}

export const AccountList = observer<any>(accountList);
