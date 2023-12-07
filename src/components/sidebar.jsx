// Sidebar.js
import React, { useState } from "react";
import { Button, Offcanvas, Nav, Container, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./css/sidebar.css";
import { BiShoppingBag, BiTransfer } from "react-icons/bi";
import {
  MdPayment,
  MdHistory,
  MdOutlineHeadphones,
} from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";

import { FaRegUserCircle } from "react-icons/fa";


export const CommonSideBar=(props)=>{
  return(
    <div
    className="sidebar"
    style={{
      backgroundColor: "#ededed",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {!props.mobile &&<div className="logo">LOGO</div>}
    <ul className="list-unstyled">
      <li className="li-icons">
        <NavLink to="/">
          <FaRegUserCircle style={{ fontSize: "1.3rem"}} />
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
          <BiShoppingBag style={{fontSize:'1.3rem'}} />
          &nbsp;&nbsp;&nbsp;Buy</NavLink>
      </li>
      <li className="li-icons">
        <NavLink to="/pay">
          <MdPayment style={{fontSize:"1.3rem"}} />
          &nbsp;&nbsp;&nbsp; Pay</NavLink>
      </li>
      <li className="li-icons">
        <NavLink to="/request">Request</NavLink>
      </li>
      <li className="li-icons">
        <NavLink to="/history">
          <MdHistory style={{fontSize:'1.3rem'}} />
          &nbsp;&nbsp;&nbsp;History</NavLink>
      </li>

      <li className="li-icons">
        <NavLink to="/wallet">
          <IoWalletOutline style={{fontSize:"1.3rem"}} />
          &nbsp;&nbsp;&nbsp; Wallet</NavLink>
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
          <MdOutlineHeadphones style={{fontSize:"1.3rem"}} />
          &nbsp;&nbsp;&nbsp;Contact US</NavLink>
      </li>
      <li className="li-icons">
        <NavLink to="/logout">
          <SlLogout style={{fontSize:"1.3rem"}} />
          &nbsp;&nbsp;&nbsp;Log Out</NavLink>
      </li>
    </ul>
  </div>
  )
}

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
      >
        ☰
      </Button>

      {/* Sidebar (Visible on Mobile) */}
      <Offcanvas
        show={showSidebar}
        onHide={handleToggleSidebar}
        placement="start"
      >
        <Offcanvas.Header style={{backgroundColor:"#ededed",padding:'0px',paddingRight:'20px'}} closeButton>    <div className="logo">LOGO</div>
</Offcanvas.Header>
        <Offcanvas.Body style={{padding:'0px'}}>
          <CommonSideBar mobile={true}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export const SideBar = () => {
  return (
    <div style={{ height: "100vh" }} className="d-sm-none d-none d-md-block">
      <Col xl={3} md={4}>
       <CommonSideBar  />
      </Col>
    </div>
  );
};
