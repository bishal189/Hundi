import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { CustomForm } from "../../components/user/formInput";
import { ErrorModal } from "../../components/user/popupModal";
import AxiosInstance from "../../axiosInstance";
function Send() {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [color, setColor] = useState("red");

  const [request, setRequest] = useState({
    requestedTo: "",
    requestedAmount: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };
  useEffect(() => {
    async function retriver() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const userResponse = await AxiosInstance.get("/auth/getuser", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(userResponse.data.data);
      } catch (error) {
        setModal(true);
        setError(error.message);
        setColor('red')

      }
    }
    retriver();
  }, []);

  const handleClick = async () => {
    const checker = Object.values(request).some((value) => value === "");
    if (checker) {
      setError("Some Values are Empty..Fill All values and try again");
      setModal(true);
      setColor("red");
      return;
    }

    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await AxiosInstance.post(
        "/request/createNewRequest/",
        request,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setError(response.data.message);
      setModal(true);
      setColor("green");
    } catch (err) {
      setError(err.response.data.error);
      setModal(true);
      setColor("red");
    }
  };
  return (
    <>
      {modal && (
        <ErrorModal
          color={color}
          show={true}
          closeModal={setModal}
          error={error}
        />
      )}

      <div className="m-auto mt-5 col-md-6 col-sm-8">
        <p style={{ fontSize: "1rem", marginBottom: "0px" }}>Make a request</p>
        <CustomForm
          placeholder="Your User Id"
          val={(user && user.id) || ""}
          readonly={true}
        />
        <br />
        <CustomForm
          name="requestedTo"
          onChange={handleOnChange}
          placeholder="Use Id to Which Person you Request"
        />
        <br />

        <CustomForm
          placeholder="Your email"
          readonly={true}
          val={(user && user.email) || ""}
        />

        <br />
        <CustomForm
          placeholder="Your Phone Number"
          readonly={true}
          val={(user && user.phone_number) || ""}
        />
        <br />

        <CustomForm
          name="requestedAmount"
          onChange={handleOnChange}
          placeholder="Amount"
        />

        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            style={{ width: "75%", backgroundColor: "#2e8a99" }}
            onClick={handleClick}
          >
            Make Request
          </Button>
        </div>
      </div>
    </>
  );
}
function Receive() {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [color, setColor] = useState("red");

  const [list, setList] = useState(null);
  const colorArr = ["#ededed", "white"];
  useEffect(() => {
    async function retriver() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await AxiosInstance.get(
          "/request/getRequestTransactionHistory/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setList(response.data.data);
      } catch (err) {
        setError(err.response.data.error);
        setModal(true);
        setColor('red')

      }
    }

    retriver();
  }, []);

  const acceptRequest = async (id) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await AxiosInstance.get(
        `/request/acceptRequestTransaction/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setError(response.data.message);
      setModal(true);
      setColor("green");
      setList((prevList) => prevList.filter((l) => l.id !== id));

    } catch (err) {
      setError(err.response.data.error);
      setModal(true);
      setColor('red')
    }
  };
  const rejectRequest = async (id) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await AxiosInstance.get(
        `/request/denyRequestTransaction/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setError(response.data.message);
      setModal(true);
      setColor("green");
      setList((prevList) => prevList.filter((l) => l.id !== id));
    } catch (err) {
      setError(err.response.data.error);
      setModal(true);
      setColor('red')
    }
  };
  return (
    <>
      {modal && (
        <ErrorModal
          color={color}
          show={true}
          closeModal={setModal}
          error={error}
        />
      )}
      <Table
        bordered
        hover
        style={{
          marginLeft: "20px",
          fontSize: ".90rem",
          width: "95%",
          backgroundColor: "transparent",
          overflow:'scroll'
        }}
      >
        <thead>
          <tr>
            <th style={{ backgroundColor: "transparent" }}>Request From</th>
            <th style={{ backgroundColor: "transparent" }}>
              Requester User Id
            </th>
            <th style={{ backgroundColor: "transparent" }}>TransactionId</th>
            <th style={{ backgroundColor: "transparent" }}>Amount</th>
            <th style={{ backgroundColor: "transparent" }}>Status</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((l, index) => {
              return (
                <tr key={index}>
                  <td
                    style={{
                      backgroundColor: colorArr[index % 2],
                      border: "none",
                      paddingTop: "1rem",
                    }}
                  >
                    {l.requester.name}{" "}
                  </td>
                  <td
                    style={{
                      backgroundColor: colorArr[index % 2],
                      border: "none",
                      paddingTop: "1rem",
                    }}
                  >
                    {l.requester.id}{" "}
                  </td>
                  <td
                    style={{
                      backgroundColor: colorArr[index % 2],
                      border: "none",
                      paddingTop: "1rem",
                    }}
                  >
                    {l.id}{" "}
                  </td>
                  <td
                    style={{
                      backgroundColor: colorArr[index % 2],
                      border: "none",
                      paddingTop: "1rem",
                    }}
                  >
                    {l.requestedAmount} USD
                  </td>
                  <td
                    style={{
                      backgroundColor: colorArr[index % 2],
                      border: "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        onClick={() => {
                          acceptRequest(l.id);
                        }}
                        style={{ backgroundColor: "#2e8a99" }}
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={() => {
                          rejectRequest(l.id);
                        }}
                        style={{ backgroundColor: "red" }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export function UserRequest() {
  //To check whether the current Component is send or Receive
  const [current, setCurrent] = useState("Send");

  return (
    <div style={{ backgroundColor: "#dfe6ee", height: "100vh" }}>
      <div style={{ textAlign: "center", paddingTop: "3rem" }}>
        <Button
          style={{
            backgroundColor: current == "Send" ? "#2e8a99" : "#ededed",
            marginRight: "3rem",
            color: current == "Send" ? "white" : "#a4a4a4",
            border: "none",
            padding: "8px 40px",
          }}
          onClick={() => setCurrent("Send")}
        >
          Send
        </Button>
        <Button
          style={{
            backgroundColor: current == "Receive" ? "#2e8a99" : "#ededed",
            border: "none",
            color: current == "Receive" ? "white" : "#a4a4a4",
            marginRight: "3rem",
            padding: "8px 40px",
          }}
          onClick={() => setCurrent("Receive")}
        >
          Receive
        </Button>
      </div>
      {current == "Send" && <Send />}
      {current == "Receive" && <Receive />}
    </div>
  );
}
