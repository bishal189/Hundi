import React from "react";
import { Button } from "react-bootstrap";
import { AdminAllCustomersTable } from "../../../components/admin/adminTable";
import AxiosInstance from '../../../axiosInstance'
import {useEffect,useState} from 'react'
const AllCustomers = () => {
  const [customerList,setCustomerList]=useState([])

  useEffect(()=>{
   async function getCustomerList(){
     try{
     const accessToken=localStorage.getItem('accessToken')

    const response=await AxiosInstance.get('auth/getallusers',{
      headers:{
        Authorization:`Bearer ${accessToken}`
      }
    })
   console.log(response)
   setCustomerList(response.data.data)

    }catch(error){
      console.log(error)
      if (error.response.data){
        alert(error.response.data.error)
      }
    }
  }
  getCustomerList()
  },[])
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
      <AdminAllCustomersTable list={customerList} />
    </div>
  );
};

export default AllCustomers;
