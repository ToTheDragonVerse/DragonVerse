import React from 'react'
import {Row, Col,Container,Image} from 'react-bootstrap';


export default function DropCount(){

    return (

        <div id="dropCount">
           <Container>
               <Row>
                   <Col md={3} className="text-center dropcountSec">
                   DROP COUNT
                   <span>10K</span>
                   </Col>
                   <Col md={3} className="text-center dropcountSec">
                   UNIQUE TRAITS
                   <span>200+</span>
                   </Col>
                   <Col md={3} className="text-center dropcountSec">
                   CLASS TRAITS
                   <span>7</span>
                   </Col>
                   <Col md={3} className="text-center dropcountSec">
                   PRICE
                   <span>0.2 ETH</span>
                   </Col>
               </Row>
           </Container>
        </div>
    )
    
}