import {AdminBuyManagementTable} from '../../components/admin/adminTable'

import AxiosInstance from "../../axiosInstance";
import {useState,useEffect} from "react";
export function BuyManagement(){
  const [BuyHistory, setBuyHistory] = useState(null);
 const [updater,setUpdater]=useState(false) //for updating the values when approved or denied

  function toggleUpdater(){
    setUpdater(!updater)
  }
  useEffect(()=>{
    async function getBuyHistory(){
      const accessToken=localStorage.getItem('accessToken');
         try{
     const response=await AxiosInstance.get('buy/getBuyTransactionAdminHistory',{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
      const data=response.data.data.filter((datas)=>datas.status=='PROCESSING')
     setBuyHistory(data)
  }catch(error){
    console.log(error)
  }

    }
  getBuyHistory()
  },[updater])
    return(
        <>
        <div  style={{backgroundColor:'#dfe6ee'}}className="payContainer">
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{fontSize:'1.5rem',padding:'20px'}}>Buy</div>
          <div style={{fontSize:'1.4rem',padding:'25px'}}>Add New Product</div>
          </div>
            <AdminBuyManagementTable list={BuyHistory}/>
            

            </div>
        </>
    )
}
