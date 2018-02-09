import {CRS, StationRepository} from "../Station/StationRepository";
import {Address} from "../Account/AccountRepository";
import {FlowRepositoryRepository} from "./FlowRepositoryRepository";

export function addStation(flowRepositoryRepository: FlowRepositoryRepository,
                           stationRepository: StationRepository): AddStation {

  async function apply(station: CRS, account: Address): Promise<void> {
    const repo = flowRepositoryRepository.flowRepository;

    if (!repo) {
      throw Error("Flow repository not deployed");
    }

    await await repo.methods.addStation(station).send({ from: account, gas: 100000 });

    stationRepository.stations.push(station);
  }

  return apply;
}

export type AddStation = (station: CRS, account: Address) => Promise<void>;
