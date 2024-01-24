import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CiMail, CiWallet } from "react-icons/ci";
import { FcSimCardChip } from "react-icons/fc";

const SwitchButtons = ({
  label,
  leftButtonLable,
  rightButtonLable,
  active,
}) => {
  return (
    <div>
      <p style={{ fontSize: ".9rem" }}>{label}</p>
      {active ? (
        <div
          className="d-flex rounded my-1"
          style={{ width: "100%", overflow: "hidden", height: "30px" }}
        >
          <button
            style={{
              width: "50%",
              border: "none",
              background: "#1F7D8A",
              color: "white",
              fontSize: ".9rem",
            }}
          >
            {leftButtonLable}
          </button>
          <button style={{ width: "50%", border: "none", fontSize: ".9rem" }}>
            {rightButtonLable}
          </button>
        </div>
      ) : (
        <div
          className="d-flex rounded my-1"
          style={{ width: "100%", overflow: "hidden", height: "30px" }}
        >
          <button
            style={{
              width: "50%",
              border: "none",
              fontSize: ".9rem",
            }}
          >
            {leftButtonLable}
          </button>
          <button
            style={{
              width: "50%",
              border: "none",
              color: "white",
              background: "#FF5151",
              fontSize: ".9rem",
            }}
          >
            {rightButtonLable}
          </button>
        </div>
      )}
    </div>
  );
};

const InputComponent = ({ legend, text = "", type = "text" }) => {
  const [input, setInput] = useState(legend);
  const updateInput = (e) => {
    setInput(e.value);
  };
  return (
    <div className="container" style={{ width: "100%" }}>
      <p style={{ fontSize: ".9rem" }}>{legend}</p>
      <input
        onChange={updateInput}
        className="rounded-1 border-bottom p-2 my-1"
        type={type}
        value={input}
        style={{
          border: "none",
          background: "#e7e7e7",
          width: "100%",
          height: "40px",
          fontSize: ".9rem",
        }}
      />
    </div>
  );
};

const CustomerDetails = (props) => {
  return (
    <div className="container" style={{ background: "#e7e7e7" }}>
      <div className="row">
        <div className="col d-flex justify-content-between md-2 mt-4 mx-4">
          <h4>Details of Aurthor Noah</h4>
          <button
            className="rounded"
            style={{
              border: "none",
              background: "#53449F",
              width: "85px",
              color: "white",
              height: "35px",
              fontSize: ".9rem",
            }}
          >
            Back
          </button>
        </div>
      </div>
      <div className="row my-0">
        <div
          className="col d-flex flex-column align-items-center py-3 px-4 my-2 mx-4 rounded"
          style={{ background: "white" }}
        >
          <div className="">
            <img
              className="rounded-circle"
              height={80}
              width={80}
              src="data:image/jpeg;base64,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"
            />
          </div>
          <h6 className="m-1" style={{ fontSize: ".9rem" }}>
            Author Noah
          </h6>
          <p className="m-0" style={{ fontSize: ".9rem" }}>
            America
          </p>
          <p className="m-0 p-0" style={{ fontSize: ".7rem" }}>
            User
          </p>

          <div className="d-flex align-items-center my-2">
            <button
              className="mx-1 rounded-circle align-item-center"
              style={{ background: "#53449F", border: "none" }}
            >
              <CiMail style={{ color: "white", fontSize: ".9rem" }} />
            </button>
            <button
              className="mx-1 rounded-circle"
              style={{ background: "#53449F", border: "none" }}
            >
              <CiWallet style={{ color: "white", fontSize: ".9rem" }} />
            </button>
            <button
              className="mx-1 rounded-circle"
              style={{ background: "#53449F", border: "none" }}
            >
              <CiWallet style={{ color: "white", fontSize: ".9rem" }} />
            </button>
          </div>

          <div
            className="card my-2 rounded px-3 py-2"
            style={{ background: "#1F7D8A", width: "100%" }}
          >
            <div className="d-flex justify-content-between  ">
              <p style={{ fontSize: ".9rem", color: "white" }}>Main Wallet</p>
              <FcSimCardChip style={{ fontSize: "1.9rem" }} />
            </div>
            <div className="d-flex justify-content-between">
              <p style={{ fontSize: ".9rem", color: "white", margin: 0 }}>
                USD
              </p>
              <p
                style={{
                  fontSize: ".9rem",
                  color: "white",
                  margin: 0,
                  padding: 0,
                }}
              >
                4356
              </p>
            </div>
          </div>
          <div className="my-3" style={{ width: "100%" }}>
            <h6>Account Information</h6>
            <SwitchButtons
              label="Account status"
              leftButtonLable="Active"
              rightButtonLable="Disabled"
              active={true}
            />
            <SwitchButtons
              label="Email Verification"
              leftButtonLable="Verified"
              rightButtonLable="Unverified"
              active={false}
            />
            <SwitchButtons
              label="KYC Varification"
              leftButtonLable="Verified"
              rightButtonLable="Unverified"
              active={false}
            />
            <SwitchButtons
              label="Withdraw status"
              leftButtonLable="Enable"
              rightButtonLable="Disabled"
              active={true}
            />
            <SwitchButtons
              label="Diposit status"
              leftButtonLable="Enable"
              rightButtonLable="Disabled"
              active={true}
            />
            <SwitchButtons
              label="Send money status"
              leftButtonLable="Enable"
              rightButtonLable="Disabled"
              active={true}
            />

            <button
              className="rounded mt-3"
              style={{
                border: "none",
                color: "white",
                background: "#53449F",
                width: "100%",
                height: "35px",
                fontSize: ".9rem",
              }}
            >
              Save Changes
            </button>
          </div>
        </div>

        <div
          className="col-8 d-flex flex-column align-items-start py-3 px-4 my-2 mx-4 rounded"
          style={{ background: "white" }}
        >
          <div className="d-flex align-items-start">
            <button
              style={{
                width: "130px",
                height: "35px",
                background: "#53449F",
                border: "none",
                color: "white",
                textAlign: "start",
                paddingLeft: "20px",
                fontSize: ".9rem",
              }}
            >
              Information
            </button>
            <button
              style={{
                width: "130px",
                height: "35px",
                border: "none",
                textAlign: "start",
                paddingLeft: "20px",
                fontSize: ".9rem",
              }}
            >
              Transaction
            </button>

            <button
              style={{
                width: "130px",
                height: "35px",
                border: "none",
                textAlign: "start",
                paddingLeft: "20px",
                fontSize: ".9rem",
              }}
            >
              Ticket
            </button>
          </div>

          <div className="container my-4 p-0">
            <h5>Basic Info</h5>
            <div className="d-flex justify-content-between my-1">
              <InputComponent legend="First name" text="Arthur" />
              <InputComponent legend="Last name" text="Noha" />
              <InputComponent legend="Country" text="America" />
            </div>
            <div className="d-flex justify-content-between my-1">
              <InputComponent legend="Phone" text="+918923723" />
              <InputComponent legend="User ID" text="87456" />
              <InputComponent legend="Email" text="exmple@gmail.com" />
            </div>
            <div className="d-flex justify-content-between my-1">
              <InputComponent legend="Gender" text="Male" />
              <InputComponent legend="Date of birth" text="14 july 1980" />
              <InputComponent legend="Citry" text="California" />
            </div>
            <div className="d-flex justify-content-between my-1">
              <InputComponent legend="Zip code" text="8767" />
              <InputComponent legend="Address" text="magalbare 7" />
              <InputComponent legend="Joing date" text="2 aug, 2002, 14:20" />
            </div>
            <div className="container d-flex justify-content-center">
              <button
                className="my-3 rounded"
                style={{
                  width: "45%",
                  background: "#53449F",
                  color: "white",
                  border: "none",
                  height: "30px",
                  fontSize: ".9rem",
                }}
              >
                Save Changes
              </button>
            </div>
          </div>

          <div className="container">
            <h5>Change Password</h5>
            <div className="container my-4 p-0">
              <div className="d-flex">
                <InputComponent legend="New password" type="Password" />
                <InputComponent legend="Confirm password" type="Password" />
              </div>
              <div className="container d-flex justify-content-center">
                <button
                  className="my-3 rounded"
                  style={{
                    width: "45%",
                    background: "#53449F",
                    color: "white",
                    border: "none",
                    height: "30px",
                    fontSize: ".9rem",
                  }}
                >
                  Save Changes
                </button>
              </div>
              <div className="container d-flex justify-content-center">
                <button
                  className="my-0 rounded"
                  style={{
                    width: "45%",
                    background: "#FF5151",
                    color: "white",
                    border: "none",
                    height: "30px",
                    fontSize: ".9rem",
                  }}
                >
                  Remove Aurthor Noha
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
