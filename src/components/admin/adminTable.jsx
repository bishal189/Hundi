import React from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const AdminPayManagementTable = (props) => {
  const colorArr = ["#ededed", "white"];
  return (
    <Table
      bordered
      hover
      style={{
        marginLeft: "20px",
        fontSize: ".90rem",
        width: "95%",
        backgroundColor: "transparent",
      }}
    >
      <thead>
        <tr>
          <th style={{ backgroundColor: "transparent" }}>UserName</th>
          <th style={{ backgroundColor: "transparent" }}>UserId</th>
          <th style={{ backgroundColor: "transparent" }}>PayTo</th>
          <th style={{ backgroundColor: "transparent" }}>TransactionId</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Status</th>
          <th style={{ backgroundColor: "transparent" }}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.userName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.userId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.payTo}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.transactionId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{ backgroundColor: "#53449f", marginRight: "5px" }}
                    >
                      Accept
                    </Button>
                    <Button style={{ backgroundColor: "#fb896b" }}>
                      Cancel
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}

        {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export const AdminBuyManagementTable = (props) => {
  const colorArr = ["#ededed", "white"];
  return (
    <Table
      bordered
      hover
      style={{
        marginLeft: "20px",
        fontSize: ".90rem",
        width: "95%",
        backgroundColor: "transparent",
      }}
    >
      <thead>
        <tr>

          <th style={{ backgroundColor: "transparent" }}>Buyer Name</th>
          <th style={{ backgroundColor: "transparent" }}>Buyer Id</th>
          <th style={{ backgroundColor: "transparent" }}>Product Name</th>
          <th style={{ backgroundColor: "transparent" }}>TransactionId</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Status</th>
          <th style={{ backgroundColor: "transparent" }}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.buyerName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.buyerId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.productName}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.transactionId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{ backgroundColor: "#53449f", marginRight: "5px" }}
                    >
                      Accept
                    </Button>
                    <Button style={{ backgroundColor: "#fb896b" }}>
                      Cancel
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}

        {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export const AdminTransferManagementTable = (props) => {
  const colorArr = ["#ededed", "white"];
  return (
    <Table
      bordered
      hover
      style={{
        marginLeft: "20px",
        fontSize: ".90rem",
        width: "95%",
        backgroundColor: "transparent",
      }}
    >
      <thead>
        <tr>
          <th style={{ backgroundColor: "transparent" }}>Sender name</th>
          <th style={{ backgroundColor: "transparent" }}>Sender id</th>
          <th style={{ backgroundColor: "transparent" }}>Reciever name</th>
          <th style={{ backgroundColor: "transparent" }}>Reciever id</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Sender agent</th>
          <th style={{ backgroundColor: "transparent" }}>Reciever agent</th>
          <th style={{ backgroundColor: "transparent" }}>Status</th>
          <th style={{ backgroundColor: "transparent" }}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.senderName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.senderId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.recieverName}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.recieverId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.senderAgent}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.recieverAgent}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{ backgroundColor: "#53449f", marginRight: "5px" }}
                    >
                      Accept
                    </Button>
                    <Button style={{ backgroundColor: "#fb896b" }}>
                      Cancel
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}

        {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export const AdminHistoryManagementTable = (props) => {
  const colorArr = ["#ededed", "white"];
  return (
    <Table
      bordered
      hover
      style={{
        marginLeft: "20px",
        fontSize: ".90rem",
        width: "95%",
        backgroundColor: "transparent",
      }}
    >
      <thead>
        <tr>
          <th style={{ backgroundColor: "transparent" }}>Username</th>
          <th style={{ backgroundColor: "transparent" }}>User ID</th>
          <th style={{ backgroundColor: "transparent" }}>Type</th>
          <th style={{ backgroundColor: "transparent" }}>TransactionId</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Time</th>
          <th style={{ backgroundColor: "transparent" }}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.userName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.userId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.type}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.transactionId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.time}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                    color: "green",
                  }}
                >
                  {l.action}
                </td>
              </tr>
            );
          })}

        {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
}

export const AdminRequestTable=(props)=>{
  const colorArr=['#ededed','white']
  return (
    <Table  bordered hover  style={{marginLeft:'20px', fontSize:'.90rem',width:'95%', backgroundColor: 'transparent' }}>
      <thead>
        <tr>
          <th style={{backgroundColor:'transparent'}}>Request by</th>
          <th style={{backgroundColor:'transparent'}}>Request by Id</th>
          <th style={{backgroundColor:'transparent'}}>Request to </th>
          <th style={{backgroundColor:'transparent'}}>Request to Id</th>
          <th style={{backgroundColor:'transparent'}}>Amount</th>
          <th style={{backgroundColor:'transparent'}}>Status</th>
            <th style={{backgroundColor:'transparent'}}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
            {props.list && props.list.map((l,index)=>{

               return(
                <tr key={index}  >
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.RequestBy}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.RequestById} </td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.RequestTo} </td>
                 <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.RequestToId} </td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>${l.amount} Usd</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.status}</td>
                 <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>
                 <div style={{display:'flex'}}>
                 <Button style={{backgroundColor:'#53449f',marginRight:'5px'}}>Accept</Button>
                 <Button style={{backgroundColor:'#fb896b'}}>Cancel</Button>
                 </div>
                 </td>
                </tr>
            )})}

          {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
}
};
