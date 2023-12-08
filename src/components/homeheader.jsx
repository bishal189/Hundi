
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";

export function HomeHeader(){

    return(
    <div style={{backgroundColor:'#f7f9fb',display:'flex',justifyContent:'flex-end'}}>
        <div style={{padding:"20px 30px 10px 0px"}}>
    <MdOutlineNotificationsActive style={{fontSize:"2.2rem"}}/>
    </div>

    <div style={{display:"flex",flexDirection:"column",padding:'20px 90px 10px 0px'}} >
    <FaRegUserCircle  style={{fontSize:"2.2rem"}}/>
   <span style={{marginTop:"0.1rem",marginLeft:'-7px'}}> MY Profile   </span>
    </div>
</div>
    )
}