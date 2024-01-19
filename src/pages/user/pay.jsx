import { Col, Row } from "react-bootstrap";
import group1 from "../../assets/group1.svg";
import group2 from "../../assets/group2.svg";
import group3 from "../../assets/group3.svg";
import group4 from "../../assets/group4.svg";
import group5 from "../../assets/group5.svg";
import group6 from "../../assets/group6.svg";
import group7 from "../../assets/group7.svg";
import group8 from "../../assets/group8.svg";
import group9 from "../../assets/group9.svg";
import axiosInstance from "../../axiosInstance";
import { useState, useEffect } from "react";
import { UserPayTable } from "../../components/user/userTable";

import { Link } from "react-router-dom";

function Icons(props) {
  return (
    <Col>
      <div>
        <Link to={`/user/pay/${props.title}`}>
          <img style={{ cursor: "pointer" }} src={props.imgSrc} />
        </Link>
        <p
          style={{ marginLeft: "30px", marginTop: "10px", fontSize: ".80rem" }}
        >
          {props.title}
        </p>
      </div>
    </Col>
  );
}

export function UserPay() {
  const [transactionHistory, setTransactionHistory] = useState([]);
  useEffect(() => {
    async function history() {
      const accessToken = localStorage.getItem("accessToken");

      const historyTransact = await axiosInstance.get(
        "/transaction/getPayTransactionHistory/",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setTransactionHistory(historyTransact.data.data);
    }
    history();
  }, []);
  return (
    <>
      <div
        style={{ backgroundColor: "#dfe6ee", padding: "30px 100px 0px 100px" }}
      >
        <Row style={{ marginTop: "50px", display: "flex" }}>
          <Icons imgSrc={group1} title="Electricity" />
          <Icons imgSrc={group2} title="Internet" />
          <Icons imgSrc={group3} title="Recharge" />
          <Icons imgSrc={group4} title="Water" />
          <Icons imgSrc={group5} title="AirTicket " />
        </Row>
        <Row xs={12} style={{ marginTop: "20px", display: "flex" }}>
          <Icons imgSrc={group6} title="Television" />
          <Icons imgSrc={group7} title="Gas" />
          <Icons imgSrc={group8} title="Insurance" />
          <Icons imgSrc={group9} title="Add Others" />
        </Row>
      </div>
      <div style={{ backgroundColor: "#dfe6ee",marginTop:'20px' }}>
      <p style={{fontSize:'1.6rem',color:'#68696a'}}>Recent Transaction</p>
        <UserPayTable list={transactionHistory} />
      </div>
    </>
  );
}
