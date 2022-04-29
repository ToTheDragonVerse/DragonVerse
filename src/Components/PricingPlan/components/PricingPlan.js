import { ethers } from 'ethers'
import React from 'react'
import { Button, Image, Modal } from 'react-bootstrap'
import { packageApi } from '../../../Apis/packages'
import { abi as PaymentABI } from '../../../contracts/Payment.sol/Payment.json'

import AudioImage from '../../../assets/img/audio.png'
import { hooks, metaMask } from '../../../connectors/metamask'
import { useDapp } from '../../../contexts/Dapp/DappProvider'
import ConnectButton from '../../ConnectButton'
import '../_pricingplan.scss'

const { useIsActive, useChainId } = hooks;
const PricingPlan = (props) => {
  const { detail, planFee, theme, item } = props;
  const [show, setShow] = React.useState(false);
  const { paymentAddress } = useDapp();
  const isActive = useIsActive();
  const chainId = useChainId();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function fetchParams() {
    setLoading(true);
    const { data } = await packageApi.getBuyParams(item._id, chainId);
    setShow(true);
    setData(data);
    setLoading(false);
  }

  async function buy() {
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(metaMask.provider);
      const signer = provider.getSigner();
      const paymentContract = new ethers.Contract(
        paymentAddress,
        PaymentABI,
        signer
      );

      const tx = await paymentContract.buySubscription(data.params.packageId, data.params.duration, data.signature, {
        value: ethers.utils.parseEther(data.params.price + "")
      });

      await packageApi.crawl(tx.hash, chainId);
      setShow(false);
      alert("Transaction Successful");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='pricingplan'>
      <div className='pricingplan__head'>
        <Image src={AudioImage} alt='pricingplan' className='fluid' />
      </div>
      <div className={`pricingplan__body ${theme}-bg`}>
        <p>{detail}</p>
        <h3>${planFee}</h3>
      </div>
      <div className='pricingplan__btn'>
        {isActive ?
          <button type='button' onClick={() => fetchParams()}>Buy</button>
          :
          <ConnectButton />
        }
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Confirm buy this package?
          <ul>
            <li>Package: {item.name}</li>
            <li>Price: {data?.params?.price} (${planFee})</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => buy()}>
            {loading ? 'Loading...' : 'Buy'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PricingPlan
