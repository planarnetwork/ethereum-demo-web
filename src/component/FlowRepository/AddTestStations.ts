import {AddStation} from "./AddStation";
import {Address} from "../Account/AccountRepository";

const stations = require("../Station/test-stations.json");

export function addTestStations(addStation: AddStation): AddTestStations {

  async function apply(account: Address): Promise<void> {
    for (const station of stations) {
      await addStation(station, account);
    }
  }

  return apply;
}

export type AddTestStations = (account: Address) => Promise<void>;