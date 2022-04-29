import { Signer } from "ethers";
import React from "react";
import { IUser } from "../../interfaces/user.interface";

interface IDappContext {
  signer: Signer | undefined;
  user: IUser | undefined;
  paymentAddress: string;
  chainId: number;
  desiredChainId: number;
  disconnect: () => void;
  connect: any;
}

const defaultState: IDappContext = {
  user: undefined,
  signer: undefined,
  paymentAddress: "",
  chainId: 0,
  desiredChainId: 1,
  disconnect: () => {},
  connect: (key: string) => {},
};

const DappContext = React.createContext<IDappContext>(defaultState);
export default DappContext;
