import React, { useEffect, useState } from "react";
import { injected } from "./connectors";
import { useWeb3React } from "@web3-react/core";

function MetamaskProvider({ children }) {
  const {
    active: networkActive,
    account: account,
    error: networkError,
    activate: activateNetwork,
    deactivate: deactivateNetwork,
  } = useWeb3React();
  console.log("networkActive", networkActive);
  console.log("account", account);
  console.log("networkError", networkError);
  //   const loggedAccount = window.localStorage.removeItem("loggedAccount");
  //   if (loggedAccount === undefined) {
  //     deactivateNetwork();
  //   }
  console.log("metamaskprovider", account);
  //   console.log("loggedAccount", loggedAccount);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    injected
      .isAuthorized()
      .then((isAuthorized) => {
        setLoaded(true);
        if (isAuthorized && !networkActive && !networkError) {
          activateNetwork(injected);
        }
      })
      .catch(() => {
        setLoaded(true);
      });
  }, [activateNetwork, networkActive, networkError]);
  if (loaded) {
    return children;
  }
  return <>Loading</>;
}

export default MetamaskProvider;
