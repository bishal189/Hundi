import React from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiEdit, CiMail } from "react-icons/ci";

export const AgentClientListTable = (props) => {
  const colorArr = ["#ededed", "white"];
  return (
    <Table
      bordered
      hover
      style={{
        marginLeft: "20px",
        fontSize: ".90rem",
        width: "95%",
        backgroundColor: "transparent",
      }}
    >
      <thead>
        <tr style={{ textAlign: "center" }}>
          <td style={{ backgroundColor: "transparent" }}>Name</td>
          <td style={{ backgroundColor: "transparent" }}>User Id</td>
          <td style={{ backgroundColor: "transparent" }}>Email Id</td>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            const date = new Date(l.created_at);
            const formattedDate = date.toLocaleDateString();
            const formattedTime = date.toLocaleTimeString();
            const formattedDateTime = `${formattedDate} ${formattedTime}`;
            console.log(formattedDateTime);
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.Name}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.UserId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.EmailId}{" "}
                </td>
              </tr>
            );
          })}

        {/* Add more cells as needed */}

        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};


const SenderAgentTable = ({ list }) => {
  const colorArr = ["#ededed", "white"];
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState("red");
  const [error, setError] = useState("");

  const toggleUpdater = () => {
    // Define this function as needed
  };

  const approvePay = async (transactId) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await AxiosInstance.get(`transaction/approvePayTransactionAdmin/${transactId}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setError(response.data.message);
      setColor("green");
      setModal(true);
      toggleUpdater(); // Assuming this function is defined
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.error || "An error occurred");
      setColor("red");
      setModal(true);
    }
  };

  const denyPay = async (transactId) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await AxiosInstance.get(`transaction/denyPayTransactionAdmin/${transactId}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setError(response.data.message);
      setColor("green");
      setModal(true);
      toggleUpdater(); // Assuming this function is defined
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.error || "An error occurred");
      setColor("red");
      setModal(true);
    }
  };

  return (
    <>
      {/* Render your modal component here if needed */}
      <Table
        bordered
        hover
        style={{
          marginLeft: "20px",
          fontSize: ".90rem",
          width: "95%",
          backgroundColor: "transparent",
        }}
      >
        <thead>
          <tr>
            <th style={{ backgroundColor: "transparent" }}>Sender Name</th>
            <th style={{ backgroundColor: "transparent" }}>Sender Id</th>
            <th style={{ backgroundColor: "transparent" }}>Reciever Name</th>
            <th style={{ backgroundColor: "transparent" }}>Reciever Id</th>
            <th style={{ backgroundColor: "transparent" }}>Amount</th>
            <th style={{ backgroundColor: "transparent" }}>Sender Agent</th>
            <th style={{ backgroundColor: "transparent" }}>Reciever Agent</th>
            <th style={{ backgroundColor: "transparent" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {list.map((l, index) => (
            <tr key={index} style={{ backgroundColor: colorArr[index % 2], border: "none" }}>
              <td>{l.SenderName}</td>
              <td>{l.SenderId}</td>
              <td>{l.RecieverName}</td>
              <td>{l.RecieverId}</td>
              <td>${l.Amount} Usd</td>
              <td>{l.SenderAgent}</td>
              <td>{l.RecieverAgent}</td>
              <td>{l.Status}</td>
              <td>
                {l.status === "PROCESSING" ? (
                  <div style={{ display: "flex" }}>
                    <Button style={{ backgroundColor: "#53449f", marginRight: "5px" }} onClick={() => approvePay(l.id)}>
                      Accept
                    </Button>
                    <Button onClick={() => denyPay(l.id)} style={{ backgroundColor: "#fb896b" }}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button style={{ backgroundColor: "#53449f" }}>Already Complete</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SenderAgentTable;