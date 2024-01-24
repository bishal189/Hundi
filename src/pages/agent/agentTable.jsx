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
        <tr style={{textAlign:"center"}}>
          <td style={{ backgroundColor: "transparent" }}>Name</td>
          <td style={{ backgroundColor: "transparent" }}>User Id</td>
          <td style={{ backgroundColor: "transparent" }}>Email Id</td>
         

          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {props.list &&
          props.list.map((l, index) => {
             const date= new Date(l.created_at);
              const formattedDate = date.toLocaleDateString();
              const formattedTime = date.toLocaleTimeString();
              const formattedDateTime = `${formattedDate} ${formattedTime}`;
              console.log(formattedDateTime)
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
