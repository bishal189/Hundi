import {AdminPayManagementTable} from '../../components/admin/adminTable'
export function PayManagement(){
    const list=[
    {userName:"Martin James",
    userId:'980000',
    payTo:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   {userName:"Martin James",
    userId:'980000',
    payTo:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   {userName:"Martin James",
    userId:'980000',
    payTo:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   {userName:"Martin James",
    userId:'980000',
    payTo:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   {userName:"Martin James",
    userId:'980000',
    payTo:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   {userName:"Martin James",
    userId:'980000',
    payTo:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   {userName:"Martin James",
    userId:'980000',
    payTo:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   {userName:"Martin James",
    userId:'980000',
    payTo:"Aep texas",
    transactionId:'3334343',
    amount:'2345.50',
    status:'pending'
    },
    ]
    return(
        <>
        <div  style={{backgroundColor:'#dfe6ee'}}className="payContainer">
        <div style={{fontSize:'1.5rem',padding:'20px'}}>Pay</div>

            <AdminPayManagementTable list={list}/>
            </div>
        </>
    )
}
