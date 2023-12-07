import "bootstrap/dist/css/bootstrap.min.css";
import "./css/card.css";
import {
  Card,
  FormControl,
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
        <Card.Text>
          <div className="spacer">
            <p className="muted_color">Amount Sent: </p>
            <p className="money_color">550.0rb</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Sender Name: </p>
            <p className="text_color">Thomas Henry</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Comission: </p>
            <p className="text_color">0 rb</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Average Rate: </p>
            <p className="text_color">1 rub=0.65nig</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export const TransferReceiveCard = (props) => {
  return (
    <Card className="transfer_card">
      <Card.Body>
        <Card.Text>
          <div className="spacer">
            <p className="muted_color">Recepient Get: </p>
            <p className="money_color">550.0rb</p>
          </div>

          <div className="spacer">
            <p className="muted_color">Recepient Name: </p>
            <p className="text_color">Thomas Henry</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Recepient Bank: </p>
            <p className="text_color">0 rb</p>
          </div>
          <div className="spacer">
            <p className="muted_color">Account Number: </p>
            <p className="text_color">1 rub=0.65nig</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export const BankCard = (props) => {
  return (
    <Card className="bank_card">
      <Card.Body>
        <Card.Text>
          <p>Sberbank</p>
          <p
            style={{ marginTop: "30px", marginRight: "10px" }}
            className="account_text"
          >
            2202 0r50 e0r0 0554
            <FaRegCopy style={{ marginLeft: "30px" }} />
          </p>
          <div style={{ marginTop: "30px" }}>
            <p className="name_text">Sandesh</p>
            <p>Rub</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};



export const SenderCard = () => {
  const [show,setShow]=useState(false)

  return (
    <>
    { show && <SenderModel setShow={setShow} />}


      <Card className="Maincard" style={{ margin: "20px" }}>
        <Card.Body>
            <IoLogOutOutline style={{ fontSize: "1.5rem" }} /> 
            <span style={{fontSize:'1.2rem',marginTop:'50px'}}>Sender</span>
            <br />
            <p style={{marginTop:'10px'}}>
            Average rate:<span className="MainText ">1 RUB = 9.10 NGN</span></p>

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
            <CustomForm placeholder="Enter amount" name="amount" />
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="NPR" // Default currency
              id="input-group-dropdown-2"
              style={{ marginRight: "5px", backgroundColor: "#ededed" }} // Add margin-right to move it inside
            >
              <Dropdown.Item className="dropdownItem">NPR</Dropdown.Item>
              <Dropdown.Item className="dropdownItem">USD</Dropdown.Item>
              {/* Add more currency options as needed */}
            </DropdownButton>
          </InputGroup>
        </Card.Body>
      </Card>
    </>
  );
};




// for the reciver card 
export const ReciverCard = () => {
  const [show,setShow]=useState(false)

  return (
    <>
    { show && <ReceiverModel setShow={setShow} />}


      <Card className="Maincard" style={{ margin: "20px" }}>
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
            <CustomForm readonly="true" placeholder="Recepient Will Get" name="amount" />
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="NPR" // Default currency
              id="input-group-dropdown-2"
              style={{ marginRight: "5px", backgroundColor: "#ededed" }} // Add margin-right to move it inside
            >
              <Dropdown.Item className="dropdownItem">NPR</Dropdown.Item>
              <Dropdown.Item className="dropdownItem">USD</Dropdown.Item>
              {/* Add more currency options as needed */}
            </DropdownButton>
          </InputGroup>
        </Card.Body>
      </Card>
    </>
  );
};
