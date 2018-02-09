import {observable} from "mobx";
import {Contract} from "web3/types";

export class FlowRepositoryRepository {

  @observable public flowRepository?: Contract;

}
