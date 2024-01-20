import {AdminBuyManagementTable} from '../../components/admin/adminTable'
export function BuyManagement(){
    const list=[
    {buyerName:"Martin James",
    buyerId:'980000',
    productName:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    }, 
    {buyerName:"Martin James",
    buyerId:'980000',
    productName:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    }, 

    {buyerName:"Martin James",
    buyerId:'980000',
    productName:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    }, 
    {buyerName:"Martin James",
    buyerId:'980000',
    productName:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    }, 
    {buyerName:"Martin James",
    buyerId:'980000',
    productName:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    }, 
    {buyerName:"Martin James",
    buyerId:'980000',
    productName:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    }, 
    {buyerName:"Martin James",
    buyerId:'980000',
    productName:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    }, 
    ]
    return(
        <>
        <div  style={{backgroundColor:'#dfe6ee'}}className="payContainer">
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{fontSize:'1.5rem',padding:'20px'}}>Buy</div>
          <div style={{fontSize:'1.4rem',padding:'25px'}}>Add New Product</div>
          </div>
            <AdminBuyManagementTable list={list}/>
            </div>
        </>
    )
}
