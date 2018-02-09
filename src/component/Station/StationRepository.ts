import {observable} from "mobx";

export class StationRepository {

  @observable public stations: CRS[] = [];

  @observable public stationIndex: StationIDMap = {
    byId: {},
    byName: {}
  };

}

export type CRS = string;

export interface StationIDMap {
  byId: {
    [crs: string]: number;
  };
  byName: {
    [crs: string]: number;
  };
}
