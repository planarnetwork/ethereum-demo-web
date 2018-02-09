import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";

it("renders without crashing", () => {
  ReactDOM.render(
    <App
      accountRepository={{ accounts: [] }}
      flowRepositoryRepository={{ }}
      stationRepository={{ stations: [], stationIndex: { byId: {}, byName: {}} }}
    />,
    document.createElement("div")
  );
});
