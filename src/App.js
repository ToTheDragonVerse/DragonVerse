import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Home from "./pages/home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Whitelist from "./pages/whitelist";
import Pricingplans from "./Components/PricingPlan";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Router>
      <Web3ReactProvider getLibrary={getLibrary}>
        {/* <MetamaskProvider> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whitelist" element={<Whitelist />} />
          <Route path="/pricing" element={<Pricingplans />} />
        </Routes>
        {/* </MetamaskProvider> */}
      </Web3ReactProvider>
    </Router>
  );
}

export default App;
