import "./css/landing.css";
import Accordion from 'react-bootstrap/Accordion';

import {
  Row,
  Card,
  Button,
  Nav,
  Col,
  Navbar,
  InputGroup,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import { CiWallet } from "react-icons/ci";
import { FaFacebookSquare ,FaInstagramSquare,FaWhatsappSquare} from "react-icons/fa";

import { FaClockRotateLeft } from "react-icons/fa6";
import { LiaCcAmazonPay } from "react-icons/lia";
import { IoBagAdd } from "react-icons/io5";

import { useState, useEffect } from "react";
import axios from "axios";
import { TiTick } from "react-icons/ti";

import { CustomForm } from "../../components/user/formInput";
import Landing2 from "../../assets/landing2.png";
import { Link } from "react-router-dom";
function CustomNavbar(props) {
  return (
    <>
      <Navbar className="customNavbar" bg="dark" variant="dark" expand="md">
        <div>
          <Navbar.Brand className="navLogo" href="/">
            {" "}
            Logo
          </Navbar.Brand>
        </div>
        <Navbar.Toggle
          onClick={props.toggler}
          className="custom-toggler"
          aria-controls="basic-navbar-nav"
          style={{ border: "1px solid white", marginRight: "20px" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 ml-auto">
            <div className="navTitleContainer">
              <div className="navTitles1">
                <Nav.Link className="navText" href="">
                  Converter
                </Nav.Link>
                <Nav.Link className="navText" href="">
                  Send Money
                </Nav.Link>
                <Nav.Link className="navText" href="">
                  Business & API
                </Nav.Link>
                <Nav.Link className="navText" href="">
                  Tools
                </Nav.Link>
                <Nav.Link className="navText" href="">
                  Agent
                </Nav.Link>
              </div>
              <div className="navTitles2">
                <Nav.Link className="navText" href="/userRegister">
                  Register
                </Nav.Link>
                <Nav.Link className="navText" href="/userLogin">
                  Log In
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
function CustomTextContainer() {
  const [exchangeRateArr, setExchangeRateArr] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(0);

  const [senderCountry, setSenderCountry] = useState("USD");
  const [receiverCountry, setReceiverCountry] = useState("NPR");
  const [inputAmount, setinputAmount] = useState(0);
  const [outputAmount, setoutputAmount] = useState(0);

  useEffect(() => {
    //get Rate from api everytime sender country changes
    const getRate = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/ce71b58ace23ef4a6bdd8427/latest/${senderCountry}`
        );

        setExchangeRateArr(response.data.conversion_rates);
        if (exchangeRateArr) {
          setExchangeRate(exchangeRateArr[receiverCountry]);
        }
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
      }
    };
    getRate();
  }, [senderCountry]);

  //everytime receiver country changes rate is calculated again
  useEffect(() => {
    const setRate = () => {
      if (exchangeRateArr) {
        setExchangeRate(exchangeRateArr[receiverCountry]);
      }
    };
    setRate();
    if (exchangeRateArr) {
      setoutputAmount(inputAmount * exchangeRateArr[receiverCountry]);
    }
  }, [receiverCountry, exchangeRateArr]);

  useEffect(() => {
    const rateCalculator = () => {
      setoutputAmount(inputAmount * exchangeRate);
    };
    rateCalculator();
  }, [inputAmount]);

  function handleChange(e) {
    setinputAmount(e.target.value);
  }
  return (
    <>
      <div className="textContainer" style={{ marginTop: "2rem" }}>
        <h2 style={{ textAlign: "center" }}>Quick Online Transfer</h2>
        <h5 style={{ textAlign: "center" }}>
          We help you make fast and secure transfers in the shortest possible
          time
        </h5>
        <div className="TransferForm">
          <Col md={6} xs={12} style={{ marginRight: "2rem" }}>
            <h6>You Send</h6>
            <InputGroup className="mb-3 mt-4">
              <CustomForm
                onChange={handleChange}
                placeholder="Enter amount"
                name="amount"
              />
              <DropdownButton
                as={InputGroup.Append}
                variant="secondary"
                title={senderCountry} // Default currency
                id="input-group-dropdown-2"
              >
                <Dropdown.Item
                  onClick={() => setSenderCountry("NPR")}
                  className="dropdownItem"
                >
                  NPR
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSenderCountry("USD")}
                  className="dropdownItem"
                >
                  USD
                </Dropdown.Item>
                {/* Add more currency options as needed */}
              </DropdownButton>
            </InputGroup>
          </Col>

          <Col md={6} xs={12}>
            <h6>You Receive</h6>
            <InputGroup className="mb-3 mt-4">
              <Form.Control
                size="lg"
                type="text"
                name="amount"
                placeholder={outputAmount.toFixed(2) || "Recepient will get"}
                className="form_custom"
                readOnly={true}
              />
              <DropdownButton
                as={InputGroup.Append}
                variant="secondary"
                title={receiverCountry} // Default currency
                id="input-group-dropdown-2"
                style={{ marginRight: "5px" }} // Add margin-right to move it inside
              >
                <Dropdown.Item
                  onClick={() => setReceiverCountry("NPR")}
                  className="dropdownItem"
                >
                  NPR
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setReceiverCountry("USD")}
                  className="dropdownItem"
                >
                  USD
                </Dropdown.Item>
                {/* Add more currency options as needed */}
              </DropdownButton>
            </InputGroup>
          </Col>
        </div>
      </div>
    </>
  );
}
function DetailContent() {
  return (
    <div className="detailContent">
      <Row>
        <Col>
          <div className="content">
            <TiTick style={{ fontSize: "2rem", color: "#2e8a99" }} />
            <h4 style={{ paddingLeft: "20px" }}>Free Registration</h4>
          </div>
        </Col>
        <Col>
          <div className="content">
            <TiTick style={{ fontSize: "2rem", color: "#2e8a99" }} />
            <h4 style={{ paddingLeft: "20px" }}>Verify Your Identity</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="content">
            <TiTick style={{ fontSize: "2rem", color: "#2e8a99" }} />
            <h4 style={{ paddingLeft: "20px" }}>Choose an Amount to Send</h4>
          </div>
        </Col>
        <Col>
          <div className="content">
            <TiTick style={{ fontSize: "2rem", color: "#2e8a99" }} />
            <h4 style={{ paddingLeft: "20px" }}>Pay Your Transfer</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="content">
            <TiTick style={{ fontSize: "2rem", color: "#2e8a99" }} />
            <h4 style={{ paddingLeft: "20px" }}>Add Recipent's bank detail</h4>
          </div>
        </Col>
        <Col>
          <div className="content">
            <TiTick style={{ fontSize: "2rem", color: "#2e8a99" }} />
            <h4 style={{ paddingLeft: "20px" }}>Make Reference</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
}
function BoxContent() {
  return (
    <>
      <div className="outerBox">
        <div className="Box">
          <div className="contentInsideBox">
            <FaClockRotateLeft style={{ fontSize: "1.5rem" }} />
            <br />
            Quick Transfer
          </div>
        </div>
        <div className="Box">
          <div className="contentInsideBox">
            <LiaCcAmazonPay style={{ fontSize: "2rem" }} />
            <br />
            Pay
          </div>
        </div>

        <div className="Box">
          <div className="contentInsideBox">
            <IoBagAdd style={{ fontSize: "2rem" }} />
            <br />
            Buy
          </div>
        </div>
        <div className="Box">
          <div className="contentInsideBox">
            <CiWallet style={{ fontSize: "2rem" }} />
            <br />
            Wallet
          </div>
        </div>
      </div>

      <div className="outerContentBox">
        <div className="innerText">
          <h2>
            Your Money transfer is <br />
            safe and secure here
          </h2>
          <h5>some dummy text here will be filled later</h5>
        </div>
        <div>
          <img className="landingPageImage" src={Landing2} />
        </div>
      </div>

      <div className="countryBox">
        <h3>Our Supported Countries</h3>
      </div>
    </>
  );
}


  function FaqArea() {
    return (
      <>
        <div className="faqContainer">
          <h3>FAQs</h3>
          <Accordion style={{width:'80%',margin:'auto'}} defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How Can I make a Transfer?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How Long do transfer take?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

        </div>
      </>
    );
  }
  function FooterArea(){
    return(
      <>
      <div className="footerArea">
        <div className="aboutContainer">
          <h3>About Us</h3>
          <h5>Some Demo text will be added later</h5>
        </div>

        <div className="footer">
          <div>
            <Link to="">Contact Us</Link>
          </div>
          <div>
            <FaFacebookSquare style={{marginRight:'2rem',fontSize:'3rem'}}/>
            <FaWhatsappSquare style={{marginRight:'2rem',fontSize:'3rem'}} />
            <FaInstagramSquare  style={{marginRight:'2rem',fontSize:'3rem'}}/>
          </div>
          <div>
              <h2>Logo</h2>
          </div>
        </div>
      </div>
      </>
    )
  }
  export function LandingPage() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
      setNavbarOpen(!navbarOpen);
      console.log(navbarOpen);
   
    };
  return (
    <>
      <div className="containerLand">
        <div className="overlay">
          <CustomNavbar toggler={toggleNavbar} />
          <CustomTextContainer />
        </div>
      </div>
      <div>
        <DetailContent />
        <BoxContent />
        <FaqArea />
        <FooterArea />
      </div>
    </>
  );
}
