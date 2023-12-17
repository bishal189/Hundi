import { Col } from "react-bootstrap";
import { HomeHeader } from "../../components/user/homeheader";
import { MobileSideBar, SideBar } from "../../components/user/sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AxiosInstance  from "../../axiosInstance";
export function UserLayout(props){
   const  navigate=useNavigate()
     useEffect(()=>{
        async function verify(){
         if (!localStorage.getItem('accessToken')){
           navigate('/userLogin')

          }//else{
        //   try{
        //       const authResponse=await AxiosInstance.get('/auth/verify_user')
        //       console.log(authResponse)
        //   }catch(error){
        //     navigate('/userLogin')
        //   }
        //  }
        }
      verify() 
      },[])
return(
    <>
    <div className="d-flex">
        <Col md={3} style={{backgroundColor:"#ededed"}}>
        <SideBar />
        <MobileSideBar />
    </Col>
    <Col md={9} sm={12}>
        <HomeHeader />
        {props.children}
    </Col>
    </div>
    </>
)
}
