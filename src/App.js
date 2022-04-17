import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

import Navigationbar from "./Layouts/Navbar";
import Dashboard from "./Components/Dashboard";
import Roadmap from "./Components/Roadmap";
import Storyline from "./Components/Storyline";
import About from "./Components/About";
import Membership from "./Components/Membership";
import DevelopStages from "./Components/DevelopStages";
import Viproom from "./Components/Viproom";
// import Roadmap from "./Components/Roadmap_";
import Team from "./Components/Team";
import FuturePlan from "./Components/FuturePlan";
import Breakdown from "./Components/Breakdown";
import Faq from "./Components/Faq";
import JoinDiscord from "./Components/JoinDiscord";
import ConnectWallet from "./Components/ConnectWallet";
import DropCount from "./Components/DropCount";
import MetamaskProvider from "./Components/MetamaskProvider";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* <MetamaskProvider> */}
      <div className="body">
        <Navigationbar />
        <Dashboard />
        {/* <ConnectWallet /> */}
        <About />
        <Storyline />
        <Membership />
        <DevelopStages />
        <Roadmap />
        {/* <About /> */}
        <DropCount />
        {/* <Viproom /> */}
        {/* <Roadmap /> */}
        {/* <FuturePlan />
        <Breakdown /> */}
        <Team />
        <Faq />
        <JoinDiscord />
      </div>
      {/* </MetamaskProvider> */}
    </Web3ReactProvider>
  );
}

export default App;
