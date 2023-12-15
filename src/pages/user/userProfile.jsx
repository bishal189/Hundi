import { Col, Button, Row } from "react-bootstrap";
import { CustomForm } from "../../components/user/formInput";
import { ErrorModal } from "../../components/user/errorModal";
import AxiosInstance from "../../axiosInstance";
import { useEffect, useState } from "react";
function Form(props) {
  return (
    <Col style={{ marginBottom: "1.5rem" }} md={4}>
      <p style={{ padding: "0", margin: "0", color: "#000000" }}>
        {props.title}
      </p>

      <CustomForm
        type={props.type}
        name={props.name}
        readonly={props.readonly}
        val={props.value}
        placeholder={props.title}
        onChange={props.onChange}
      />
    </Col>
  );
}

export function UserProfile() {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [updateUser, setUpdateUser] = useState({});
  const onChangeUser = (e) => {
    const {name, value} = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };
  useEffect(() => {
    console.log(updateUser);
  });

  const [date, setDate] = useState(null);



  useEffect(() => {
    async function getUser() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const userResponse = await AxiosInstance.get("/auth/getuser", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUser(userResponse.data.data);
          const formattedDate = new Date(userResponse.data.data.date_joined)
            .toISOString()
            .split("T")[0];
          setDate(formattedDate);
        
      } catch (error) {
        setModal(true);
        setError(error.message);
      }
    }
    getUser();
  }, []);
const handleSubmit=async()=>{
    try {
        const accessToken = localStorage.getItem("accessToken");
        const userResponse = await AxiosInstance.post("/auth/updateProfile/", updateUser,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setError(userResponse.data.message)
        setModal(true)
    }catch(error){
        setModal(true)
        setError(error.response.data.error)
        console.log(error)
    }
}

  return (
    <>
      {modal && <ErrorModal show={true} closeModal={setModal} error={error} />}
      <div style={{ backgroundColor: "#dfe6ee", height: "100vh" }}>
        <div style={{ paddingTop: "1rem", paddingLeft: "2rem" }}>
          <h4>Basic Info</h4>
        </div>
        <Row style={{ width: "80%", margin: "20px  auto 0px " }}>
          <Form
            title="Name"
            name="name"
            onChange={onChangeUser}
            value={user && user.name}
          />
          <Form
            readonly={true}
            title="Country"
            value={(user && user.country) || ""}
          />
          <Form
            readonly={true}
            title="Phone"
            value={(user && user.phone_number) || ""}
          />
          <Form
            readonly={true}
            title="UserId"
            value={(user && user.id) || ""}
          />
          <Form
            readonly={true}
            title="Email"
            value={(user && user.email) || ""}
          />
          <Form
            title="Gender"
            name="gender"
            onChange={onChangeUser}
            value={(user && user.gender) || ""}
          />
          <Form
            title="Date Of Birth"
            name="date_of_birth"
            onChange={onChangeUser}
            type="date"
            value={(user && user.date_of_birth) || ""}
          />
          <Form
            title="City"
            name="city"
            onChange={onChangeUser}
            value={(user && user.city) || ""}
          />
          <Form
            title="Zip Code"
            name="zip_code"
            onChange={onChangeUser}
            value={(user && user.zip_code) || ""}
          />
          <Form
            title="Address"
            name="address"
            onChange={onChangeUser}
            value={(user && user.address) || ""}
          />
          <Form
            readonly={true}
            type="date"
            title="Joining Date"
            value={user && date}
          />
        </Row>
        <div style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
          <h5>Change Password</h5>
          <Row style={{ width: "70%", margin: "30px  auto 0px " }}>
            <Form
              onChange={onChangeUser}
              name="password"
              title="New Password"
            />
            <Form
              onChange={onChangeUser}
              name="confirmPassword"
              title="Confirm Password"
            />
          </Row>
        </div>
        <div style={{ padding: "10px 40px", textAlign: "center" }}>
          <Button onClick={handleSubmit} style={{ backgroundColor: "#2e8a99" }}>Save Changes</Button>
        </div>
      </div>
    </>
  );
}
