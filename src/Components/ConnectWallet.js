import React, { Component, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Row, Col, Container, Image } from "react-bootstrap";
import Clock from "./Clock";
import PresaleClock from "./PresaleClock";
import Dropdown from "./CardMenu";
import AddToCalendar from "../react-calendar/ReactAddToCalendar";
import ContractAbi from "../Abis/BarGangNFT.json";
import web3 from "web3";
import { useWeb3React } from "@web3-react/core";
// import { injected } from "../Components/connectors";
import { BigNumber, ethers, getDefaultProvider } from "ethers";
import { PRESALE_PRICE, PUBLICSALE_PRICE } from "../config";
require("dotenv").config();

export default function ConnectWallet() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicks, setClicks] = useState(1);
  const [currentStage, setCurrentStage] = useState(0);
  const [apiCallable, setApiCallable] = useState(false);

  const IncrementItem = () => {
    if (currentStage == 1) {
      if (clicks < 5) {
        setClicks(clicks + 1);
      }
    } else if (currentStage == 2) {
      if (clicks < 10) {
        setClicks(clicks + 1);
      }
    }
  };

  const DecreaseItem = () => {
    if (clicks > 1) {
      setClicks(clicks - 1);
    }
  };

  const toggleOpen = () => {
    setIsOpen(isOpen);
  };

  const { chainId, active } = useWeb3React();

  const validNetwork =
    chainId === parseInt(process.env.REACT_APP_CHAIN_ID) ? true : false;
  // useEagerConnect();

  useEffect(() => {
    if (validNetwork && active) {
      setApiCallable(true);
    }
  }, [validNetwork, active]);

  if (apiCallable) {
    setInterval(() => {
      getStage();
    }, 1000);
  }

  async function getStage() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const BarGangContract = new ethers.Contract(
      process.env.REACT_APP_NFT_ADDRESS,
      ContractAbi,
      provider.getSigner()
    );
    let stageVal = web3.utils.toDecimal(
      await BarGangContract.getCurrentStage()
    );
    setCurrentStage(stageVal);
  }

  async function PresaleMint() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const BarGangContract = new ethers.Contract(
      process.env.REACT_APP_NFT_ADDRESS,
      ContractAbi,
      provider.getSigner()
    );
    const walletAddress = await provider.getSigner().getAddress();
    // console.log("signer", await provider.getSigner().getAddress());
    let mintedCount = web3.utils.toDecimal(
      await BarGangContract.balanceOf(walletAddress)
    );
    if (mintedCount + clicks > 5) {
      toast.error("OVERFLOW 5 TOKENS");
      return;
    }
    const presalePrice = PRESALE_PRICE * clicks;

    const price = ethers.utils.parseEther(presalePrice.toString());
    const balances = await provider.getSigner().getBalance();

    if (price.div(balances).toNumber() > 1) {
      toast.error("Insufficient Funds!");
      return;
    }

    try {
      await BarGangContract.requestPrivateSale(clicks, { value: price })
        .then((tx) => {
          return tx.wait().then(
            (receipt) => {
              // This is entered if the transaction receipt indicates success
              console.log("receipt", receipt);
              toast.success("Presale Success!");
              return true;
            },
            (error) => {
              console.log("error", error);
              toast.error("Presale Fail!");
            }
          );
        })
        .catch((error) => {
          console.log("error", error);
          if (error.message.indexOf("whitelist") > 0) {
            toast.error("You aren't whitelisted!");
          } else if (error.message.indexOf("signature")) {
            toast.error("You canceled transaction!");
          } else {
            toast.error("Transaction Error!");
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }

  async function PublicMint() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const BarGangContract = new ethers.Contract(
      process.env.REACT_APP_NFT_ADDRESS,
      ContractAbi,
      provider.getSigner()
    );

    let pubsalePrice = PUBLICSALE_PRICE * clicks;
    let price = ethers.utils.parseEther(pubsalePrice.toString());
    const balances = await provider.getSigner().getBalance();

    let compareResult = price - balances;
    console.log("compareResult", compareResult);
    if (compareResult > 0) {
      toast.error("Insufficient Funds!");
      return;
    }

    try {
      await BarGangContract.requestPublicSale(clicks, { value: price })
        .then((tx) => {
          return tx.wait().then(
            (receipt) => {
              // This is entered if the transaction receipt indicates success
              console.log("receipt", receipt);
              toast.success("PublicSale Success!");
              return true;
            },
            (error) => {
              console.log("error", error);
              toast.error("PublicSale Fail!");
            }
          );
        })
        .catch((error) => {
          console.log(error);
          if (error.message.indexOf("signature")) {
            toast.error("You canceled transaction!");
          } else {
            toast.error("Transaction Error!");
          }
        });
    } catch (error) {
      console.log("public sale error", error);
    }
  }

  const MintButton = () => {
    if (active) {
      switch (currentStage) {
        case 0:
          return (
            <Col md={12} className="text-center mt-5">
              <h2>MINT on December 27th 5pm EST</h2>
            </Col>
          );
          break;
        case 1:
          return (
            <>
              <Col md={12} className="text-center mt-5">
                <p>PRESALE</p>
              </Col>

              <Col md={12} className="text-center mt-5">
                <h2>MINT on December 27th 5pm EST</h2>
              </Col>

              <Col md={12} className="text-center mt-5">
                <Clock class_name="mint-section" />
              </Col>
              <Col md={12} className="text-center mt-5">
                <div className="connectcounter">
                  <div className="buttonLeft">
                    <button
                      className="down_count btn btn-info"
                      title="Down"
                      onClick={DecreaseItem}
                    >
                      <i className="fa fa-minus"></i>
                    </button>

                    <input
                      className="counter"
                      type="text"
                      value={clicks}
                      disabled
                    />

                    <button
                      className="up_count btn btn-info"
                      title="Up"
                      onClick={IncrementItem}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  <span className="presale-mint" onClick={PresaleMint}>
                    mint
                  </span>
                </div>
                <p className="counterBelowTxt">MAX 5 BGs PER TRANSACTION</p>
              </Col>
            </>
          );
          break;
        case 2:
          return (
            <>
              <Col md={12} className="text-center mt-5">
                <h2>PUBLIC SALE</h2>
              </Col>
              <Col md={12} className="text-center mt-5">
                <div className="connectcounter">
                  <div className="buttonLeft">
                    <button
                      className="down_count btn btn-info"
                      title="Down"
                      onClick={DecreaseItem}
                    >
                      <i className="fa fa-minus"></i>
                    </button>

                    <input
                      className="counter"
                      type="text"
                      value={clicks}
                      disabled
                    />

                    <button
                      className="up_count btn btn-info"
                      title="Up"
                      onClick={IncrementItem}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  <span className="presale-mint" onClick={PublicMint}>
                    mint
                  </span>
                </div>
                <p className="counterBelowTxt">MAX 10 BGs PER TRANSACTION</p>
              </Col>
            </>
          );
          break;
        case 3:
          return (
            <Col md={12} className="text-center mt-5">
              <h2>Buy on OpenSea</h2>
            </Col>
          );
          break;
      }
    } else {
      return (
        <Col md={12} className="text-center mt-5">
          <h2>PLEASE CONNECT WALLET TO MINT TOKEN</h2>
        </Col>
      );
    }
  };

  return (
    <div id="ConnectWallet">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "white",
              paddingLeft: 40,
              paddingRight: 40,
              fontWeight: 500,
            },
          },
          error: {
            style: {
              background: "white",
              color: "black",
              paddingLeft: 40,
              paddingRight: 40,
              fontWeight: 500,
            },
          },
        }}
      />
      <Container>
        <Row>{MintButton()}</Row>
      </Container>
    </div>
  );
}
