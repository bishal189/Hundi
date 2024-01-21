import {useState,useEffect} from "react";
import { AdminTransferManagementTable } from "../../components/admin/adminTable";

import AxiosInstance from "../../axiosInstance";

const TransferManagement = () => {

  const [transferHistory, setTransferHistory] = useState(null);

  useEffect(()=>{
    async function getTransferHistory(){
      const accessToken=localStorage.getItem('accessToken');
         try{
     const response=await AxiosInstance.get('transaction/getTransferTransactionAdminHistory',{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
     setTransferHistory(response.data.data)
  }catch(error){
    console.log(error)
  }

    }
  getTransferHistory()
  },[])

  return (
    <>
      <div style={{ backgroundColor: "#dfe6ee" }} className="transferContainer">
        <div
          style={{
            fontSize: "1.5rem",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>Transfer</h4>
          <h4>Add new bank</h4>
          <h4>Change currency rate</h4>
        </div>

        {transferHistory && <AdminTransferManagementTable list={transferHistory} /> }
      </div>
    </>
  );
};

export default TransferManagement;
