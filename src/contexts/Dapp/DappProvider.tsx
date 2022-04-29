import {abi as paymentABI} from "../../contracts/Payment.sol/Payment.json";
import React, {useEffect} from "react";
import {IUser} from "../../interfaces/user.interface";
import {ethers, providers, Signer} from "ethers";
import DappContext from "./DappContext";
import {MetaMask} from "@web3-react/metamask";
import {WalletConnect} from "@web3-react/walletconnect";
import {metaMask} from "../../connectors/metamask";
import {walletConnect} from "../../connectors/walletConnect";
import * as walletApi from "../../Apis/wallet";
import {jwtManager} from "../../helpers/jwtManager";
import configAxios from "../../Apis/index";

export default function DappProvider({children, chainIds, paymentAddressList}: { children: React.ReactNode, chainIds: number[], paymentAddressList: string[] }) {
    const [user, setUser] = React.useState<IUser | undefined>(undefined);
    const [signer, setSigner] = React.useState<Signer | undefined>(undefined);
    const desiredChainId = +(process.env.REACT_APP_CHAIN_ID || chainIds[0]);
    const [connector, setConnector] = React.useState<MetaMask | WalletConnect | undefined>(undefined);
    const [chainId, setChainId] = React.useState<number>(desiredChainId);
    const [paymentAddress, setPaymentAddress] = React.useState<string>("");

    async function disconnect() {
        if (!connector) return;
        await connector.deactivate();
        localStorage.setItem("connector", "");
        setUser(undefined);
        setSigner(undefined);

        jwtManager.set('');
        configAxios();
    }

    async function connect(key: string) {
        const connector = getConnector(key);
        await connector.deactivate();
        if (connector instanceof WalletConnect || connector instanceof MetaMask) {
            if (connector) {
                await connector.activate(desiredChainId);
                setConnector(connector);
                localStorage.setItem("connector", key);
                return getSigner(connector);
            }
        }
    }

    async function connectAndSign(key: string) {
        const signer = await connect(key);
        if (signer) {
            await getUser(signer);
        }
    }

    function getConnector(key: string) {
        switch (key) {
            case "MetaMask":
                return metaMask;
            case "WalletConnect":
                return walletConnect;
            default:
                return metaMask;
        }
    }

    async function initConnect() {
        const key = localStorage.getItem("connector") || "";
        if (!key) return;
        const signer = await connect(key);
        if (signer) {
            await getUser(signer);
        }
    }

    async function getSigner(connector: any) {
        if (!connector) {
            return;
        }
        if (connector.provider) {
            const provider = new ethers.providers.Web3Provider(connector.provider);
            const signer = provider.getSigner();
            try {
                const user = await signer.getAddress();
                setSigner(signer);
                return signer;
            } catch (e) {
                console.log(e);
                connector.deactivate();
            }
        }
    }

    async function getJwtToken(signer: any) {
        if (!signer) return;
        const address = await signer.getAddress();
        const {data: nonce} = await walletApi.getNonce(address);
        const signature = await signer.signMessage(nonce);

        const {data: user} = await walletApi.loginBySign(address, signature);
        jwtManager.set(user.access_token);
        configAxios();
    }

    async function getUser(signer: Signer) {
        try {
            const address = await signer.getAddress();
            const { data } = await walletApi.getByAddress(address);
            console.log(data);
            setUser(data);
            return data;
        } catch (e) {
            console.log(e);
            jwtManager.clear();
        }
    }

    useEffect(() => {
        initConnect();
    }, []);

    useEffect(() => {
        signer?.provider?.getNetwork().then(network => {
            const chainIndex = chainIds.findIndex((id: number) => id === +network.chainId);
            if (chainIndex !== -1) {
                setChainId(+network.chainId);
                setPaymentAddress(paymentAddressList[chainIndex]);
            }
        });
    }, [signer]);

    return (
        <DappContext.Provider value={{
            user,
            signer,
            paymentAddress,
            chainId,
            desiredChainId,
            disconnect,
            connect: connectAndSign,
        }}>
            {children}
        </DappContext.Provider>
    )
}

export function useDapp() {
    const context = React.useContext(DappContext);
    if (context === undefined) {
        throw new Error("Error in useWeb3");
    }
    return context;
}
