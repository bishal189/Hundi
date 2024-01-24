import {AdminBuyManagementTable} from '../../components/admin/adminTable'

import AxiosInstance from "../../axiosInstance";
import {useState,useEffect} from "react";
export function BuyManagement(){
  const [BuyHistory, setBuyHistory] = useState(null);

  useEffect(()=>{
    async function getBuyHistory(){
      const accessToken=localStorage.getItem('accessToken');
         try{
     const response=await AxiosInstance.get('buy/getBuyTransactionAdminHistory',{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    })
     console.log(response)
     setBuyHistory(response.data.data)
  }catch(error){
    console.log(error)
  }

    }
  getBuyHistory()
  },[])
    return(
        <>
        <div  style={{backgroundColor:'#dfe6ee'}}className="payContainer">
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{fontSize:'1.5rem',padding:'20px'}}>Buy</div>
          <div style={{fontSize:'1.4rem',padding:'25px'}}>Add New Product</div>
          </div>
            <AdminBuyManagementTable list={BuyHistory}/>
            <Button variant="primary">Search</Button>

            </div>
        </>
    )
}
