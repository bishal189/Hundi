import React from "react";
import { AdminTransferManagementTable } from "../../components/admin/adminTable";

const TransferManagement = () => {
  const list = [
    {
      senderName: "Martin James",
      senderId: "980000",
      recieverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      senderAgent: "max tom",
      recieverAgent: "mike green",
      status: "pending",
    },
    {
      senderName: "Martin James",
      senderId: "980000",
      reciverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      senderAgent: "max tom",
      recieverAgent: "mike green",
      status: "pending",
    },
    {
      senderName: "Martin James",
      senderId: "980000",
      recieverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      senderAgent: "max tom",
      recieverAgent: "mike green",
      status: "pending",
    },
    {
      senderName: "Martin James",
      senderId: "980000",
      recieverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      senderAgent: "max tom",
      recieverAgent: "mike green",
      status: "pending",
    },
    {
      senderName: "Martin James",
      senderId: "980000",
      recieverName: "Aep texas",
      recieverId: "3334343",
      amount: "2345.50",
      senderAgent: "max tom",
      recieverAgent: "mike green",
      status: "pending",
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#dfe6ee" }} className="payContainer">
        <div
          style={{
            fontSize: "1.5rem",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>Transfer</h4>
          <h4>Add new bank</h4>
          <h4>Change currency rate</h4>
        </div>

        <AdminTransferManagementTable list={list} />
      </div>
    </>
  );
};

export default TransferManagement;
