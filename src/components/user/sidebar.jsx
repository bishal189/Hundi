// Sidebar.js
import React, { useState } from "react";
import { Button, Offcanvas, Nav, Container, Col ,Modal} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./css/sidebar.css";
import { BiShoppingBag, BiTransfer } from "react-icons/bi";
import { MdPayment, MdHistory, MdOutlineHeadphones } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import LogoutIcon from '../../assets/Logout.svg'
import { useEffect } from "react";
export const CommonSideBar = (props) => {
  const navigate=useNavigate()
  const [modal,setModal]=useState(false)
  function Logout(){

     navigate('/userLogin')
  }
  function handleClose(){
    setModal(false)
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
          <NavLink to="/dashboard
          ">
            <FaRegUserCircle style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Dashboard
          </NavLink>
        </li>

        <li className="li-icons">
          <NavLink to="/transfer">
            <BiTransfer style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Transfer
          </NavLink>
        </li>

        <li className="li-icons">
          <NavLink to="/buy">
            <BiShoppingBag style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Buy
          </NavLink>
        </li>
        <li className="li-icons">
          <NavLink to="/pay">
            <MdPayment style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp; Pay
          </NavLink>
        </li>
        <li className="li-icons">
          <NavLink to="/request">Request</NavLink>
        </li>
        <li className="li-icons">
          <NavLink to="/userHistory">
            <MdHistory style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;History
          </NavLink>
        </li>

        <li className="li-icons">
          <NavLink to="/wallet">
            <IoWalletOutline style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp; Wallet
          </NavLink>
        </li>
        <li className="li-icons">
          <NavLink className="inner" to="/send">
            Send
          </NavLink>
        </li>
        <li className="li-icons">
          <NavLink className="inner" to="/withdraw">
            Withdraw
          </NavLink>
        </li>
        <li className="li-icons">
          <NavLink className="inner" to="/topup">
            Top Up
          </NavLink>
        </li>
        <li className="li-icons">
          <NavLink to="/contact">
            <MdOutlineHeadphones style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Contact US
          </NavLink>
        </li>
        <li onClick={()=>setModal(true)} className="li-icons">
          <NavLink style={{ pointerEvents: 'none' }} to="/logout" >
            <SlLogout style={{ fontSize: "1.3rem" }} />
            &nbsp;&nbsp;&nbsp;Log Out
          </NavLink>
        </li>
      </ul>
    </div>
    </>
  );
};

export const MobileSideBar = () => {
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
          <CommonSideBar mobile={true} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export const SideBar = () => {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#ededed" }}
      className=" d-none d-md-block"
    >
      <CommonSideBar />
    </div>
  );
};
