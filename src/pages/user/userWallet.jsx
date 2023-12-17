import  Send from '../../assets/Send.svg' 
import Withdraw from '../../assets/userWithdraw.svg'
import Topup from '../../assets/userTopup.svg'
import {Link} from 'react-router-dom'
export function UserWallet(){
    return(
        <div style={{ backgroundColor: "#dfe6ee", height: "100vh" }}>
            <p style={{color:"#2e8a99",paddingTop:'40px',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>My Wallet</p>

            <div  style={{paddingLeft:'3rem'}}>
                <p style={{fontSize:'1rem',color:'#575757',marginBottom:'0px'}}>Balance</p>
                <p style={{fontSize:'2rem',color:'#575757'}}>$12500</p>
            </div>
            <p style={{paddingLeft:'3rem',paddingTop:'2rem',fontSize:'1rem'}}>Choose An Option:</p>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <Link to="/userSend"><img src={Send} /></Link>
               <Link to ="/userWithdraw"> <img src={Withdraw} /></Link>
               <Link to ="/userTopup"><img src={Topup} /></Link>
            </div>

            </div>
    )
}