import { useState, useEffect } from "react";
import { AdminPayManagementTable } from "../../components/admin/adminTable";

import AxiosInstance from "../../axiosInstance";

export function PayManagement() {
  const [payHistory, setPayHistory] = useState(null);

  useEffect(() => {
    async function getPayHistory() {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await AxiosInstance.get(
          "transaction/getPayTransactionAdminHistory",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response);
        setPayHistory(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPayHistory();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#dfe6ee" }} className="payContainer">
        <div style={{ fontSize: "1.5rem", padding: "20px" }}>Pay</div>

        <AdminPayManagementTable list={payHistory} />
      </div>
    </>
  );
}
