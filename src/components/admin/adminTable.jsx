import React from 'react';
import { Table,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const AdminPayManagementTable=(props)=>{
  const colorArr=['#ededed','white']
  return (
    <Table  bordered hover  style={{marginLeft:'20px', fontSize:'.90rem',width:'95%', backgroundColor: 'transparent' }}>
      <thead>
        <tr>
          <th style={{backgroundColor:'transparent'}}>UserName</th>
          <th style={{backgroundColor:'transparent'}}>UserId</th>
          <th style={{backgroundColor:'transparent'}}>PayTo</th>
          <th style={{backgroundColor:'transparent'}}>TransactionId</th>
          <th style={{backgroundColor:'transparent'}}>Amount</th>
          <th style={{backgroundColor:'transparent'}}>Status</th>
            <th style={{backgroundColor:'transparent'}}>Status</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
            {props.list && props.list.map((l,index)=>{

               return(
                <tr key={index}  >
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.userName}</td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.userId} </td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.payTo} </td>
                 <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.transactionId} </td>
                <td style={{ backgroundColor: colorArr[index%2] ,border:'none'}}>{l.amount} Usd</td>
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