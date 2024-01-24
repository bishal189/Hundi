import { AdminTransferManagementTable } from "../../components/admin/adminTable";

import {useState,useEffect} from "react";
import AxiosInstance from "../../axiosInstance";

const TransferManagement = () => {

  const [transferHistory, setTransferHistory] = useState(null);
const [updater,setUpdater]=useState(false) //for updating the values when approved or denied

  function toggleUpdater(){
    setUpdater(!updater)
  }
  useEffect(()=>{
    async function getTransferHistory(){
      const accessToken=localStorage.getItem('accessToken');
         try{
     const response=await AxiosInstance.get('transaction/getTransferTransactionAdminHistory',{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
     const data=response.data.data.filter((datas)=>datas.status=='PROCESSING')

     setTransferHistory(data)
  }catch(error){
    console.log(error)
  }

    }
  getTransferHistory()
  },[updater])

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

        {transferHistory && <AdminTransferManagementTable toggleUpdater={toggleUpdater} list={transferHistory} /> }
      </div>
    </>
  );
};

export default TransferManagement;
