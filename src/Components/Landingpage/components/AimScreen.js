import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Educate from '../../../assets/img/educate.png'
import Entertain from '../../../assets/img/entertain.png'
import DragonBtn from '../../../assets/img/dragon-btn.png'
import LearnBtn from '../../../assets/img/learn-btn.png'
import FunGirl from '../../../assets/img/age.png'

const AimScreen = () => {
    return (
        <section className='aimScreens'>
            <Container>
                <Row className="g-0">
                    <Col lg={4} className="order-1 order-lg-0">
                        <div className='aimBox'>
                            <h2>EDUCATE</h2>
                            <Image src={Educate} className='fluid' alt="Educate" />
                            <p className='educateText'>
                                Access To Our Learning Application, DragonCamp, To Teach Children The Basics Like Numbers, And The Alphabet,
                                Will ALWAYS Be Free.
                            </p>
                            <a href='http://dragoncamp.thedragonverse.net/' target = "_blank"> <Image src={DragonBtn} className='fluid' alt='btn' /> </a>
                        </div>
                    </Col>
                    <Col lg={4} className="order-0 order-lg-1">
                        <div className='funAim'>
                            <Image src={FunGirl} alt="Fun Girl" className='fluid' />
                            <h3>FUN FOR ALL AGES</h3>
                        </div>
                    </Col>
                    <Col lg={4} className="order-2 order-lg-2">
                        <div className='aimBox'>
                            <h2>ENTERTAIN</h2>
                            <Image src={Entertain} className='fluid' alt="Educate" />
                            <p>
                            Make Learning Fun By Uploading Your Custom Audio Of Your Child Saying Numbers 1-10 Or Their ABC’s And We Will Create A Custom Video Using Grant The Dragon. Be The Best Mom, Dad, Grandparent, Aunt Or Uncle And Get Your Custom Video Today.
                            </p>
                            <a href='#'> <Image src={LearnBtn} className='fluid' alt='btn' /> </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AimScreen