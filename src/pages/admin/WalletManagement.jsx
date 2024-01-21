import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AdminWalletManagementTable } from "../../components/admin/adminTable";

import AxiosInstance from "../../axiosInstance";
const WalletManagement = () => {
  const [buttonValue, setButtonValue] = useState("Send");

  const [walletHistory, setWalletHistory] = useState(null);

  useEffect(() => {
    async function getWalletHistory() {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await AxiosInstance.get(
          `wallet/get${buttonValue}TransactionHistory`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response);
        setWalletHistory(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getWalletHistory();
  }, [buttonValue]);
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
                background: buttonValue == "Send" ? "#53449F" : "#efefefef",
                color: buttonValue == "Send" ? "white" : "black",
              }}
              onClick={() => setButtonValue("Send")}
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
                background: buttonValue == "WithDraw" ? "#53449F" : "#efefefef",
                color: buttonValue == "WithDraw" ? "white" : "black",
              }}
              onClick={() => setButtonValue("WithDraw")}
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
                background: buttonValue == "TopUp" ? "#53449F" : "#efefefef",
                color: buttonValue == "TopUp" ? "white" : "black",
              }}
              onClick={() => setButtonValue("TopUp")}
            >
              Top Up
            </Button>
          </div>
        </div>
        <AdminWalletManagementTable
          list={walletHistory}
          buttonValue={buttonValue}
        />
      </div>
    </>
  );
};

export default WalletManagement;
