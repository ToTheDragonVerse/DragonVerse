import React from 'react'
import { Image } from 'react-bootstrap'

import AudioImage from '../../../assets/img/audio.png'
import '../_pricingplan.scss'

const PricingPlan = (props) => {

    const { detail, planFee, theme } = props;

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
                <button type='button'>Buy</button>
            </div>
        </div>
    )
}

export default PricingPlan