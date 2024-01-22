import { Button ,Dropdown,Form,FormControl} from "react-bootstrap";
import { AdminTransferManagementTable,AdminWalletManagementTable,AdminPayManagementTable,AdminBuyManagementTable,AdminRequestTable } from "../../components/admin/adminTable";
import AxiosInstance from '../../axiosInstance'
import {useState,useEffect} from 'react'
import TransferManagement from './TransferManagement'

export function HistoryManagement() {

const [history,setHistory]=useState('Transfer')
const [transferHistory,setTransferHistory]=useState(null)
const [payHistory,setPayHistory]=useState(null)
const [buyHistory,setBuyHistory]=useState(null)
const [sendHistory,setSendHistory]=useState(null)
const [withDrawHistory,setWithDrawHistory]=useState(null)
const [topupHistory,setTopupHistory]=useState(null)
const [requestHistory,setRequestHistory]=useState(null)

useEffect(()=>{
  async function gethistory(){

 const accessToken=localStorage.getItem('accessToken');
 var url=""
switch(history){
  case 'Transfer':
    url="transaction/getTransferTransactionAdminHistory"
    break;
  case 'Buy':
    url='buy/getBuyTransactionAdminHistory'
    break;
  case 'Pay':
    url='transaction/getPayTransactionAdminHistory'
    break;
  case 'Request':
    url='request/getRequestTransactionHistory'
    break;
  default:
    url=`wallet/get${history}TransactionHistory`


}
console.log(url)
    try{

     const response=await AxiosInstance.get(url,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
      if (history == "Transfer") {
        setTransferHistory(response.data.data);
      } else if (history == "Pay") {
        setPayHistory(response.data.data);
      } else if (history=="WithDraw"){
        setWithDrawHistory(response.data.data)
      }
      else if (history=="Send"){
        setSendHistory(response.data.data)
      }
      else if (history=="TopUp"){
        setTopupHistory(response.data.data)
      }else if (history=="Buy"){
       setBuyHistory(response.data.data)
      }else if (history=='Request'){
        setRequestHistory(response.data.data)
      }
  }catch(error){
    console.log(error)
  }


  }
  gethistory()
},[history])



  return (
    <>
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
             {history != "Buy" && (
              <Dropdown.Item onClick={() => {setHistory("Buy")}}>
                Buy History
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
             {history != "Request" && (
              <Dropdown.Item onClick={() => setHistory("Request")}>
                Request History
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

      {history == "Transfer" && <AdminTransferManagementTable list={transferHistory} type="history" />}
      {history == "Pay" && <AdminPayManagementTable type="history" list={payHistory} />}
      {history == "Send" && <AdminWalletManagementTable type="history" list={sendHistory} buttonValue="Send" />}
      {history == "WithDraw" && <AdminWalletManagementTable type="history" buttonValue="WithDraw" list={withDrawHistory} />}
      {history == "TopUp" && <AdminWalletManagementTable type="history" buttonValue="TopUp" list={topupHistory} />}
      {history=="Buy" &&buyHistory &&  <AdminBuyManagementTable type="history" list={buyHistory}/>
}
 {history=="Request" &&  <AdminRequestTable type="history" list={requestHistory}/>}
    </div>
    </>
  );
}
