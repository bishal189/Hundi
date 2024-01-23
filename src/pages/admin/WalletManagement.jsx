import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AdminWalletManagementTable } from "../../components/admin/adminTable";

const WalletManagement = () => {
  const list = [
    {
      senderName: "Martin James",
      senderId: "980000",
      recieverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      status: "On going",
      userName: "James Paul",
      userId: "234156",
      accountNo: "2345621000231",
      transactionId: "4563632",
    },
    {
      senderName: "Martin James",
      senderId: "980000",
      recieverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      status: "On going",
      userName: "James Paul",
      userId: "234156",
      accountNo: "2345621000231",
      transactionId: "4563632",
    },
    {
      senderName: "Martin James",
      senderId: "980000",
      recieverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      status: "On going",
      userName: "James Paul",
      userId: "234156",
      accountNo: "2345621000231",
      transactionId: "4563632",
    },
    {
      senderName: "Martin James",
      senderId: "980000",
      recieverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      status: "On going",
      userName: "James Paul",
      userId: "234156",
      accountNo: "2345621000231",
      transactionId: "4563632",
    },
    {
      senderName: "Martin James",
      senderId: "980000",
      recieverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      status: "On going",
      userName: "James Paul",
      userId: "234156",
      accountNo: "2345621000231",
      transactionId: "4563632",
    },
  ];

  const [buttonValue, setButtonValue] = useState("send");

  return (
    <>
      <div style={{ backgroundColor: "#dfe6ee" }} className="transferContainer">
        <div
          style={{
            fontSize: "1.5rem",
            padding: "20px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Button
              style={{
                width: "100px",
                height: "30px",
                padding: "4px 10px",
                borderRadius: "5px",
                marginLeft: "10px",
                border: 0,
                background: buttonValue == "send" ? "#53449F" : "#efefefef",
                color: buttonValue == "send" ? "white" : "black",
              }}
              onClick={() => setButtonValue("send")}
            >
              Send
            </Button>
            <Button
              style={{
                width: "100px",
                height: "30px",
                padding: "4px 10px",
                borderRadius: "5px",
                marginLeft: "10px",
                border: 0,
                background: buttonValue == "withdraw" ? "#53449F" : "#efefefef",
                color: buttonValue == "withdraw" ? "white" : "black",
              }}
              onClick={() => setButtonValue("withdraw")}
            >
              Withdraw
            </Button>

            <Button
              style={{
                width: "100px",
                height: "30px",
                padding: "4px 10px",
                borderRadius: "5px",
                marginLeft: "10px",
                border: 0,
                background: buttonValue == "topup" ? "#53449F" : "#efefefef",
                color: buttonValue == "topup" ? "white" : "black",
              }}
              onClick={() => setButtonValue("topup")}
            >
              Top Up
            </Button>
          </div>
        </div>
        <AdminWalletManagementTable list={list} buttonValue={buttonValue} />
      </div>
    </>
  );
};

export default WalletManagement;


