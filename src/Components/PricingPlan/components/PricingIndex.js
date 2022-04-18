import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import PricingPlan from './PricingPlan'

import TwiterImage from '../../../assets/img/twitter.png'
import GitImage from '../../../assets/img/git.png'
import GmailImage from '../../../assets/img/gmail.png'

const PricingIndex = () => {
    return (
        <section className='pricingbg'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <PricingPlan detail="Your Custom Audio Counting to
                    10 With Grant The Dragon" planFee="199" theme="purple" />
                    </Col>
                    <Col lg={4}>
                        <PricingPlan detail="Your Custom Audio of the “ABC’s” 
With Grant The Dragon" planFee="349" theme="green" />
                    </Col>
                    <Col lg={4}>
                        <div className='pricingplan custompplan'>
                            <div className='pricingplan__head'>
                                <h2>CUSTOM
                                    REQUESTS</h2>
                            </div>
                            <div className='pricingplan__body orange-bg'>
                                <ul className='pricingLinks'>
                                    <li> <a href="#"> <Image src={TwiterImage} alt="custom request" className='fluid' /> </a> </li>
                                    <li> <a href="#"> <Image src={GitImage} alt="custom request" className='fluid' /> </a> </li>
                                    <li> <a href="#"> <Image src={GmailImage} alt="custom request" className='fluid' /> </a> </li>
                                </ul>
                            </div>
                            <div className='pricingplan__btn'>
                                <button type='button' disabled></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PricingIndex