import "bootstrap/dist/css/bootstrap.min.css";
import "./css/card.css";
import {
  Card,
  Form,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { FaRegCopy } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { CustomForm } from "./formInput";
import { useState } from "react";
import { SenderModel,ReceiverModel } from "./model";

export const TransferSendCard = (props) => {
  return (
    <Card className="transfer_card">
      <Card.Body>
          <div className="spacer">
            <p className="muted_color">Amount Sent: </p>
            <p className="money_color">{Number(props.inputAmount).toFixed(2)} {props.sender.senderCurrencyCode}</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Sender Name: </p>
            <p className="text_color">{props.sender.senderFirstName} {props.sender.senderLastName}</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Comission: </p>
            <p className="text_color">0 {props.sender.senderCurrencyCode}</p>
          </div>

       <div className="spacer">
            <p className="muted_color">Average Rate: </p>
            <p className="text_color">1 {props.sender.senderCurrencyCode}={props.exchangeRate} {props.receiver.receiverCurrencyCode}</p>
          </div>
        
        
      </Card.Body>
    </Card>
  );
};
export const BuySendCard = (props) => {
  return (
    <Card className="transfer_card">
      <Card.Body>
          <div className="spacer">
            <p className="muted_color">Consumer Name: </p>
            <p className="text_color">{props.consumer.consumerName} </p>
          </div>
          <div className="spacer">
            <p className="muted_color">Consumer ID: </p>
            <p className="text_color">{props.consumer.consumerId}</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Bill Pay To: </p>
            <p className="text_color">{props.consumer.companyName}</p>
          </div>

          <div className="spacer">
            <p className="muted_color">Amount: </p>
            <p className="money_color">{props.consumer.amount} USD</p>
          </div>
        
      </Card.Body>
    </Card>
  );
};


export const TransferReceiveCard = (props) => {
  return (
    <Card className="transfer_card">
      <Card.Body>
          <div className="spacer">
            <p className="muted_color">Recepient Get: </p>
            <p className="money_color">{Number(props.outputAmount).toFixed(2)}{props.receiverCountry}</p>
          </div>

          <div className="spacer">
            <p className="muted_color">Recepient Name: </p>
            <p className="text_color">{props.receiver.receiverFullName}</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Recepient Bank: </p>
            <p className="text_color">{props.receiver.receiverBankName}</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Account Number: </p>
            <p className="text_color">{props.receiver.receiverBankAccountNumber}</p>
          </div>
      </Card.Body>
    </Card>
  );
};

export const BankCard = (props) => {
  return (
    <Card className="bank_card">
      <Card.Body>
          <p>{props.bankCard.bankName}</p>
          <p
            style={{ marginTop: "30px", marginRight: "10px" }}
            className="account_text"
          >
            {props.bankCard.bankAccountNumber}
            <FaRegCopy style={{ marginLeft: "30px" }} />
          </p>
          <div style={{ marginTop: "30px" }}>
            <p className="name_text">{props.bankCard.companyWorker.name}</p>
            <p>{props.bankCard.currencyCode}</p>
          </div>
      </Card.Body>
    </Card>
  );
};


export const SenderCard = (props) => {
  const [show,setShow]=useState(false)
  const handleChange=(e)=>{
    props.setinputAmount(e.target.value)
  }
  

  return (
    <>
    { show && <SenderModel sender={props.sender} setSenderData={props.setSenderData} setShow={setShow} />}


      <Card className="Maincard" style={{ marginBottom: "30px" }}>
        <Card.Body>
            <IoLogOutOutline style={{ fontSize: "1.5rem" }} /> 
            <span style={{fontSize:'1.2rem',marginTop:'50px'}}>Sender</span>
            <br />
            <p style={{marginTop:'10px'}}>
            Average rate:<span className="MainText ">1 {props.senderCountry} = {props.exchangeRate} {props.receiverCountry}</span></p>

          <InputGroup>
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-button"
          style={{ width: '100%' }}
        >
          Sender
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: '100%', left: 0, right: 0 }} align="end">
          {/* Add Dropdown.Items as needed */}
          <Dropdown.Item onClick={()=>setShow(true)}>+ Add New Sender</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </InputGroup>

          <InputGroup className="mb-3 mt-4">
            <CustomForm onChange={handleChange}  placeholder="Enter amount" name="amount" />
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={props.senderCountry} // Default currency
              id="input-group-dropdown-2"
              style={{ marginRight: "5px", backgroundColor: "#ededed" }} // Add margin-right to move it inside
            >
              <Dropdown.Item onClick={()=>props.setSenderCountry('NPR')} className="dropdownItem">NPR</Dropdown.Item>
              <Dropdown.Item onClick={()=>props.setSenderCountry('USD')} className="dropdownItem">USD</Dropdown.Item>
              {/* Add more currency options as needed */}
            </DropdownButton>
          </InputGroup>
        </Card.Body>
      </Card>
    </>
  );
};




// for the reciver card 
export const ReceiverCard = (props) => {
  const [show,setShow]=useState(false)
  
  return (
    <>
    { show && <ReceiverModel receiver={props.receiver} setReceiverData={props.setReceiverData} setShow={setShow} />}
      <Card className="Maincard" style={{ marginBottom: "30px" }}>
        <Card.Body>
            <IoLogOutOutline style={{ fontSize: "1.5rem" }} /> 
            <span style={{fontSize:'1.2rem',marginTop:'50px'}}>Recipent</span>
            <br />
            <p style={{marginTop:'10px'}}>
            May take 5-10 min</p>

          <InputGroup>
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-button"
          style={{ width: '100%' }}
        >
          Recipent
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: '100%', left: 0, right: 0 }} align="end">
          {/* Add Dropdown.Items as needed */}
          <Dropdown.Item onClick={()=>setShow(true)}>+ Add New Recipent</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </InputGroup>

          <InputGroup className="mb-3 mt-4">
      <Form.Control
           onChangeCapture={props.onChange&&props.onChange}
        size="lg"
        type="text"
        name="amount"
        placeholder={props.outputAmount.toFixed(2)||"Recepient will get"}
        className="form_custom"
        readOnly={true}

        
      />   
    
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={props.receiverCountry} // Default currency
              id="input-group-dropdown-2"
              style={{ marginRight: "5px", backgroundColor: "#ededed" }} // Add margin-right to move it inside
            >
              <Dropdown.Item onClick={()=>props.setReceiverCountry('NPR')} className="dropdownItem">NPR</Dropdown.Item>
              <Dropdown.Item onClick={()=>props.setReceiverCountry('USD')} className="dropdownItem">USD</Dropdown.Item>
              {/* Add more currency options as needed */}
            </DropdownButton>
          </InputGroup>
        </Card.Body>
      </Card>
    </>
  );
};
