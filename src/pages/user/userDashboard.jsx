import { Button } from "react-bootstrap";
import {useState,useEffect} from "react"
import axiosInstance from '../../axiosInstance'
function SmallCards(props) {
  return (
    <>
      <Button style={{ backgroundColor: "#2e8a99", width: "20%" }}>
        <span style={{ float: "left", fontSize: ".70rem" }}>{props.title}</span>
    <br />
        <span style={{ float: "left", fontWeight: "600" }}>{props.currency && '$'} {props.value} {props.currency} </span>
      </Button>
    </>
  );
}
export function UserDashboard() {
  const [dashboard,setDashboard]=useState({
    Balance:0,
    TotalSendMoney:0,
    TotalTopUp:0,
    TotalReceived:0,
    SucessFullTransfer:0,
    SucessFullTopup:0,
    TopBuy:0,
    CurrencyCode:'',
    TotalBuy:0,
  })
  const accessToken=localStorage.getItem('accessToken')
  useEffect(()=>{
    async function getDash(){
    try{
      const dashboardResponse=await axiosInstance.get('/transaction/userdashboard/',{
      headers: {
          Authorization: `Bearer ${accessToken}`,
        },
  })
  console.log(dashboardResponse)
  setDashboard({
    ...dashboard,
    CurrencyCode:dashboardResponse.data.currencyCode,
    TotalSendMoney:dashboardResponse.data.totalSentMoney,
    SucessFullTransfer:dashboardResponse.data.sucessFullTransfer,
  })

    }catch(error){
      console.log(error)
    }

}
  getDash()
  },[])
 
  return (
    <>
      <div
        style={{
          backgroundColor: "#dfe6ee",
          paddingTop: "2rem",
          height: "100vh",
        }}
      >
        <div
          style={{
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <SmallCards title="Balance" currency={dashboard.CurrencyCode} value={dashboard.Balance}/>
          <SmallCards title="Total Send Money"  currency={dashboard.CurrencyCode} value={dashboard.TotalSendMoney}/>
          <SmallCards title="Total Top Up" currency={dashboard.CurrencyCode}  value={dashboard.TotalTopUp}/>
          <SmallCards title="Total Received"  currency={dashboard.CurrencyCode} value={dashboard.TotalReceived}/>
        </div>

        <div
          style={{
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <SmallCards title="Sucessfull Transfer"   value={dashboard.SucessFullTransfer}/>
          <SmallCards title="SucessFull Topup"  value={dashboard.SucessFullTopup}/>
          <SmallCards title="Top Buy"  currency={dashboard.CurrencyCode} value={dashboard.TopBuy} />
          <SmallCards title="Total Buy" currency={dashboard.CurrencyCode}  value={dashboard.TotalBuy}/>
        </div>
      </div>
    </>
  );
}
