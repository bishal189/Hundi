import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Row,Col,Button,Modal} from 'react-bootstrap';
import { FaArrowRight, FaRegCopy} from "react-icons/fa";

import { TransferSendCard,TransferReceiveCard,BankCard } from './card';

export function PayModel() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Modal show={show} onHide={handleClose} size="xl"centered>
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:'auto'}}>Confirmation and payment</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:'0px'}}>
        
            <div style={{marginTop:'20px'}}>
                <Row>

                    <span style={{color:'#767676',marginLeft:'8%',marginBottom:'20px',fontSize:'1rem'}}>
                        Transfer Details
                        </span>

                </Row>

                <Row style={{marginBottom:'20px'}}>
                    <Col style={{marginLeft:'8%'}} md={4} sm={6} > 
                    <TransferSendCard />
                    </Col>
                    <Col xs={2}  className="d-flex justify-content-center align-items-center">
                    <FaArrowRight style={{fontSize:'2rem'}}/></Col>
                    <Col style={{marginLeft:'50px'}} md={4} sm={6}>
                    <TransferReceiveCard />
                    </Col>
                </Row>
            </div>
            <div  style={{backgroundColor:'#dfe6ee'}}>

                <Row >
                    <span style={{marginLeft:'8%',color:'#767676',marginTop:'25px'}}>
                    Please transfer funds from your personaL account to one of our accountw below.<br />
                    If we don’t recieve the payment in 15 minutes, the transaction will be canceled.
                    </span>

                </Row>

                <Row style={{justifyContent:'space-around'}}>
                <Col xs={4}><BankCard /></Col>
                <Col xs={4}><BankCard /></Col>
                </Row>

                <Row style={{justifyContent:'center'}}>
                    <Col style={{backgroundColor:'#fff',borderRadius:'4px'}} xs={9} >
                        <p style={{color:'#767676',fontSize:'1rem',marginBottom:'0px',marginTop:'20px'}}>Transfer Reference</p>
                       
                        <div style={{display:'flex',justifyContent:'space-between'}}>

                        <p style={{fontSize:'.95rem'}}>In the comment section when making a transfer, please indicate the
                            <br />code as your transfer message.</p>
                           
                            <div className='d-flex'>
                            <p style={{fontSize:'1.5rem',color:'#2e8a99'}}>
                             #7849
                                
                            </p>
                            <FaRegCopy style={{fontSize:'1.5rem',color:'#767676'}}/></div>
                            </div>
                    </Col>
                </Row>

                <Row style={{justifyContent:'center'}} >
                   <Col xs={9}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div>
                        <p style={{marginTop:'20px',marginBottom:'0px',color:'#767676',fontSize:'1rem'}}>You have to pay a total of :</p>
                        <p style={{marginTop:'0px',marginBottom:'30px',justifyContent:'space-around',color:'#2e8a99',fontSize:'1.5rem',fontWeight:'800'}}>500.00 RUB</p>
                        </div>
                   <div style={{marginTop:'2rem'}}>
                    <Button style={{backgroundColor:'inherit',border:'1px solid #2e8a99',color:'#2e8a99'}}>Cancel Payment</Button>{' '}
                    <Button style={{backgroundColor:'#2e8a99',marginLeft:'1rem'}}>I have already Paid</Button>{' '}
                   </div>
                </div>
                    </Col>
                </Row>
            </div>
        
        </Modal.Body>
          
      </Modal>
    </>
  );
}

