import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Web3ReactProvider } from "@web3-react/core";
import Home from "./pages/home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Whitelist from "./pages/whitelist";
import Pricingplans from "./Components/PricingPlan";
import configAxios from "./Apis";
import { metaMask, hooks as metaMaskHooks } from "./connectors/metamask";
import { walletConnect, hooks as walletConnectHooks } from "./connectors/walletConnect";
import { network, hooks as networkHooks } from "./connectors/network";
import DappProvider from "./contexts/Dapp/DappProvider";

configAxios();

const connectors = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [network, networkHooks],
]

const chainIds = process.env.REACT_APP_CHAIN_IDS.split(",").map(id => parseInt(id));
const paymentAddressList = chainIds.map((id, index) => process.env[`REACT_APP_PAYMENT_ADDRESS_${index}`]);

function App() {
  return (
    <Router>
      <Web3ReactProvider connectors={connectors}>
        <DappProvider chainIds={chainIds} paymentAddressList={paymentAddressList} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whitelist" element={<Whitelist />} />
            <Route path="/pricing" element={<Pricingplans />} />
          </Routes>
        </DappProvider>
        {/* </MetamaskProvider> */}
      </Web3ReactProvider>
    </Router>
  );
}

export default App;
