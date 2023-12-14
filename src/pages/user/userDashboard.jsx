import { Button } from "react-bootstrap";

function SmallCards(props) {
  return (
    <>
      <Button style={{ backgroundColor: "#2e8a99", width: "20%" }}>
        <span style={{ float: "left", fontSize: ".70rem" }}>{props.title}</span>
    <br />
        <span style={{ float: "left", fontWeight: "600" }}>$126000</span>
      </Button>
    </>
  );
}
export function UserDashboard() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#dfe6ee",
          paddingTop: "2rem",
          height: "100vh",
        }}
      >
        <div
          style={{
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <SmallCards title="Balance"/>
          <SmallCards title="Total Send Money"/>
          <SmallCards title="Total Top Up"/>
          <SmallCards title="Total Received"/>
        </div>
        <div
          style={{
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <SmallCards title="Sucessfull Transfer"/>
          <SmallCards title="SucessFull Topup"/>
          <SmallCards title="Top Buy"/>
          <SmallCards title="Total Buy"/>
        </div>
      </div>
    </>
  );
}
