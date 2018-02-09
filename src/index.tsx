import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./component/App/App";
import registerServiceWorker from "./registerServiceWorker";
import "bulma/css/bulma.css";
import {Container} from "./container/Container";

const container = new Container();

ReactDOM.render(
  <App
    accountRepository={container.accountRepository}
    flowRepositoryRepository={container.flowRepositoryRepository}
    stationRepository={container.stationRepository}
  />,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
container
  .updateAccountList()
  .then(() => console.log("deploy") || container.deployFlowRepositoryContract(container.accountRepository.accounts[0]))
  .then(() => console.log("test stations add") || container.addTestStations(container.accountRepository.accounts[0]))
  .then(() => console.log("test stations load") || container.loadStationFromContract());
