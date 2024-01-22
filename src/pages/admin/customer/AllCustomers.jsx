import React from "react";
import { Button } from "react-bootstrap";
import { AdminAllCustomersTable } from "../../../components/admin/adminTable";

const AllCustomers = () => {
  const list = [
    {
      avatar: "http://localhost:44318/resources/userImg",
      name: "Martin James",
      role: "User",
      userId: "980000",
      emaiId: "myname@gmail.com",
      balance: "4356",
      profit: "8",
      kyc: "unverified",
      status: "Action",
    },
    {
      avatar: "http://localhost:44318/resources/userImg",
      name: "Martin James",
      role: "User",
      userId: "980000",
      emaiId: "myname@gmail.com",
      balance: "4356",
      profit: "8",
      kyc: "unverified",
      status: "Action",
    },
    {
      avatar: "http://localhost:44318/resources/userImg",
      name: "Martin James",
      role: "User",
      userId: "980000",
      emaiId: "myname@gmail.com",
      balance: "4356",
      profit: "8",
      kyc: "unverified",
      status: "Action",
    },
    {
      avatar: "http://localhost:44318/resources/userImg",
      name: "Martin James",
      role: "User",
      userId: "980000",
      emaiId: "myname@gmail.com",
      balance: "4356",
      profit: "8",
      kyc: "unverified",
      status: "Action",
    },
    {
      avatar: "http://localhost:44318/resources/userImg",
      name: "Martin James",
      role: "User",
      userId: "980000",
      emaiId: "myname@gmail.com",
      balance: "4356",
      profit: "8",
      kyc: "unverified",
      status: "Action",
    },
    {
      avatar: "http://localhost:44318/resources/userImg",
      name: "Martin James",
      role: "User",
      userId: "980000",
      emaiId: "myname@gmail.com",
      balance: "4356",
      profit: "8",
      kyc: "unverified",
      status: "Action",
    },
  ];
  return (
    <div style={{ backgroundColor: "#dfe6ee" }} className="transferContainer">
      <div
        style={{
          fontSize: "1.5rem",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          background: "#E7E7F7",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <input
            type="text"
            placeholder="Email/User ID"
            style={{
              height: "40px",
              width: "270px",
              paddingLeft: "4px",
              background: "#EDEDED",
              marginRight: "20px",
              fontSize: ".9rem",
              border: "none",
            }}
          />
          <Button
            style={{
              background: "#53449F",
            }}
          >
            Search
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <input
            type="text"
            placeholder="Remove User(Enter user Id or Email ID)"
            style={{
              height: "40px",
              width: "270px",
              paddingLeft: "4px",
              marginRight: "20px",
              fontSize: ".9rem",
              border: "none",
              background: "#EDEDED",
            }}
          />
          <Button
            style={{
              background: "#53449F",
            }}
          >
            Remove
          </Button>
        </div>
      </div>
      <AdminAllCustomersTable list={list} />
    </div>
  );
};

export default AllCustomers;
