import { useState } from "react";
import { Button,Table } from "react-bootstrap";
import { CustomForm } from "../../components/user/formInput";

function Send() {
  return (
    <div className="m-auto mt-5 col-md-5 col-sm-8">
      <p style={{ fontSize: "1rem", marginBottom: "0px" }}>Make a request</p>
      <CustomForm placeholder="Your User Id" />
      <br />
      <CustomForm placeholder="Use Id to Which Person you Request" />
      <br />

      <CustomForm placeholder="Your email" />

      <br />
      <CustomForm placeholder="Your Phone Number" />
      <br />

      <CustomForm placeholder="Amount" />

        <br /><br />
        <div style={{textAlign:'center'}} >
        <Button style={{width:'75%', backgroundColor:"#2e8a99"}}>Make Request</Button>
    </div></div>
  );
}
function Receive() {
    const [list,setList]=useState([{
        requestName:'Alex Thomas',
        requestUserId:'222222',
        TransactionId:'222121',
        amount:'809.00 USD'
    },{
        requestName:'Alex Thomas',
        requestUserId:'222222',
        TransactionId:'222121',
        amount:'809.00 USD'
    },{
        requestName:'Alex Thomas',
        requestUserId:'222222',
        TransactionId:'222121',
        amount:'809.00 USD'
    },{
        requestName:'Alex Thomas',
        requestUserId:'222222',
        TransactionId:'222121',
        amount:'809.00 USD'
    },{
        requestName:'Alex Thomas',
        requestUserId:'222222',
        TransactionId:'222121',
        amount:'809.00 USD'
    },{
        requestName:'Alex Thomas',
        requestUserId:'222222',
        TransactionId:'222121',
        amount:'809.00 USD'
    },{
        requestName:'Alex Thomas',
        requestUserId:'222222',
        TransactionId:'222121',
        amount:'809.00 USD'
    },{
        requestName:'Alex Thomas',
        requestUserId:'222222',
        TransactionId:'222121',
        amount:'809.00 USD'
    },{
        requestName:'Alex Thomas',
        requestUserId:'222222',
        TransactionId:'222121',
        amount:'809.00 USD'
    },
])
    const colorArr=['#ededed','white']

    return(
        <Table  bordered hover  style={{marginLeft:'20px', fontSize:'.90rem',width:'95%', backgroundColor: 'transparent' }}>
        <thead>
          <tr>
            <th style={{backgroundColor:'transparent'}}>Request From</th>
            <th style={{backgroundColor:'transparent'}}>Requester User Id</th>
            <th style={{backgroundColor:'transparent'}}>TransactionId</th>
            <th style={{backgroundColor:'transparent'}}>Amount</th>
            <th style={{backgroundColor:'transparent'}}>Status</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
              {list && list.map((l,index)=>{
                 return(
                  <tr key={index}  >
                  <td style={{ backgroundColor: colorArr[index%2] ,border:'none',paddingTop:'1rem'}}>{l.requestName} </td>
                  <td style={{ backgroundColor: colorArr[index%2] ,border:'none',paddingTop:'1rem'}}>{l.requestUserId} </td>
                  <td style={{ backgroundColor: colorArr[index%2] ,border:'none',paddingTop:'1rem'}}>{l.TransactionId} Usd</td>
                  <td style={{ backgroundColor: colorArr[index%2] ,border:'none',paddingTop:'1rem'}}>{l.amount}</td>
                  <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <Button style={{backgroundColor:'#2e8a99'}}>Accept</Button>
                        <Button style={{backgroundColor:'red'}}>Cancel</Button>

                    </div>
                  </td>
                  </tr>
              )})}
           
            {/* Add more cells as needed */}
          
          {/* Add more rows as needed */}
        </tbody>
      </Table>
      )
}

export function UserRequest() {
  //To check whether the current Component is send or Receive
  const [current, setCurrent] = useState("Send");
  return (
    <div style={{ backgroundColor: "#dfe6ee", height: "100vh" }}>
      <div style={{ textAlign: "center", paddingTop: "3rem" }}>
        <Button
          style={{
            backgroundColor: current == "Send" ? "#2e8a99" : "#ededed",
            marginRight: "3rem",
            color: current == "Send" ? "white" : "#a4a4a4",
            border: "none",
            padding: "8px 40px",
          }}
          onClick={() => setCurrent("Send")}
        >
          Send
        </Button>
        <Button
          style={{
            backgroundColor: current == "Receive" ? "#2e8a99" : "#ededed",
            border: "none",
            color: current == "Receive" ? "white" : "#a4a4a4",
            marginRight: "3rem",
            padding: "8px 40px",
          }}
          onClick={() => setCurrent("Receive")}
        >
          Receive
        </Button>
      </div>
      {current == "Send" && <Send />}
      {current == "Receive" && <Receive />}
    </div>
  );
}
