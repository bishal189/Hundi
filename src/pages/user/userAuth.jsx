import "./css/userAuth.css";
import UserAuthContent from "../../assets/userAuthContent.png";
import { Link } from "react-router-dom";
import { CustomForm } from "../../components/user/formInput";
import { Form } from "react-bootstrap";
export function UserSignIn() {
  return (
    <div className="mainContainer">
      <Link to="/">
        {" "}
        <button className="backButton">Back</button>
      </Link>

      <div className="d-none d-md-flex leftContainer">
        <div className="leftContent">
          <div className="leftText">
            <h2>
              Welcome Back
              <br />
              New Update Available
            </h2>
            <h3>
              We have Added Some New
              <br /> Awesome Features
            </h3>
          </div>
          <img src={UserAuthContent} />
        </div>
      </div>

      <div className=" rightContainer">
        <div className="rightContent">
            <h2>Logo</h2>
            <Form.Control
              className="rightForm"
              // onChangeCapture={props.onChange && props.onChange}
              size="lg"
              // defaultValue={props.val}
              type="text"
              name="emailOrPhone"
              placeholder="Email Or Phone"
              aria-label="Email Or Phone"
            />{" "}
           
            <br /><br />

            <Form.Control
            className="rightForm"
              // onChangeCapture={props.onChange && props.onChange}
              size="lg"
              // defaultValue={props.val}
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
            />{" "}
            <button className="loginButton" >Login</button>
            <p >You dont have an account?<Link to="/userRegister">Register Here</Link></p>
          </div>

      </div>
    </div>
  );
}

export function UserRegister() {
  return <div>Register</div>;
}
