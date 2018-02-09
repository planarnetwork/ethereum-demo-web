import {FlowRepositoryRepository} from "./FlowRepositoryRepository";
import {StationRepository} from "../Station/StationRepository";

export function loadStationsFromContract(flowRepositoryRepository: FlowRepositoryRepository,
                                         stationRepository: StationRepository): LoadStationsFromContract {

  async function apply(): Promise<void> {
    const repo = flowRepositoryRepository.flowRepository;

    if (!repo) {
      throw Error("FlowRepository not deployed");
    }

    const numStations = await repo.methods.getStationCount().call();
    const byName = {};
    const byId = {};

    for (let i = 0; i < numStations; i++) {
      const station = await repo.methods.stations(i).call();

      byName[station] = i;
      byId[i] = station;

      stationRepository.stationIndex = { byName, byId };
    }
  }

  return apply;
}

export type LoadStationsFromContract = () => Promise<void>;