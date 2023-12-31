import { Button, Dropdown, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { UserPayTable, UserTable,UserWalletTable } from "../../components/user/userTable";
import AxiosInstance from "../../axiosInstance";
import './css/history.css'
export function UserHistory() {
  const [history, setHistory] = useState("Transfer");
  const [transferHistory, setTransferHistory] = useState(null);
  const [payHistory, setPayHistory] = useState(null);
  const [sendHistory, setSendHistory] = useState(null);
  const [withdrawHistory, setWithDrawHistory] = useState(null);
  const [topupHistory, setTopUpHistory] = useState(null);

  useEffect(() => {
    async function getHistory() {
      const accessToken = localStorage.getItem("accessToken");
      var historyUrl
      if (history=="Transfer"||history=="Pay"){
       historyUrl = `/transaction/get${history}TransactionHistory/`;
      }else{
         historyUrl = `/wallet/get${history}TransactionHistory/`;

      }
      const historyTransact = await AxiosInstance.get(historyUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (history == "Transfer") {
        setTransferHistory(historyTransact.data.data);
      } else if (history == "Pay") {
        setPayHistory(historyTransact.data.data);
      } else if (history=="WithDraw"){
        setWithDrawHistory(historyTransact.data.data)
      }
      else if (history=="Send"){
        setSendHistory(historyTransact.data.data)
      }
      else if (history=="TopUp"){
        setTopUpHistory(historyTransact.data.data)
      }
    }
    getHistory();
  }, [history]);
  return (
    <div className="historyContainer">
      <div className="innerContainer" style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: "4rem", paddingTop: "2.5rem",marginRight:'10px' }}>History</h3>

        <Dropdown style={{ paddingTop: "2.5rem" }}>
          <Dropdown.Toggle
            variant="outline-secondary"
            id="dropdown-button"
            style={{ width: "100%" }}
          >
            {history} History
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{ width: "100%", left: 0, right: 0 }}
            align="end"
          >
            {/* Add Dropdown.Items as needed */}
            {history != "Transfer" && (
              <Dropdown.Item onClick={() => setHistory("Transfer")}>
                Transfer History
              </Dropdown.Item>
            )}
            {history != "Pay" && (
              <Dropdown.Item onClick={() => setHistory("Pay")}>
                Pay History
              </Dropdown.Item>
            )}
            {history != "WithDraw" && (
              <Dropdown.Item onClick={() => setHistory("WithDraw")}>
                WithDraw History
              </Dropdown.Item>
            )}
            {history != "Send" && (
              <Dropdown.Item onClick={() => setHistory("Send")}>
                Send History
              </Dropdown.Item>
            )}
            {history != "TopUp" && (
              <Dropdown.Item onClick={() => setHistory("TopUp")}>
                TopUp History
              </Dropdown.Item>
            )}
          </Dropdown.Menu>

        </Dropdown>
        <div style={{marginLeft:'10px', paddingTop: "2.5rem" }}>
          <div style={{ display: "flex" }}>
            <FormControl
              style={{ width: "20rem" }}
              type="text"
              placeholder="TransactionId"
              name={history}
            />
            <Button
              style={{
                marginLeft: "20px",
                marginRight:'3rem',
                backgroundColor: "#2e8a99",
                padding: "0px 40px",
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      {history == "Transfer" && <UserTable list={transferHistory} />}
      {history == "Pay" && <UserPayTable list={payHistory} />}
      {history == "Send" && <UserWalletTable list={sendHistory} />}
      {history == "WithDraw" && <UserWalletTable list={withdrawHistory} />}
      {history == "TopUp" && <UserWalletTable list={topupHistory} />}
      
    </div>
  );
}
