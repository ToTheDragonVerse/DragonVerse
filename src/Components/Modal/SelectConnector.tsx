import { Modal } from "react-bootstrap";
import MetamaskIcon from "../../assets/img/metamask.png";
import WalletConnectIcon from "../../assets/img/walletconnect.png";
import { useDapp } from "../../contexts/Dapp/DappProvider";

export default function SelectWalletModal({ onConnected, show, onClose }: { onConnected: () => void, show: boolean, onClose: () => void }) {
    const { connect } = useDapp();

    async function handleConnect(key: string) {
        await connect(key);
        onConnected();
    }

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}
