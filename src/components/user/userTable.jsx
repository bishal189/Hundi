import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserTable = (props) => {
    const colorArr=['#ededed','white']

  return (
    <Table bordered hover  style={{fontSize:'.90rem',width:'95%', backgroundColor: 'transparent' }}>
      <thead>
        <tr>
          <th style={{backgroundColor:'transparent'}}>Time</th>
          <th style={{backgroundColor:'transparent'}}>Amount Sent</th>
          <th style={{backgroundColor:'transparent'}}>Receipent Got</th>
          <th style={{backgroundColor:'transparent'}}>Sender</th>
          <th style={{backgroundColor:'transparent'}}>Receiver</th>
          <th style={{backgroundColor:'transparent'}}>Status</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
            {props.list && props.list.map((l,index)=>{
             const date= new Date(l.created_at);
              const formattedDate = date.toLocaleDateString();
              const formattedTime = date.toLocaleTimeString();
              const formattedDateTime = `${formattedDate} ${formattedTime}`;
              return(
                <tr key={index}  >
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{formattedDateTime}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.sentAmount} {l.sender.currencyCode}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.receivedAmount} {l.receiver.currencyCode}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.sender.firstName}{l.sender.lastName}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.receiver.fullName}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.status}</td>
                </tr>)
                })}
         
          {/* Add more cells as needed */}
        
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export const UserBuyTable=(props)=>{
  const colorArr=['#ededed','white']
  return (
    <Table  bordered hover  style={{marginLeft:'20px', fontSize:'.90rem',width:'95%', backgroundColor: 'transparent' }}>
      <thead>
        <tr>
          <th style={{backgroundColor:'transparent'}}>Time</th>
          <th style={{backgroundColor:'transparent'}}>Pay To</th>
          <th style={{backgroundColor:'transparent'}}>TransactionId</th>
          <th style={{backgroundColor:'transparent'}}>Amount</th>
          <th style={{backgroundColor:'transparent'}}>Sent By</th>
          <th style={{backgroundColor:'transparent'}}>Status</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
            {props.list && props.list.map((l,index)=>{
               const date= new Date(l.created_at);
               const formattedDate = date.toLocaleDateString();
               const formattedTime = date.toLocaleTimeString();
               const formattedDateTime = `${formattedDate} ${formattedTime}`;
               return(
                <tr key={index}  >
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{formattedDateTime}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.companyName} </td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.id} </td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.Amount} Usd</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.consumerName}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.status}</td>
                </tr>
            )})}
         
          {/* Add more cells as needed */}
        
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
}