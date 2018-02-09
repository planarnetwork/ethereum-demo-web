import * as React from "react";
import {observer} from "mobx-react";
import {Address} from "./AccountRepository";

export const AccountList = observer<any>((props: AccountListProps) => {
  return props.accounts.length === 0 ? "" : (
    <ul>
      {props.accounts.map(accountRow)}
    </ul>
  );
});

function accountRow (account: Address, id: number) {
  return <li key={id}>{account}</li>;
}

export interface AccountListProps {
  accounts: Address[];
}
