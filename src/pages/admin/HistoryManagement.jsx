import { Button } from "react-bootstrap";
import { AdminHistoryManagementTable } from "../../components/admin/adminTable";

export function HistoryManagement() {
  const list = [
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
    {
      userName: "Martin James",
      userId: "980000",
      type: "Top Up",
      transactionId: "3334343",
      amount: "2345.50",
      time: "28 July 2023, 16:46",
      action: "success",
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#dfe6ee" }} className="historyContainer">
        <div
          style={{
            fontSize: "1.5rem",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>History</h4>
          <div style={{ display: "flex", fontSize: ".9rem" }}>
            <input
              type="text"
              width={100}
              placeholder="Transaction ID"
              style={{
                marginRight: "20px",
                height: "30px",
                width: "300px",
                paddingLeft: "5px",
              }}
            />
            <Button
              style={{
                backgroundColor: "#53449f",
                marginRight: "5px",
                height: "30px",
                alignItems: "center",
                padding: "0 10px",
              }}
            >
              Search
            </Button>
          </div>
        </div>

        <AdminHistoryManagementTable list={list} />
      </div>
    </>
  );
}
