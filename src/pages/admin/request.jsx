import {AdminRequestTable} from '../../components/admin/adminTable'
import {useState,useEffect} from "react";
import AxiosInstance from "../../axiosInstance";

export function RequestManagement(){

const [requestHistory, setRequestHistory] = useState(null);
const [updater,setUpdater]=useState(false) //for updating the values when approved or denied

  function toggleUpdater(){
    setUpdater(!updater)
  }

  useEffect(()=>{
    async function getRequestHistory(){
      const accessToken=localStorage.getItem('accessToken');
         try{
     const response=await AxiosInstance.get('request/getRequestTransactionHistory',{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
      const data=response.data.data.filter((datas)=>datas.status=='PENDING')
     setRequestHistory(data)
  }catch(error){
    console.log(error)
  }

    }
  getRequestHistory()
  },[updater])
    return(
        <>
        <div  style={{backgroundColor:'#dfe6ee'}}className="payContainer">
        <div style={{fontSize:'1.5rem',padding:'20px'}}>Request</div>

            <AdminRequestTable toggleUpdater={toggleUpdater} list={requestHistory}/>
            </div>
        </>
    )
}
