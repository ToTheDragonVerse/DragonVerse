import type { AddEthereumChainParameter } from '@web3-react/types'

const infuraKey = process.env.REACT_APP_INFURA_KEY

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
}

interface BasicChainInformation {
    urls: string[]
    name: string
}

interface ExtendedChainInformation extends BasicChainInformation {
    nativeCurrency: AddEthereumChainParameter['nativeCurrency']
    blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}

function isExtendedChainInformation(
    chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
    return !!(chainInformation as ExtendedChainInformation).nativeCurrency
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
    const chainInformation = CHAINS[chainId]
    if (isExtendedChainInformation(chainInformation)) {
        return {
            chainId,
            chainName: chainInformation.name,
            nativeCurrency: chainInformation.nativeCurrency,
            rpcUrls: chainInformation.urls,
            blockExplorerUrls: chainInformation.blockExplorerUrls,
        }
    } else {
        return chainId
    }
}

export const CHAINS: { [chainId: number]: BasicChainInformation | ExtendedChainInformation } = {
    1: {
        urls: [
            infuraKey ? `https://mainnet.infura.io/v3/${infuraKey}` : '',
            'https://cloudflare-eth.com',
        ].filter((url) => url !== ''),
        name: 'Mainnet',
    },
    3: {
        urls: [infuraKey ? `https://ropsten.infura.io/v3/${infuraKey}` : ''].filter(
            (url) => url !== ''
        ),
        name: 'Ropsten',
    },
    4: {
        urls: [infuraKey ? `https://rinkeby.infura.io/v3/${infuraKey}` : ''].filter(
            (url) => url !== ''
        ),
        name: 'Rinkeby',
    },
    // Polygon
    137: {
        urls: [
            infuraKey ? `https://polygon-mainnet.infura.io/v3/${infuraKey}` : '',
            'https://polygon-rpc.com',
        ].filter((url) => url !== ''),
        name: 'Polygon Mainnet',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://polygonscan.com'],
    },
    80001: {
        urls: [infuraKey ? `https://polygon-mumbai.infura.io/v3/${infuraKey}` : ''].filter(
            (url) => url !== ''
        ),
        name: 'Polygon Mumbai',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://mumbai.polygonscan.com'],
    },
    // CRONOS
    // 0x19 to number:
    25: {
        urls: ["https://evm-cronos.crypto.org"],
        name: 'Cronos Mainnet',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://cronoscan.com/'],
    },
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
    (accumulator, chainId) => {
        const validURLs: string[] = CHAINS[Number(chainId)].urls

        if (validURLs.length) {
            accumulator[Number(chainId)] = validURLs
        }

        return accumulator
    },
    {}
)