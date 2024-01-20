// Sidebar.js
import React, { useState } from "react";
import { Button, Offcanvas, Modal} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./css/sidebar.css";
import { BiShoppingBag, BiTransfer } from "react-icons/bi";
import { MdPayment, MdHistory, MdOutlineHeadphones } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import LogoutIcon from '../../assets/Logout.svg'
import axiosInstance from '../../axiosInstance'
import { IoMdArrowDropdown } from "react-icons/io";


export const AdminCommonSideBar = (props) => {
  const navigate=useNavigate()
  const [modal,setModal]=useState(false)

   async function Logout(){
    const accessToken=localStorage.getItem('accessToken')

   try{
    const logoutResponse=await axiosInstance.get('/auth/logout/',{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
   })
   localStorage.clear()
     navigate('/userLogin')
    }catch(error){
console.log(error)
    }

  }
  function handleClose(){
    setModal(false)
  }


const [customerShow,setCustomerShow]=useState(false)

function customerShowToggler(){
    setCustomerShow((prev)=>!prev)
}
  return (
    <>
   {modal && <Modal show={modal} onHide={handleClose}   centered>
    <Modal.Body>
      <div style={{display:'flex'}}>
        <img style={{width:'4rem'}} src={LogoutIcon} />
        <div style={{fontSize:'1rem' ,marginLeft:'20px',marginTop:'20px'}}>
          <h4>Your Session is about to Expire</h4>
          <br />
          <h5>You will be Logged out in a second</h5>
          <h5>Are You Sure you want to Logout?</h5>
          </div>
      </div>
     </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={Logout}>
        OK
      </Button>
    </Modal.Footer>
  </Modal>}



    <div
      className="sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!props.mobile && <div className="logo">LOGO</div>}
      <ul className="list-unstyled">
        <li className="li-icons">
          <NavLink to="/
          " onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <FaRegUserCircle style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Dashboard
          </NavLink>
        </li>

        <li className="li-icons">
          <a href="#"  onClick={()=>customerShowToggler()}>
            <BiTransfer style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Customers
            <IoMdArrowDropdown style={{fontSize:'2rem'}}/>
          </a>
        </li>

        {customerShow&& <>
            <li className="li-icons li-icons-inner">
          <NavLink to="/admin/transferManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <BiShoppingBag style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;All Customers
          </NavLink>
        </li>
          <li className="li-icons li-icons-inner">
          <NavLink to="/admin/transferManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <BiShoppingBag style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Active Customers
          </NavLink>
        </li>
          <li className="li-icons li-icons-inner">
          <NavLink to="/admin/transferManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <BiShoppingBag style ={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Disabled Customer
          </NavLink>
        </li>
          <li className="li-icons li-icons-inner">
          <NavLink to="/admin/transferManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <BiShoppingBag style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp; Notifications
          </NavLink>
        </li>
          <li className="li-icons li-icons-inner">
          <NavLink to="/admin/transferManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <BiShoppingBag style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Send Email To All
          </NavLink>
        </li>

        </>}
       {/*End of Customer show */}

        <li className="li-icons">
          <NavLink to="/admin/transferManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <BiShoppingBag style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Transfer Management
          </NavLink>
        </li>
        <li className="li-icons" >
          <NavLink to="/admin/buyManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <MdPayment style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp; Buy Management
          </NavLink>
        </li>
        <li className="li-icons">
          <NavLink to="/admin/payManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>Pay Management</NavLink>
        </li>
                <li className="li-icons">
          <NavLink to="/admin/requestManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <MdHistory style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Request Management
          </NavLink>
        </li>
        <li className="li-icons">
          <NavLink to="/admin/historyManagement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <MdHistory style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;History Management
          </NavLink>
        </li>

        <li className="li-icons">
          <NavLink to="/admin/walletMangement" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <IoWalletOutline style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp; Wallet Management
          </NavLink>
        </li>
              <li className="li-icons">
          <NavLink to="/admin/kycSettings" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <IoWalletOutline style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp; Kyc Settings
          </NavLink>
        </li>
              <li className="li-icons">
          <NavLink to="/admin/settings" onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}}>
            <IoWalletOutline style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp; Settings
          </NavLink>
        </li>



        <li className="li-icons">
          <NavLink to="/admin/contact">
            <MdOutlineHeadphones style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Contact US
          </NavLink>
        </li>
        <li onClick={()=>setModal(true)} className="li-icons">
          <NavLink onClick={()=>{props.setShowSidebar && props.setShowSidebar(false)}} style={{ pointerEvents: 'none' }} to="/admin/logout" >
            <SlLogout style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Log Out
          </NavLink>
        </li>
      </ul>
    </div>
    </>
  );
};

export const AdminMobileSideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* Hamburger Icon (Visible on Mobile) */}
      <Button
        variant="outline-dark"
        className="d-md-none"
        onClick={handleToggleSidebar}
        style={{fontSize:'1.5rem',position:'absolute',top:'20px',left:'25px'}}
      >
        ☰
      </Button>

      {/* Sidebar (Visible on Mobile) */}
      <Offcanvas
        show={showSidebar}
        onHide={handleToggleSidebar}
        placement="start"
      >
        <Offcanvas.Header
          style={{
            backgroundColor: "#ededed",
            padding: "0px",
            paddingRight: "20px",
          }}
          closeButton
        >
          {" "}
          <div className="logo">LOGO</div>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: "0px" }}>
          <AdminCommonSideBar mobile={true} setShowSidebar={setShowSidebar} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export const AdminSideBar = () => {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#53449f" }}
      className=" d-none d-md-block"
    >
      <AdminCommonSideBar />
    </div>
  );
};
