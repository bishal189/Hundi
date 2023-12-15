import { Button, Dropdown, FormControl } from "react-bootstrap";
import { useState,useEffect } from "react";
import { UserPayTable, UserTable } from "../../components/user/userTable";
import AxiosInstance  from "../../axiosInstance";


export function UserHistory(){
    const [history,setHistory]=useState("Transfer")
    const [transferHistory,setTransferHistory]=useState(null)
    const [payHistory,setPayHistory]=useState(null)
    useEffect(()=>{
          async function getHistory(){
            const accessToken = localStorage.getItem('accessToken');
            const historyUrl=`/transaction/get${history}TransactionHistory/`
            const historyTransact=await AxiosInstance.get(historyUrl,{
              headers:{
                Authorization:`Bearer ${accessToken}`
              }
            })
            if (history=="Transfer"){
              setTransferHistory(historyTransact.data.data)
            }else if (history=="Pay"){
                setPayHistory(historyTransact.data.data)
            }
          }
          getHistory()
    },[history])
    return(
        <div style={{backgroundColor:'#dfe6ee',height:'100vh'}}>
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <h3 style={{marginLeft:'4rem',paddingTop:'2.5rem'}}>History</h3>
         
            <Dropdown style={{paddingTop:'2.5rem'}}>
      
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-button"
          style={{ width: '100%' }}
        >
          {history} History
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: '100%', left: 0, right: 0 }} align="end">
          {/* Add Dropdown.Items as needed */}

         {history=="Pay" && <Dropdown.Item onClick={()=>setHistory("Transfer")}>Transfer History</Dropdown.Item> }
          {
           history=="Transfer" &&    <Dropdown.Item onClick={()=>setHistory("Pay")}>Pay History</Dropdown.Item>
            
            }
          
        </Dropdown.Menu>
      </Dropdown>
            <div style={{paddingTop:'2.5rem'}}>
                <div style={{display:'flex'}}>
                <FormControl style={{width:'20rem'}} type="text" placeholder="TransactionId" name={history}/>
                <Button style={{marginLeft:'20px',backgroundColor:'#2e8a99',padding:'0px 40px'}}>Search</Button>
                </div>
            </div>
            </div>
            
            {history=="Transfer" &&<UserTable list={transferHistory}/>}
            {history=="Pay" &&<UserPayTable list={payHistory}/>}

        </div>
        
    )
}