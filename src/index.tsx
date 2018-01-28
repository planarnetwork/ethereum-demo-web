import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./component/App/App";
import registerServiceWorker from "./registerServiceWorker";
import "bulma/css/bulma.css";
import {Container} from "./container/Container";

const container = new Container();
const getAccounts = container.getUpdateAccountList();

ReactDOM.render(
  <App accountList={container.accountRepository}/>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
getAccounts();