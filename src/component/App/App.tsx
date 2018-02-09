import * as React from "react";
import {observer} from "mobx-react";
import {faEthereum} from "@fortawesome/fontawesome-free-brands";
import {Loader} from "../Loader/Loader";
import {AccountRepository} from "../Account/AccountRepository";
import {FlowRepositoryRepository} from "../FlowRepository/FlowRepositoryRepository";
import {StationRepository} from "../Station/StationRepository";

const FontAwesomeIcon = require("@fortawesome/react-fontawesome");

export const App = observer((props: AppProps) => {
  return (
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">The Planar Network Demo <FontAwesomeIcon icon={faEthereum} /></h1>
          <Loader
            accounts={props.accountRepository.accounts}
            flowRepository={props.flowRepositoryRepository.flowRepository}
            stations={props.stationRepository.stations}
            stationIndex={props.stationRepository.stationIndex}
          />
        </div>
      </div>
    </section>
  );
});

export interface AppProps {
  accountRepository: AccountRepository;
  flowRepositoryRepository: FlowRepositoryRepository;
  stationRepository: StationRepository;
}
