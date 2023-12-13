import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/model.css";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { FaArrowRight, FaRegCopy } from "react-icons/fa";
import { CustomForm } from "./formInput";
import { TransferSendCard, TransferReceiveCard, BankCard, BuySendCard } from "./card";
import _ from 'lodash';
import progress_1 from "../../assets/progress-1.png";

// ...


// ...

export function TransferModel(props) {

  const handleClose = () => props.setShow(false);

  return (
    <>
      <Modal show={true} onHide={handleClose} size="xl" centered   backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "auto" }}>
            Confirmation and payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "0px" }}>
            <Row style={{ marginTop: "20px" }}>
              <span
                style={{
                  color: "#767676",
                  marginLeft: "8%",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                {props.title}
              </span>
            </Row>

            <Row style={{ marginBottom: "20px" }}>
              <Col style={{ marginLeft: "8%" }} md={4} sm={6}>
               
               {props.receiver && <TransferSendCard receiver={props.receiver} exchangeRate={props.exchangeRate} inputAmount={props.inputAmount} sender={props.sender}/>}
               {!props.receiver && <BuySendCard   consumer={props.consumer}/>}

             </Col>

              {props.receiver &&  <Col
                xs={2}
                className="d-flex justify-content-center align-items-center"
              >
                <FaArrowRight style={{ fontSize: "2rem" }} />
              </Col>}
              <Col style={{ marginLeft: "50px" }} md={4} sm={6}>
                {props.receiver &&<TransferReceiveCard outputAmount={props.outputAmount} receiverCountry={props.receiverCountry} receiver={props.receiver}/>}
              </Col>
            </Row>
          
          <div style={{ backgroundColor: "#dfe6ee" }}>
            <Row>
              <span
                style={{
                  marginLeft: "8%",
                  color: "#767676",
                  marginTop: "25px",
                }}
              >
                Please transfer funds from your personaL account to one of our
                accounts below.
                <br />
                If we don’t recieve the payment in 15 minutes, the transaction
                will be canceled.
              </span>
            </Row>

            <Row style={{ justifyContent: "space-around" }}>
              {props.bankCards &&props.bankCards.map((bankCard,index)=>(
                <Col  key={index}xs={4}>
                <BankCard bankCard={bankCard}/>
              </Col>
              ))}
              
             
            </Row>

            <Row style={{ justifyContent: "center" }}>
              <Col
                style={{ backgroundColor: "#fff", borderRadius: "4px" }}
                xs={9}
              >
                <span
                  style={{
                    color: "#767676",
                    fontSize: "1rem",
                    marginBottom: "0px",
                    marginTop: "20px",
                  }}
                >
                  Transfer Reference
                </span>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontSize: ".95rem" }}>
                    In the comment section when making a transfer, please
                    indicate the
                    <br />
                    code as your transfer message.
                  </p>

                  <div className="d-flex">
                    <span style={{ fontSize: "1.5rem", color: "#2e8a99" }}>
                      #7849
                    </span>
                    <FaRegCopy
                      style={{ fontSize: "1.5rem", color: "#767676" }}
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row style={{ justifyContent: "center" }}>
              <Col xs={9}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <p
                      style={{
                        marginTop: "20px",
                        marginBottom: "0px",
                        color: "#767676",
                        fontSize: "1rem",
                      }}
                    >
                      You have to pay a total of :
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        marginBottom: "30px",
                        justifyContent: "space-around",
                        color: "#2e8a99",
                        fontSize: "1.5rem",
                        fontWeight: "800",
                      }}
                    >
                      {props.inputAmount} {props.sender &&props.sender.senderCurrencyCode}
                      {props.consumer&&props.consumer.amount }{props.consumer && <>USD</>}
                    </p>
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <Button
                      style={{
                        backgroundColor: "inherit",
                        border: "1px solid #2e8a99",
                        color: "#2e8a99",
                      }}
                      onClick={props.cancelTransaction}
                    >
                      Cancel Payment
                    </Button>{" "}
                    <Button
                      style={{ backgroundColor: "#2e8a99", marginLeft: "1rem" }}
                      onClick={()=>{
                        props.setTransactChange((prev)=>!prev)
                        handleClose()
                        props.setProgress(progress_1)
                       
                      }}
                    >
                      I have already Paid
                    </Button>{" "}
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

export const SenderModel = (props) => {
  const [error,setError]=useState(null)
  const handleClose = () => props.setShow(false);

  //form closing 
  const isAnyValueEmpty = Object.values(props.sender).some((value) => value === '');

  const handleCloseForm=()=>{
    if (isAnyValueEmpty) {
      setError("Some Fields are missing...Try after Filling Them")
    }else{
      handleClose()
    }
  }

//handling sender change data
const handleSenderChange=(e)=>{
  const {name,value}=e.target
  props.setSenderData({
    ...props.sender,
    [name]:value
  })
}
// const handleSenderChange = _.debounce(handleSender, 1000);

  return (
    <>
      <Modal show="true" onHide={handleClose} className="custom-modal" centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "auto" }}>New Sender</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {error&&<p style={{fontSize:"1rem",color:"red",marginLeft:"25%%"}}>{error}</p>}

          <div>
            <Row style={{ justifyContent: "space-around" }}>
              <p
                style={{ fontSize: "1rem", color: "#969393" }}
                className="text-center"
              >
                Personal Info
              </p>
              <Col xs={4}>
                <CustomForm
                val={props.sender.senderFirstName}
                  placeholder="Full Legal First Name"
                  onChange={handleSenderChange}
                  name="senderFirstName"
                />
              </Col>
              <Col xs={4}>
                <CustomForm
                  val={props.sender.senderLastName}
                  placeholder="Full Legal Last Name"
                  onChange={handleSenderChange}

                  name="senderLastName"
                />
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-around", marginTop: "20px" }}>
              <Col xs={4}>
                <CustomForm  val={props.sender.senderEmail} onChange={handleSenderChange} placeholder="Email ID" name="senderEmail" />
              </Col>
              <Col xs={4}>
                <CustomForm onChange={handleSenderChange} placeholder="Telephone Number" val={props.sender.senderPhoneNumber} name="senderPhoneNumber" />
              </Col>
            </Row>

            <Row style={{ justifyContent: "space-around", marginTop: "20px" }}>
              <p
                style={{ fontSize: "1rem", color: "#969393" }}
                className="text-center"
              >
                Your Address
              </p>
              <Col xs={4}>
                <CustomForm onChange={handleSenderChange} val={props.sender.senderCountry} placeholder="Country" name="senderCountry" />
              </Col>
              <Col xs={4}>
                <CustomForm onChange={handleSenderChange} placeholder="City" val={props.sender.senderCity}name="senderCity" />
              </Col>

              <Col className="mt-3" xs={10}>
                <CustomForm onChange={handleSenderChange} placeholder="Address" val={props.sender.senderAddress} name="senderAddress" />
              </Col>
            </Row>

            <Row
              style={{
                justifyContent: "space-around",
                marginBottom: "3rem",
                marginTop: "1rem",
              }}
            >
              <Col xs={6}>
                <div className="d-grid gap-6">
                  <Button onClick={handleCloseForm}  size="lg" style={{ backgroundColor: "#2e8a99" }}>
                    Add New Sender
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ReceiverModel = (props) => {
  const handleClose = () => props.setShow(false);
  const handleShow = () => setShow(true);
  const [error,setError]=useState(null)
    const handleReceiverChange=(e)=>{
      const {name,value}=e.target
      props.setReceiverData({...props.receiver,[name]:value})
    }
    //const handleReceiverChange = _.debounce(handleReceiver, 1000);

    const handleCloseForm=()=>{
      if(props.receiver.receiverFullName==''||props.receiver.receiverBankAccountNumber==''||props.receiver.receiverBankName==''){
          setError("Some Fields are missing...Try after Filling Them")
      }else{
        handleClose()
      }
    }
    return (
        <>
        <Modal show="true" onHide={handleClose} className="custom-modal" centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ marginLeft: "auto" }}>New Recepient</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            {error&&<p style={{fontSize:"1rem",color:"red",marginLeft:"25%%"}}>{error}</p>}
            <div>
              <Row style={{ justifyContent: "space-around" }}>
                <p
                  style={{ fontSize: "1rem", color: "#969393" }}
                  className="text-center"
                >
                  Bank Details
                </p>
                <Col xs={9}>
                  <CustomForm
                  onChange={handleReceiverChange}
                    placeholder="Bank Name"
                    name="receiverBankName"
                    val={props.receiver.receiverBankName}
                  />
                </Col>
                <Col className="mt-3" xs={9}>
                  <CustomForm
                  onChange={handleReceiverChange}
                    placeholder="Account Or Bank Card Number"
                    name="receiverBankAccountNumber"
                    val={props.receiver.receiverBankAccountNumber}
                  />
                </Col>
                <p
                  style={{ fontSize: "1rem", color: "#969393" }}
                  className="text-center mt-3" 
                >
                  Bank Details
                </p>
                <Col xs={9}>
                  <CustomForm
                  onChange={handleReceiverChange}
                    placeholder="Full Name of Account Holder"
                    name="receiverFullName"
                    val={props.receiver.receiverFullName}
                  />
                </Col>
                <Col xs={6}>
                <div className="d-grid gap-6 mt-3 mb-4">
                  <Button onClick={handleCloseForm} size="lg" style={{ backgroundColor: "#2e8a99" }}>
                    Add New Receiver
                  </Button>{" "}
                </div>
              </Col>
              </Row>
           
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  