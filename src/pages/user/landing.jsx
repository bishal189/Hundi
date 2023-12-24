import "./css/landing.css";
import { Container, Nav, Col,Navbar,InputGroup,DropdownButton,Dropdown,Form } from "react-bootstrap";
import {useState,useEffect} from 'react'
import axios from 'axios'
import { CustomForm } from "../../components/user/formInput";
function CustomNavbar(props){
    return(
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
    )
}
function CustomTextContainer(){
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
              `https://v6.exchangerate-api.com/v6/a088c8583f32b5f3e682b9d5/latest/${senderCountry}`
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
    
      function handleChange(e){
        setinputAmount(e.target.value)
      }
return(
    <>
     <div className="textContainer" style={{marginTop:'2rem'}}>
            <h2 style={{textAlign:'center'}}>Quick Online Transfer</h2>
            <h5 style={{textAlign:'center'}}>
              We help you make fast and secure transfers in the shortest
              possible time
            </h5>
            <div className="TransferForm">
            <Col md={6} style={{marginRight:'2rem'}}>
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

                <Col md={6}>

                    <h6>You Receive</h6>
                                <InputGroup className="mb-3 mt-4">
              <Form.Control
                size="lg"
                type="text"
                name="amount"
                placeholder={
                 outputAmount.toFixed(2) || "Recepient will get"
                }
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
)
}
export function LandingPage() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [containerHeight,setContainerHeight]=useState('70vh')
    const toggleNavbar = () => {
      setNavbarOpen(!navbarOpen);
      console.log(navbarOpen)
      if (!navbarOpen){
      setContainerHeight('130vh')
      }else{
        setContainerHeight('70vh')

      }
    }
  return (
    <>
      <div className="containerLand" style={{ height: containerHeight }}>
        <div className="overlay">
        <CustomNavbar toggler={toggleNavbar}/>
        <CustomTextContainer />

         
        </div>
      </div>
      <div>jlfsjlfajlfja</div>
    </>
  );
}
