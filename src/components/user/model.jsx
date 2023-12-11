import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/model.css";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { FaArrowRight, FaRegCopy } from "react-icons/fa";
import { CustomForm } from "./formInput";
import { TransferSendCard, TransferReceiveCard, BankCard } from "./card";

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
          <div style={{ marginTop: "20px" }}>
            <Row>
              <span
                style={{
                  color: "#767676",
                  marginLeft: "8%",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                Transfer Details
              </span>
            </Row>

            <Row style={{ marginBottom: "20px" }}>
              <Col style={{ marginLeft: "8%" }} md={4} sm={6}>
                <TransferSendCard />
              </Col>
              <Col
                xs={2}
                className="d-flex justify-content-center align-items-center"
              >
                <FaArrowRight style={{ fontSize: "2rem" }} />
              </Col>
              <Col style={{ marginLeft: "50px" }} md={4} sm={6}>
                <TransferReceiveCard />
              </Col>
            </Row>
          </div>
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
                accountw below.
                <br />
                If we don’t recieve the payment in 15 minutes, the transaction
                will be canceled.
              </span>
            </Row>

            <Row style={{ justifyContent: "space-around" }}>
              <Col xs={4}>
                <BankCard />
              </Col>
              <Col xs={4}>
                <BankCard />
              </Col>
            </Row>

            <Row style={{ justifyContent: "center" }}>
              <Col
                style={{ backgroundColor: "#fff", borderRadius: "4px" }}
                xs={9}
              >
                <p
                  style={{
                    color: "#767676",
                    fontSize: "1rem",
                    marginBottom: "0px",
                    marginTop: "20px",
                  }}
                >
                  Transfer Reference
                </p>

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
                    <p style={{ fontSize: "1.5rem", color: "#2e8a99" }}>
                      #7849
                    </p>
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
                      500.00 RUB
                    </p>
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <Button
                      style={{
                        backgroundColor: "inherit",
                        border: "1px solid #2e8a99",
                        color: "#2e8a99",
                      }}
                    >
                      Cancel Payment
                    </Button>{" "}
                    <Button
                      style={{ backgroundColor: "#2e8a99", marginLeft: "1rem" }}
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

  const handleClose = () => props.setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show="true" onHide={handleClose} className="custom-modal" centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "auto" }}>New Sender</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
                  placeholder="Full Legal First Name"
                  name="firstName"
                />
              </Col>
              <Col xs={4}>
                <CustomForm
                  placeholder="Full Legal Last Name"
                  name="lastName"
                />
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-around", marginTop: "20px" }}>
              <Col xs={4}>
                <CustomForm placeholder="Email ID" name="email" />
              </Col>
              <Col xs={4}>
                <CustomForm placeholder="Telephone Number" name="number" />
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
                <CustomForm placeholder="Country" name="country" />
              </Col>
              <Col xs={4}>
                <CustomForm placeholder="City" name="city" />
              </Col>

              <Col className="mt-3" xs={10}>
                <CustomForm placeholder="Address" name="address" />
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
                  <Button size="lg" style={{ backgroundColor: "#2e8a99" }}>
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

export const ReceiverModel = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
        <Modal show={show} onHide={handleClose} className="custom-modal" centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ marginLeft: "auto" }}>New Recepient</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
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
                    placeholder="Bank Name"
                    name="bankName"
                  />
                </Col>
                <Col className="mt-3" xs={9}>
                  <CustomForm
                    placeholder="Account Or Bank Card Number"
                    name="bankAccount"
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
                    placeholder="Full Name of Account Holder"
                    name="nameHolder"
                  />
                </Col>
                <Col xs={6}>
                <div className="d-grid gap-6 mt-3 mb-4">
                  <Button size="lg" style={{ backgroundColor: "#2e8a99" }}>
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
  