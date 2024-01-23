import React from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const AdminPayManagementTable = (props) => {
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
        <tr>
          <th style={{ backgroundColor: "transparent" }}>UserName</th>
          <th style={{ backgroundColor: "transparent" }}>UserId</th>
          <th style={{ backgroundColor: "transparent" }}>PayTo</th>
          <th style={{ backgroundColor: "transparent" }}>TransactionId</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Status</th>
          <th style={{ backgroundColor: "transparent" }}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.userName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.userId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.payTo}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.transactionId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{ backgroundColor: "#53449f", marginRight: "5px" }}
                    >
                      Accept
                    </Button>
                    <Button style={{ backgroundColor: "#fb896b" }}>
                      Cancel
                    </Button>
                  </div>
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

export const AdminBuyManagementTable = (props) => {
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
        <tr>
          <th style={{ backgroundColor: "transparent" }}>Buyer Name</th>
          <th style={{ backgroundColor: "transparent" }}>Buyer Id</th>
          <th style={{ backgroundColor: "transparent" }}>Product Name</th>
          <th style={{ backgroundColor: "transparent" }}>TransactionId</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Status</th>
          <th style={{ backgroundColor: "transparent" }}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.buyerName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.buyerId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.productName}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.transactionId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{ backgroundColor: "#53449f", marginRight: "5px" }}
                    >
                      Accept
                    </Button>
                    <Button style={{ backgroundColor: "#fb896b" }}>
                      Cancel
                    </Button>
                  </div>
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

export const AdminTransferManagementTable = (props) => {
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
        <tr>
          <th style={{ backgroundColor: "transparent" }}>Sender name</th>
          <th style={{ backgroundColor: "transparent" }}>Sender id</th>
          <th style={{ backgroundColor: "transparent" }}>Reciever name</th>
          <th style={{ backgroundColor: "transparent" }}>Reciever id</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Sender agent</th>
          <th style={{ backgroundColor: "transparent" }}>Reciever agent</th>
          <th style={{ backgroundColor: "transparent" }}>Status</th>
          <th style={{ backgroundColor: "transparent" }}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.senderName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.senderId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.recieverName}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.recieverId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.senderAgent}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.recieverAgent}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{ backgroundColor: "#53449f", marginRight: "5px" }}
                    >
                      Accept
                    </Button>
                    <Button style={{ backgroundColor: "#fb896b" }}>
                      Cancel
                    </Button>
                  </div>
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

export const AdminHistoryManagementTable = (props) => {
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
        <tr>
          <th style={{ backgroundColor: "transparent" }}>Username</th>
          <th style={{ backgroundColor: "transparent" }}>User ID</th>
          <th style={{ backgroundColor: "transparent" }}>Type</th>
          <th style={{ backgroundColor: "transparent" }}>TransactionId</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Time</th>
          <th style={{ backgroundColor: "transparent" }}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.userName}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.userId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.type}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.transactionId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.time}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                    color: "green",
                  }}
                >
                  {l.action}
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

export const AdminWalletManagementTable = (props) => {
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
      <>
        {props.buttonValue == "send" ? (
          <>
            <thead>
              <tr>
                <th style={{ backgroundColor: "transparent" }}>Sender Name</th>
                <th style={{ backgroundColor: "transparent" }}>Sender ID</th>
                <th style={{ backgroundColor: "transparent" }}>
                  Recievier Name
                </th>
                <th style={{ backgroundColor: "transparent" }}>Recievier Id</th>
                <th style={{ backgroundColor: "transparent" }}>Amount</th>
                <th style={{ backgroundColor: "transparent" }}>Status</th>
                <th style={{ backgroundColor: "transparent" }}>Action</th>

                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {props.list &&
                props.list.map((l, index) => {
                  return (
                    <tr key={index}>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.senderName}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.senderId}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.recieverName}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.recieverId}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        ${l.amount} Usd
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.status}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                          color: "green",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <Button
                            style={{
                              backgroundColor: "#53449f",
                              marginRight: "5px",
                            }}
                          >
                            Accept
                          </Button>
                          <Button style={{ backgroundColor: "#fb896b" }}>
                            Cancel
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

              {/* Add more cells as needed */}

              {/* Add more rows as needed */}
            </tbody>
          </>
        ) : (
          <>
            <thead>
              <tr>
                <th style={{ backgroundColor: "transparent" }}>User Name</th>
                <th style={{ backgroundColor: "transparent" }}>User ID</th>
                <th style={{ backgroundColor: "transparent" }}>Account no</th>
                <th style={{ backgroundColor: "transparent" }}>
                  Transaction Id
                </th>
                <th style={{ backgroundColor: "transparent" }}>Amount</th>
                <th style={{ backgroundColor: "transparent" }}>Status</th>
                <th style={{ backgroundColor: "transparent" }}>Action</th>

                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {props.list &&
                props.list.map((l, index) => {
                  return (
                    <tr key={index}>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.userName}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.userId}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.accountNo}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.transactionId}{" "}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        ${l.amount} Usd
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                        }}
                      >
                        {l.status}
                      </td>
                      <td
                        style={{
                          backgroundColor: colorArr[index % 2],
                          border: "none",
                          color: "green",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <Button
                            style={{
                              backgroundColor: "#53449f",
                              marginRight: "5px",
                            }}
                          >
                            Accept
                          </Button>
                          <Button style={{ backgroundColor: "#fb896b" }}>
                            Cancel
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

              {/* Add more cells as needed */}

              {/* Add more rows as needed */}
            </tbody>
          </>
        )}
      </>
    </Table>
  );
};
export const AdminRequestTable = (props) => {
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
        <tr>
          <th style={{ backgroundColor: "transparent" }}>Request by</th>
          <th style={{ backgroundColor: "transparent" }}>Request by Id</th>
          <th style={{ backgroundColor: "transparent" }}>Request to </th>
          <th style={{ backgroundColor: "transparent" }}>Request to Id</th>
          <th style={{ backgroundColor: "transparent" }}>Amount</th>
          <th style={{ backgroundColor: "transparent" }}>Status</th>
          <th style={{ backgroundColor: "transparent" }}>Action</th>

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.RequestBy}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.RequestById}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.RequestTo}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.RequestToId}{" "}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  ${l.amount} Usd
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  {l.status}
                </td>
                <td
                  style={{
                    backgroundColor: colorArr[index % 2],
                    border: "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{ backgroundColor: "#53449f", marginRight: "5px" }}
                    >
                      Accept
                    </Button>
                    <Button style={{ backgroundColor: "#fb896b" }}>
                      Cancel
                    </Button>
                  </div>
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



import { useState, useEffect } from "react";

const SettingsAdmin = ({ imagePreview }) => {
  const [localImagePreview, setLocalImagePreview] = useState(null);

  useEffect(() => {
    // Update localImagePreview when the imagePreview prop changes
    setLocalImagePreview(imagePreview);
  }, [imagePreview]);

  const openFileInput = () => {
    document.getElementById("uploadInput").click();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginLeft: "1rem",
            padding: "10px",
            fontSize: "1.5rem",
            fontWeight: "500",
          }}
        >
          {" "}
          Site logo
        </div>
        <div
          style={{
            width: "230px",
            height: "92px",
            borderRadius: "10px",
            cursor: "pointer",
            overflow: "hidden",
            padding: "10px",
          }}
          onClick={openFileInput}
        >
          {localImagePreview ? (
            <img
              src={localImagePreview}
              alt="Uploaded Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Click to upload image
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingsAdmin;
