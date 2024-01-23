import { useState, useEffect } from "react";
import { AdminPayManagementTable } from "../../components/admin/adminTable";

import AxiosInstance from "../../axiosInstance";

export function PayManagement() {
  const [payHistory, setPayHistory] = useState(null);
  const [updater,setUpdater]=useState(false) //for updating the values when approved or denied

  function toggleUpdater(){
    setUpdater(!updater)
  }
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
        const data=response.data.data.filter((datas)=>datas.status=='PROCESSING')

        setPayHistory(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPayHistory();
  }, [updater
  ]);

  return (
    <>
      <div style={{ backgroundColor: "#dfe6ee" }} className="payContainer">
        <div style={{ fontSize: "1.5rem", padding: "20px" }}>Pay</div>

        <AdminPayManagementTable toggleUpdater={toggleUpdater} list={payHistory} />
      </div>
    </>
  );
}
