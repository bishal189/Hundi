import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = (props) => {
    const colorArr=['#ededed','white']
  return (
    <Table bordered hover  style={{ backgroundColor: 'transparent' }}>
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
            {props.list && props.list.map((l,index)=>(
                <tr key={index}  >
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.created_at}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.sentAmount} {l.sender.currencyCode}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.receivedAmount} {l.receiver.currencyCode}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.sender.firstName}{l.sender.lastName}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.receiver.fullName}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.status}</td>
                </tr>
            ))}
         
          {/* Add more cells as needed */}
        
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export default UserTable;
