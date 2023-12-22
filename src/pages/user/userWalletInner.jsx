import { Button } from "react-bootstrap";
import { CustomForm } from "../../components/user/formInput";
import AxiosInstance from "../../axiosInstance";
import { useState, useEffect } from "react";
import { ErrorModal } from "../../components/user/popupModal";

export function UserSend() {
  const [error, showError] = useState(null);
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState(false);
  const [send, setSend] = useState({
    recipentName: "",
    amount: "",
    recipentAccountNumber: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSend({
      ...send,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const checker = Object.values(send).some((value) => value === "");
    if (checker) {
      showError("Some Values are Empty..Fill All values and try again");
      setModal(true);
      setColor("red");
      return;
    }
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await AxiosInstance.post(
        "/wallet/createNewSendTransaction/",
        send,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      showError(response.data.message);
      setModal(true);
      setColor("green");
    } catch (err) {
      showError(err.response.data.error);
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
          error={error}
          closeModal={setModal}
        />
      )}

      <div style={{ backgroundColor: "#dfe6ee", height: "100vh" }}>
        <div style={{ padding: "3rem", paddingBottom: ".5rem" }}>
          <p style={{ margin: "0px", fontSize: "1rem", color: "#575757" }}>
            Current Balance
          </p>
          <p style={{ fontSize: "2rem" }}>$12433</p>
        </div>
        <div className="col-md-5  col-sm-6 m-auto">
          <p style={{ fontSize: "1rem" }}>Sending To</p>
          <CustomForm
            name="recipentName"
            placeholder="Enter Recipent Name"
            type="text"
            onChange={handleOnChange}
          />
          <br />
          <CustomForm
            name="recipentAccountNumber"
            placeholder=" Recipent Account Number"
            type="text"
            onChange={handleOnChange}
          />
          <br />

          <CustomForm
            name="amount"
            placeholder="Amount"
            type="text"
            onChange={handleOnChange}
          />
          <br />

          <CustomForm
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleOnChange}
          />
          <br />
          <br />
          <Button
            style={{
              backgroundColor: "#2e8a99",
              padding: "10px 80px",
              marginLeft: "25%",
              
            }}
            onClick={handleClick}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
}

export function UserWithdraw() {
  const [error, showError] = useState(null);
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState(false);
  const [withdraw, setWithdraw] = useState({
    name: "",
    amount: "",
    bankAccountNumber: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setWithdraw({
      ...withdraw,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const checker = Object.values(withdraw).some((value) => value === "");
    if (checker) {
      showError("Some Values are Empty..Fill All values and try again");
      setModal(true);
      setColor("red");
      return;
    }
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await AxiosInstance.post(
        "/wallet/createNewWithDrawTransaction/",
        withdraw,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      showError(response.data.message);
      setModal(true);
      setColor("green");
    } catch (err) {
      showError(err.response.data.error);
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
          error={error}
          closeModal={setModal}
        />
      )}
    <div style={{ backgroundColor: "#dfe6ee", height: "100vh" }}>
      <div
        style={{ padding: "3rem", paddingBottom: ".5rem", color: "#575757" }}
      >
        <p style={{ margin: "0px", fontSize: "1rem" }}>Current Balance</p>
        <p style={{ fontSize: "2rem" }}>$12433</p>
      </div>
      <div className="col-md-5  col-sm-6 m-auto">
        <p style={{ fontSize: "1rem" }}>Withdraw</p>
        <CustomForm name="name" placeholder="Your Name" type="text" onChange={handleOnChange}/>
        <br />
        <CustomForm
          name="bankAccountNumber"
          placeholder=" Bank Account No."
          type="text"
          onChange={handleOnChange}
        />
        <br />

        <CustomForm name="amount" placeholder="Amount" type="text" onChange={handleOnChange}/>
        <br />

        <CustomForm name="password" placeholder="Password" type="password" onChange={handleOnChange} />
        <br />
        <br />
        <Button
          style={{
            backgroundColor: "#2e8a99",
            padding: "10px 80px",
            marginLeft: "25%",
          }}
          onClick={handleClick}
        >
          Withdraw
        </Button>
      </div>
    </div>
    </>
  );
}

export function UserTopUp() {
  const [error, showError] = useState(null);
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState(false);
  const [topUp, setTopUp] = useState({
    name: "",
    amount: "",
    bankAccountNumber: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTopUp({
      ...topUp,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const checker = Object.values(topUp).some((value) => value === "");
    if (checker) {
      showError("Some Values are Empty..Fill All values and try again");
      setModal(true);
      setColor("red");
      return;
    }
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await AxiosInstance.post(
        "/wallet/createNewTopUpTransaction/",
        topUp,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      showError(response.data.message);
      setModal(true);
      setColor("green");
    } catch (err) {
      showError(err.response.data.error);
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
          error={error}
          closeModal={setModal}
        />
      )}

      <div style={{ backgroundColor: "#dfe6ee", height: "100vh" }}>
        <div
          style={{ padding: "3rem", paddingBottom: ".5rem", color: "#575757" }}
        >
          <p style={{ margin: "0px", fontSize: "1rem" }}>Current Balance</p>
          <p style={{ fontSize: "2rem" }}>$12433</p>
        </div>
        <div className="col-md-5  col-sm-6 m-auto">
          <p style={{ fontSize: "1rem" }}>Make a Top Up</p>
          <CustomForm
            name="name"
            placeholder="Your Name"
            type="text"
            onChange={handleOnChange}
          />
          <br />
          <CustomForm
            name="bankAccountNumber"
            placeholder=" Account no."
            type="text"
            onChange={handleOnChange}
          />
          <br />

          <CustomForm
            name="amount"
            placeholder="Amount"
            type="text"
            onChange={handleOnChange}
          />
          <br />

          <CustomForm
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleOnChange}
          />
          <br />
          <br />

          <Button
            onClick={handleClick}
            style={{
              backgroundColor: "#2e8a99",
              padding: "10px 80px",
              marginLeft: "25%",
            }}
          >
            Top Up
          </Button>
        </div>
      </div>
    </>
  );
}
