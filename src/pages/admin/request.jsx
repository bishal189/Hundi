import {AdminRequestTable} from '../../components/admin/adminTable'
import {useState,useEffect} from "react";
import AxiosInstance from "../../axiosInstance";

export function RequestManagement(){

const [requestHistory, setRequestHistory] = useState(null);

  useEffect(()=>{
    async function getTransferHistory(){
      const accessToken=localStorage.getItem('accessToken');
         try{
     const response=await AxiosInstance.get('request/getRequestTransactionHistory',{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
     console.log(response)
     setRequestHistory(response.data.data)
  }catch(error){
    console.log(error)
  }

    }
  getTransferHistory()
  },[])
    return(
        <>
        <div  style={{backgroundColor:'#dfe6ee'}}className="payContainer">
        <div style={{fontSize:'1.5rem',padding:'20px'}}>Request</div>

            <AdminRequestTable list={requestHistory}/>
            </div>
        </>
    )
}
