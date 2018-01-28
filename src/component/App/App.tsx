import * as React from "react";
import {observer} from "mobx-react";
import "./App.css";
import {faEthereum} from "@fortawesome/fontawesome-free-brands";
import {AccountList, AccountListProps} from "../Account/AccountList";

const FontAwesomeIcon = require("@fortawesome/react-fontawesome");

export const App = observer((props: AppProps) => {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faEthereum} />
      <h1>The Planar Network Demo</h1>
      <AccountList accounts={props.accountList.accounts} />
    </div>
  );
});

export interface AppProps {
  accountList: AccountListProps;
}
