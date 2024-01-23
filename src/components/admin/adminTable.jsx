import {useState} from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiEdit, CiMail } from "react-icons/ci";
import AxiosInstance from '../../axiosInstance'
import {ErrorModal} from '../../components/user/popupModal'

export const AdminPayManagementTable = (props) => {
  const colorArr = ["#ededed", "white"];
  const [modal,setModal]=useState(false)
  const [color,setColor]=useState('red')
  const [error,setError]=useState('')


  async function approvePay(transactId){
    const accessToken=localStorage.getItem('accessToken')
    try{
     const response=await AxiosInstance.get(`transaction/approvePayTransactionAdmin/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }
    async function denyPay(transactId){
    const accessToken=localStorage.getItem('accessToken')
    try{
     const response=await AxiosInstance.get(`transaction/denyPayTransactionAdmin/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }


  return (
    <>
  {modal && <ErrorModal show={true} color={color} error={error} closeModal={setModal}/>}
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
          <th style={{ backgroundColor: "transparent" }}>Type</th>
          <th style={{ backgroundColor: "transparent" }}>TransactionId</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>

          <th style={{ backgroundColor: "transparent" }}>Status</th>
          {props.type=="history"?
  (<><th style={{ backgroundColor: "transparent" }}>Created At</th>
          <th style={{ backgroundColor: "transparent" }}>Completed At At</th></>)
          :
          <th style={{ backgroundColor: "transparent" }}>Action</th>}

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            var completedAtDateTime
             var date= new Date(l.created_at);
              const createdAtDate = date.toLocaleDateString();
              const createdAtTime = date.toLocaleTimeString();
              const createdAtDateTime = `${createdAtDate} ${createdAtTime}`;
              if (l.completed_at){
                 date= new Date(l.completed_at);
              const completedAtDate = date.toLocaleDateString();
              const completedAtTime = date.toLocaleTimeString();
               completedAtDateTime = `${completedAtDate} ${completedAtTime}`;
              }else{
                 completedAtDateTime="None"
              }



              return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.consumerName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.consumerId}{" "}
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
                  {l.type}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.id}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.Amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>

                  {props.type=="history" ?
              (<>
                 <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{createdAtDateTime}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{completedAtDateTime}
                </td>
                </>
              ):
              (<td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >

            {l.status == "PROCESSING" ? (
                    <div style={{ display: "flex" }}>
                      <Button
                        style={{
                          backgroundColor: "#53449f",
                          marginRight: "5px",
                        }}
                        onClick={()=>approvePay(l.id)}
                      >
                        Accept
                      </Button>
                      <Button onClick={()=>denyPay(l.id)} style={{ backgroundColor: "#fb896b" }}>
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button style={{ backgroundColor: "#53449f" }}>
                      Already Complete
                    </Button>
                  )}
                </td>)}
              </tr>
            );
          })}

        {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
    </>
  );
};

export const AdminBuyManagementTable = (props) => {

  const [modal,setModal]=useState(false)
  const [color,setColor]=useState('red')
  const [error,setError]=useState('')

  async function approveBuy(transactId){
    const accessToken=localStorage.getItem('accessToken')
    try{
     const response=await AxiosInstance.get(`buy/approveBuyTransaction/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }
    async function denyBuy(transactId){
    const accessToken=localStorage.getItem('accessToken')
    try{
     const response=await AxiosInstance.get(`buy/denyBuyTransaction/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }


  const colorArr = ["#ededed", "white"];
  return (
    <>
    {modal && <ErrorModal show={true} color={color} error={error} closeModal={setModal}/>}
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
   {props.type=="history"?
  (<><th style={{ backgroundColor: "transparent" }}>Created At</th>
          <th style={{ backgroundColor: "transparent" }}>Completed At At</th></>)
          :
          <th style={{ backgroundColor: "transparent" }}>Action</th>}

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            var completedAtDateTime
             var date= new Date(l.createdAt);
              const createdAtDate = date.toLocaleDateString();
              const createdAtTime = date.toLocaleTimeString();
              const createdAtDateTime = `${createdAtDate} ${createdAtTime}`;

              if (l.completedAt){
                 date= new Date(l.completedAt);
              const completedAtDate = date.toLocaleDateString();
              const completedAtTime = date.toLocaleTimeString();
               completedAtDateTime = `${completedAtDate} ${completedAtTime}`;
              }else{
                 completedAtDateTime="None"
              }
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.buyer.name}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.buyer.id}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.item.item}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.id}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.totalPrice} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>
               {props.type=="history" ?
              (<>
                 <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{createdAtDateTime}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{completedAtDateTime}
                </td>
                </>
              ):
              (<td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >

                    <div style={{ display: "flex" }}>
                      <Button
                        style={{
                          backgroundColor: "#53449f",
                          marginRight: "5px",
                        }}
                        onClick={()=>approveBuy(l.id)}
                      >
                        Accept
                      </Button>
                      <Button onClick={()=>denyBuy(l.id)} style={{ backgroundColor: "#fb896b" }}>
                        Cancel
                      </Button>
                    </div>

                </td>)}
              </tr>
            );
          })}

        {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
    </>
  );
};

export const AdminTransferManagementTable = (props) => {
  const colorArr = ["#ededed", "white"];
    const [modal,setModal]=useState(false)
  const [color,setColor]=useState('red')
  const [error,setError]=useState('')

  async function approveTransfer(transactId){
    const accessToken=localStorage.getItem('accessToken')
    try{
     const response=await AxiosInstance.get(`transaction/approveTransferTransactionAdmin/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }
    async function denyTransfer(transactId){
    const accessToken=localStorage.getItem('accessToken')
    try{
     const response=await AxiosInstance.get(`transaction/denyTransferTransactionAdmin/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }


  return (
    <>
     {modal && <ErrorModal show={true} color={color} error={error} closeModal={setModal}/>}
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
          {props.type=="history"?
  (<><th style={{ backgroundColor: "transparent" }}>Created At</th>
          <th style={{ backgroundColor: "transparent" }}>Completed At At</th></>)
          :
          <th style={{ backgroundColor: "transparent" }}>Action</th>}

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            var completedAtDateTime
             var date= new Date(l.created_at);
              const createdAtDate = date.toLocaleDateString();
              const createdAtTime = date.toLocaleTimeString();
              const createdAtDateTime = `${createdAtDate} ${createdAtTime}`;

              if (l.completed_at){
                 date= new Date(l.completed_at);
              const completedAtDate = date.toLocaleDateString();
              const completedAtTime = date.toLocaleTimeString();
               completedAtDateTime = `${completedAtDate} ${completedAtTime}`;
              }else{
                 completedAtDateTime="None"
              }


              return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.sender.firstName} {l.sender.lastName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.sender.id}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.receiver.fullName}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.receiver.id}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.sentAmount} Usd
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
               {props.type=="history" ?
              (<>
                 <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{createdAtDateTime}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{completedAtDateTime}
                </td>
                </>
              ):
              (<td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >

                    <div style={{ display: "flex" }}>
                      <Button
                        style={{
                          backgroundColor: "#53449f",
                          marginRight: "5px",
                        }}
                        onClick={()=>approveTransfer(l.id)}
                      >
                        Accept
                      </Button>
                      <Button onClick={()=>denyTransfer(l.id)} style={{ backgroundColor: "#fb896b" }}>
                        Cancel
                      </Button>
                    </div>

                </td>)}
              </tr>
            );
          })}

        {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
    </>
  );
};

export const AdminWalletManagementTable = (props) => {
  const colorArr = ["#ededed", "white"];
      const [modal,setModal]=useState(false)
  const [color,setColor]=useState('red')
  const [error,setError]=useState('')


    async function approveWallet(transactId){
    const accessToken=localStorage.getItem('accessToken')
    try{
     const response=await AxiosInstance.get(`wallet/accept${props.buttonValue}Transaction/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }
    async function denyWallet(transactId){
    const accessToken=localStorage.getItem('accessToken')
    try{
     const response=await AxiosInstance.get(`wallet/deny${props.buttonValue}Transaction/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }

  return (
    <>
      {modal && <ErrorModal show={true} color={color} error={error} closeModal={setModal}/>}
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
      <>
        {props.buttonValue == "Send" && (
          <>
            <thead>
              <tr>
                <th style={{ backgroundColor: "transparent" }}>Sender Name</th>
                <th style={{ backgroundColor: "transparent" }}>Sender ID</th>

                <th style={{ backgroundColor: "transparent" }}>
                  BankAccountNumber
                </th>
                <th style={{ backgroundColor: "transparent" }}>Amount</th>

                <th style={{ backgroundColor: "transparent" }}>Status</th>
  {props.type=="history"?
  (<><th style={{ backgroundColor: "transparent" }}>Created At</th>
          <th style={{ backgroundColor: "transparent" }}>Completed At At</th></>)
          :
          <th style={{ backgroundColor: "transparent" }}>Action</th>}

                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {props.list &&
                props.list.map((l, index) => {
               var completedAtDateTime
             var date= new Date(l.createdAt);
              const createdAtDate = date.toLocaleDateString();
              const createdAtTime = date.toLocaleTimeString();
              const createdAtDateTime = `${createdAtDate} ${createdAtTime}`;

              if (l.completedAt){
                 date= new Date(l.completedAt);
              const completedAtDate = date.toLocaleDateString();
              const completedAtTime = date.toLocaleTimeString();
               completedAtDateTime = `${completedAtDate} ${completedAtTime}`;
              }else{
                 completedAtDateTime="None"
              }

                  return (
                    <tr key={index}>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.name}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.id}{" "}
                      </td>

                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.bankAccountNumber}{" "}
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
                     {props.type=="history" ?
              (<>
                 <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{createdAtDateTime}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{completedAtDateTime}
                </td>
                </>
              ):
              (<td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >

                    <div style={{ display: "flex" }}>
                      <Button
                        style={{
                          backgroundColor: "#53449f",
                          marginRight: "5px",
                        }}
                        onClick={()=>approveWallet(l.id)}
                      >
                        Accept
                      </Button>
                      <Button onClick={()=>denyWallet(l.id)} style={{ backgroundColor: "#fb896b" }}>
                        Cancel
                      </Button>
                    </div>

                </td>)}
                    </tr>
                  );
                })}
            </tbody>
          </>
        )}

        {props.buttonValue == "WithDraw" && (
          <>
            <thead>
              <tr>
                <th style={{ backgroundColor: "transparent" }}>User Name</th>
                <th style={{ backgroundColor: "transparent" }}>User ID</th>
                <th style={{ backgroundColor: "transparent" }}>Account no</th>
                <th style={{ backgroundColor: "transparent" }}>
                  Transaction Id
                </th>
                <th style={{ backgroundColor: "transparent" }}>Amount</th>
                <th style={{ backgroundColor: "transparent" }}>Status</th>
    {props.type=="history"?
  (<><th style={{ backgroundColor: "transparent" }}>Created At</th>
          <th style={{ backgroundColor: "transparent" }}>Completed At At</th></>)
          :
          <th style={{ backgroundColor: "transparent" }}>Action</th>}
                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {props.list &&
                props.list.map((l, index) => {
   var completedAtDateTime
             var date= new Date(l.createdAt);
              const createdAtDate = date.toLocaleDateString();
              const createdAtTime = date.toLocaleTimeString();
              const createdAtDateTime = `${createdAtDate} ${createdAtTime}`;

              if (l.completedAt){
                 date= new Date(l.completedAt);
              const completedAtDate = date.toLocaleDateString();
              const completedAtTime = date.toLocaleTimeString();
               completedAtDateTime = `${completedAtDate} ${completedAtTime}`;
              }else{
                 completedAtDateTime="None"
              }                  return (
                    <tr key={index}>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.name}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.user.id}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.bankAccountNumber}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.id}{" "}
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
                      {props.type=="history" ?
              (<>
                 <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{createdAtDateTime}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{completedAtDateTime}
                </td>
                </>
              ):
              (<td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >

                    <div style={{ display: "flex" }}>
                      <Button
                        style={{
                          backgroundColor: "#53449f",
                          marginRight: "5px",
                        }}
                        onClick={()=>approveWallet(l.id)}
                      >
                        Accept
                      </Button>
                      <Button onClick={()=>denyWallet(l.id)} style={{ backgroundColor: "#fb896b" }}>
                        Cancel
                      </Button>
                    </div>

                </td>)}
                    </tr>
                  );
                })}
            </tbody>
          </>
        )}

        {props.buttonValue == "TopUp" && (
          <>
            <thead>
              <tr>
                <th style={{ backgroundColor: "transparent" }}>User Name</th>
                <th style={{ backgroundColor: "transparent" }}>User ID</th>
                <th style={{ backgroundColor: "transparent" }}>Account no</th>
                <th style={{ backgroundColor: "transparent" }}>
                  Transaction Id
                </th>
                <th style={{ backgroundColor: "transparent" }}>Amount</th>
                <th style={{ backgroundColor: "transparent" }}>Status</th>
    {props.type=="history"?
  (<><th style={{ backgroundColor: "transparent" }}>Created At</th>
          <th style={{ backgroundColor: "transparent" }}>Completed At At</th></>)
          :
          <th style={{ backgroundColor: "transparent" }}>Action</th>}
                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {props.list &&
                props.list.map((l, index) => {
   var completedAtDateTime
             var date= new Date(l.createdAt);
              const createdAtDate = date.toLocaleDateString();
              const createdAtTime = date.toLocaleTimeString();
              const createdAtDateTime = `${createdAtDate} ${createdAtTime}`;

              if (l.completedAt){
                 date= new Date(l.completedAt);
              const completedAtDate = date.toLocaleDateString();
              const completedAtTime = date.toLocaleTimeString();
               completedAtDateTime = `${completedAtDate} ${completedAtTime}`;
              }else{
                 completedAtDateTime="None"
              }                  return (
                    <tr key={index}>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.name}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.user.id}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.bankAccountNumber}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.id}{" "}
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
                      {props.type=="history" ?
              (<>
                 <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{createdAtDateTime}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{completedAtDateTime}
                </td>
                </>
              ):
              (<td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >

                    <div style={{ display: "flex" }}>
                      <Button
                        style={{
                          backgroundColor: "#53449f",
                          marginRight: "5px",
                        }}
                        onClick={()=>approveWallet(l.id)}
                      >
                        Accept
                      </Button>
                      <Button onClick={()=>denyWallet(l.id)} style={{ backgroundColor: "#fb896b" }}>
                        Cancel
                      </Button>
                    </div>

                </td>)}
                    </tr>
                  );
                })}
            </tbody>
          </>
        )}
      </>
    </Table>
    </>
  );
};

export const AdminRequestTable = (props) => {
  const colorArr = ["#ededed", "white"];
   const [modal,setModal]=useState(false)
  const [color,setColor]=useState('red')
  const [error,setError]=useState('')


    async function approveRequest(transactId){
    const accessToken=localStorage.getItem('accessToken')

    try{
     const response=await AxiosInstance.get(`request/acceptRequestTransaction/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }
    async function denyRequest(transactId){
    const accessToken=localStorage.getItem('accessToken')
    try{
     const response=await AxiosInstance.get(`request/denyRequestTransaction/${transactId}/`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }})
     setError(response.data.message)
     setColor('green')
     setModal(true)
     props.toggleUpdater()
    }
    catch(error){
      console.log(error)
      setError(error.response.data.error)
      setColor('red')
      setModal(true)
    }
  }

  return (
    <>
       {modal && <ErrorModal show={true} color={color} error={error} closeModal={setModal}/>}
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
          <th style={{ backgroundColor: "transparent" }}>Request by</th>
          <th style={{ backgroundColor: "transparent" }}>Request by Id</th>
          <th style={{ backgroundColor: "transparent" }}>Request to </th>
          <th style={{ backgroundColor: "transparent" }}>Request to Id</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Status</th>
    {props.type=="history"?
  (<><th style={{ backgroundColor: "transparent" }}>Created At</th>
          <th style={{ backgroundColor: "transparent" }}>Completed At At</th></>)
          :
          <th style={{ backgroundColor: "transparent" }}>Action</th>}


      </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            console.log(l)
 var completedAtDateTime
             var date= new Date(l.createdAt);
              const createdAtDate = date.toLocaleDateString();
              const createdAtTime = date.toLocaleTimeString();
              const createdAtDateTime = `${createdAtDate} ${createdAtTime}`;
            console.log(l.id)
              if (l.completedAt){
                 date= new Date(l.completedAt);
              const completedAtDate = date.toLocaleDateString();
              const completedAtTime = date.toLocaleTimeString();
               completedAtDateTime = `${completedAtDate} ${completedAtTime}`;
              }else{
                 completedAtDateTime="None"
              }            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.requester.name}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.requester.id}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.requestedTo.name}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.requestedTo.id}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.requestedAmount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>

                {props.type=="history" ?
                   (<>
                 <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{createdAtDateTime}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >{completedAtDateTime}
                </td>
                </>
              ):
              (<td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >

                    <div style={{ display: "flex" }}>
                      <Button
                        style={{
                          backgroundColor: "#53449f",
                          marginRight: "5px",
                        }}
                        onClick={()=>approveRequest(l.id)}
                      >
                        Accept
                      </Button>
                      <Button onClick={()=>denyRequest(l.id)} style={{ backgroundColor: "#fb896b" }}>
                        Cancel
                      </Button>
                    </div>

                </td>)}
              </tr>
            );
          })}

        {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
    </>
  );
};

export const AdminAllCustomersTable = (props) => {
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
      <>
        <>
          <thead>
            <tr>
              <th style={{ backgroundColor: "transparent" }}>Avatar</th>
              <th style={{ backgroundColor: "transparent" }}>Name</th>

              <th style={{ backgroundColor: "transparent" }}>Role</th>
              <th style={{ backgroundColor: "transparent" }}>User ID</th>

              <th style={{ backgroundColor: "transparent" }}>Email ID</th>
              <th style={{ backgroundColor: "transparent" }}>Balance</th>

              <th style={{ backgroundColor: "transparent" }}>Profile</th>
              <th style={{ backgroundColor: "transparent" }}>KYC</th>

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
                      <div
                        style={{
                          background: "#F36666",
                          height: "40px",
                          width: "40px",
                          borderRadius: "20px",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        AN
                      </div>
                    </td>
                    <td
                      style={{
                        backgroundColor: colorArr[index % 2],
                        border: "none",
                      }}
                    >
                      {l.name}{" "}
                    </td>

                    <td
                      style={{
                        backgroundColor: colorArr[index % 2],
                        border: "none",
                      }}
                    >
                      {l.role}{" "}
                    </td>

                    <td
                      style={{
                        backgroundColor: colorArr[index % 2],
                        border: "none",
                      }}
                    >
                      ${l.userId} Usd
                    </td>
                    <td
                      style={{
                        backgroundColor: colorArr[index % 2],
                        border: "none",
                      }}
                    >
                      {l.email}
                    </td>

                    <td
                      style={{
                        backgroundColor: colorArr[index % 2],
                        border: "none",
                      }}
                    >
                      {l.balance}
                    </td>

                    <td
                      style={{
                        backgroundColor: colorArr[index % 2],
                        border: "none",
                      }}
                    >
                      {l.profit}
                    </td>

                    <td
                      style={{
                        backgroundColor: colorArr[index % 2],
                        border: "none",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          backgroundColor: "#FCCA4A",
                          color: "black",
                          borderRadius: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {l.kyc}
                      </div>
                    </td>

                    <td
                      style={{
                        backgroundColor: colorArr[index % 2],
                        border: "none",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          backgroundColor: "#2E8A99",
                          color: "white",
                          borderRadius: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {l.status}
                      </div>
                    </td>

                    <td
                      style={{
                        backgroundColor: colorArr[index % 2],
                        border: "none",
                      }}
                    >
                      <Button
                        style={{
                          background: "#53449F",
                          width: "30px",
                          height: "30px",
                          padding: 0,
                          borderRadius: "15px",
                          marginRight: "5px",
                          display: "inline",
                        }}
                      >
                        <CiEdit />
                      </Button>

                      <Button
                        style={{
                          background: "#53449F",
                          width: "30px",
                          padding: 0,
                          height: "30px",
                          position: "relative",
                          borderRadius: "15px",
                        }}
                      >
                        <CiMail
                          style={{
                            width: "15px",
                            height: "15px",
                          }}
                        />
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </>
      </>
    </Table>
  );
};

import {useEffect } from "react";

export const SettingsAdmin = ({ imagePreview }) => {
  const [localImagePreview, setLocalImagePreview] = useState(null);

  useEffect(() => {
    // Update localImagePreview when the imagePreview prop changes
    setLocalImagePreview(imagePreview);
  }, [imagePreview]);

  const openFileInput = () => {
    document.getElementById("uploadInput").click();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginLeft: "1rem",
            padding: "10px",
            fontSize: "1.5rem",
            fontWeight: "500",
          }}
        >
          {" "}
          Site logo
        </div>
        <div
          style={{
            width: "230px",
            height: "92px",
            borderRadius: "10px",
            cursor: "pointer",
            overflow: "hidden",
            padding: "10px",
          }}
          onClick={openFileInput}
        >
          {localImagePreview ? (
            <img
              src={localImagePreview}
              alt="Uploaded Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Click to upload image
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const ButtonSettings = (props) => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{ marginLeft: "2rem",width:'155px' }}>
        <h4 style={{ fontSize: "1rem" }}>{props.title}</h4>
      </div>
      <div style={{ marginLeft: "2rem", padding: "10px", width: "350px" }}>
        <button
          style={{
            padding: "10px",
            width: "150px",
            height: "auto",
            borderRadius: "3px",
            border: "none",
            outline: "none",
            backgroundColor: `${props.enable}`,
          }}
        >
          Enable
        </button>
        <button
          style={{
            padding: "10px",
            width: "150px",
            height: "auto",
            borderRadius: "3px",
            border: "none",
            outline: "none",
            backgroundColor: `${props.disable}`,
          }}
        >
          Disable
        </button>
      </div>
    </div>
    </>
  );
};
