
import * as React from "react";
import {observer} from "mobx-react";
import {Contract} from "web3/types";
import {Address} from "../Account/AccountRepository";
import {CRS, StationIDMap} from "../Station/StationRepository";

const stations = require("../Station/test-stations.json");

export const Loader = observer<any>((props: LoaderProps) => {
  const expectedStations = stations.length;
  const loadedStations = Object.keys(props.stationIndex.byId).length;

  const items = {
    "Load accounts": props.accounts.length > 0,
    "Deploy FlowRepository": !!props.flowRepository,
    "Add stations": props.stations.length === expectedStations,
    "Load stations": loadedStations === expectedStations
  };

  return (
    <div className="box">
      <h2 className="subtitle has-text-dark">Setup</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(items).map(row)
          }
        </tbody>
      </table>
      <progress
        className="progress"
        value={Object.values(items).filter(v => v).length + props.stations.length + loadedStations}
        max={Object.keys(items).length + (expectedStations * 2)}
      />
    </div>
  );
});

function row([key, value]: [string, boolean]) {
  return (
    <tr key={key}>
      <td>{key}</td><td>{value ? "loaded" : "loading"}</td>
    </tr>
  );
}

export interface LoaderProps {
  accounts: Address[];
  flowRepository?: Contract;
  stations: CRS[];
  stationIndex: StationIDMap;
}
