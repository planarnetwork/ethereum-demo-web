
import * as memoize from "memoized-class-decorator";
import {AccountRepository} from "../component/Account/AccountRepository";
import {updateAccountListFactory} from "../component/Account/UpdateAccountList";
import {deployFlowRepositoryContractFactory} from "../component/FlowRepository/DeployFlowRepositoryContract";
import Web3 from "web3";
import {FlowRepositoryRepository} from "../component/FlowRepository/FlowRepositoryRepository";
import {addStation, AddStation} from "../component/FlowRepository/AddStation";
import {StationRepository} from "../component/Station/StationRepository";
import {AddTestStations, addTestStations} from "../component/FlowRepository/AddTestStations";
import {loadStationsFromContract, LoadStationsFromContract} from "../component/FlowRepository/LoadStationsFromContract";

declare var web3; // sometimes declared globally by metamask

export class Container {

  @memoize
  public get web3() {
    if (typeof web3 !== "undefined") {
      return new Web3(web3.currentProvider);
    }
    else {
      return new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  }

  @memoize
  public get loadStationFromContract(): LoadStationsFromContract {
    return loadStationsFromContract(this.flowRepositoryRepository, this.stationRepository);
  }

  @memoize
  public get addTestStations(): AddTestStations {
    return addTestStations(this.addStation);
  }

  @memoize
  public get addStation(): AddStation {
    return addStation(this.flowRepositoryRepository, this.stationRepository);
  }

  @memoize
  public get stationRepository(): StationRepository {
    return new StationRepository();
  }

  @memoize
  public get accountRepository(): AccountRepository {
    return new AccountRepository();
  }

  @memoize
  public get flowRepositoryRepository(): FlowRepositoryRepository {
    return new FlowRepositoryRepository();
  }

  @memoize
  public get updateAccountList(): Function {
    return updateAccountListFactory(this.web3, this.accountRepository);
  }

  @memoize
  public get deployFlowRepositoryContract(): Function {
    return deployFlowRepositoryContractFactory(this.flowRepositoryRepository, this.web3);
  }
}
