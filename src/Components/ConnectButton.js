import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { hooks, metaMask } from '../connectors/metamask';

export default function ConnectButton() {
  const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;
  const accounts = useAccounts()
  const [show, setShow] = useState(false);

  useEffect(() => {
    void metaMask.connectEagerly()
  }, [])

  if (!accounts) {
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Connect
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="success" onClick={() => metaMask.activate()}>
              Metamask
            </Button>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <>
      <div className="setting-option rn-icon-list user-account">
        <div className="">
          <button className="btn btn-primary-alta btn-small">
            Profile
          </button>
        </div>
      </div>
    </>
  )
}
