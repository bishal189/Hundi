import { Col } from "react-bootstrap";
import { HomeHeader } from "../../components/user/homeheader";
import { MobileSideBar, SideBar } from "../../components/user/sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function UserLayout(props){
   const  navigate=useNavigate()
     useEffect(()=>{
         if (!localStorage.getItem('accessToken')){
           navigate('/userLogin')
         }
       })
return(
    <>
    <div className="d-flex">
        <Col md={3} style={{backgroundColor:"#ededed"}}>
        <SideBar />
        <MobileSideBar />
    </Col>
    <Col md={9}>
        <HomeHeader />
        {props.children}
    </Col>
    </div>
    </>
)
}
