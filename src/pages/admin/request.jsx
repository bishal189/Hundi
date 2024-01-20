import {AdminRequestTable} from '../../components/admin/adminTable'
export function Requestmanagement(){

    // <th style={{backgroundColor:'transparent'}}>Request by</th>
    // <th style={{backgroundColor:'transparent'}}>Request by Id</th>
    // <th style={{backgroundColor:'transparent'}}>Request to </th>
    // <th style={{backgroundColor:'transparent'}}>Request to Id</th>
    // <th style={{backgroundColor:'transparent'}}>Amount</th>
    // <th style={{backgroundColor:'transparent'}}>Status</th>
    //   <th style={{backgroundColor:'transparent'}}>Action</th>
   
    const list=[
    {
    RequestBy:"Martin James",
    RequestById:'980000',
    RequestTo:"Aep texas",
    RequestToId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   
    {
    RequestBy:"Martin James",
    RequestById:'980000',
    RequestTo:"Aep texas",
    RequestToId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   
    {
    RequestBy:"Martin James",
    RequestById:'980000',
    RequestTo:"Aep texas",
    RequestToId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   
    {
    RequestBy:"Martin James",
    RequestById:'980000',
    RequestTo:"Aep texas",
    RequestToId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   
    {
    RequestBy:"Martin James",
    RequestById:'980000',
    RequestTo:"Aep texas",
    RequestToId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   
    {
    RequestBy:"Martin James",
    RequestById:'980000',
    RequestTo:"Aep texas",
    RequestToId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   
    {
    RequestBy:"Martin James",
    RequestById:'980000',
    RequestTo:"Aep texas",
    RequestToId:'3334343',
    amount:'2345.50',
    status:'pending'
    },   
    ]
    return(
        <>
        <div  style={{backgroundColor:'#dfe6ee'}}className="payContainer">
        <div style={{fontSize:'1.5rem',padding:'20px'}}>Request</div>

            <AdminRequestTable list={list}/>
            </div>
        </>
    )
}
